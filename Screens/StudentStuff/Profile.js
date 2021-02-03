import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, Alert, Image } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    IconButton,
    Colors,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import { Header, Container, Left } from 'native-base';

import Icon from 'react-native-ionicons';

import Share from 'react-native-share';
import ImagePicker from 'react-native-image-picker';


import * as firebase from 'firebase';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';


const getPlatformURI = (imagePath) => {
    let imgSource = imagePath;
    if (isNaN(imagePath)) {
        imgSource = { uri: imagePath };
        if (Platform.OS == 'android') {
            imgSource.uri = "file:///" + imgSource.uri;
        }
    }
    return imgSource
}



const Profile = (props) => {

    let currentUserUID = firebase.auth().currentUser.email;
    const [imageUrl, setImageUrl] = useState("./Screens/default.png");

    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');

    let [imagePath, setImagePath] = useState(require("./default.png"));
    const [imageName, setImageName] = useState('');

    let [imgSource, setImageSource] = useState(imagePath);

    

    const AdminSection = () => {
        Alert.alert("Pressed")
    };

    const Click = () => {
        uploadImageToStorage(imagePath, imageName, currentUserUID);
    };

    function selectImage() {
        let options = {
          title: 'You can choose one image',
          maxWidth: 256,
          maxHeight: 256,
          storageOptions: {
            skipBackup: true
          }
        };
    
        ImagePicker.showImagePicker(options, response => {
          console.log({ response });
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
            Alert.alert('You did not select any image');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            let source = { uri: response.uri };
            console.log({ source });

            let path = getPlatformPath(response).value;
            let fileName = getFileName(response.fileName, path);
            setImagePath(path);
            setImageName(fileName);
            setImageSource(getPlatformURI(imagePath));
            confirm();
          }
        });
      }

    getPlatformPath = ({ path, uri }) => {
        return Platform.select({
            android: { "value": path },
            ios: { "value": uri }
        })
    }

    getFileName = (name, path) =>
    {
        if (name != null) { return name; }

        if (Platform.OS === "ios") {
            path = "~" + path.substring(path.indexOf("/Documents"));
        }
        return path.split("/").pop();
    }

    const getPlatformURI = (imagePath) => {
        let imgSource = imagePath;
        if (isNaN(imagePath)) {
            imgSource = { uri: imagePath };
            if (Platform.OS == 'android') {
                imgSource.uri = "file:///" + imgSource.uri;
            }
        }
        return imgSource
    }

    const uploadImageToStorage = (path, name, uid) => 
    {

        let reference = storage().ref(`Profile/${uid}`);
        let task = reference.putFile(path);
        
        task.then(() => {
            console.log('Image uploaded to the bucket!');
            Alert.alert('Profile Picture Updated');
            props.navigation.replace('Home');
    
        }).catch((e) => {
            console.log('uploading image error => ', e);
            Alert.alert('Image uploading failed');
        });
    }

    const confirm = () => {
        Alert.alert(
            "Are you sure",
            "Please select!",
            [
                {
                    text: "No",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Yes", onPress: () => uploadImageToStorage(imagePath, imageName, currentUserUID)
                }
            ],
            { cancelable: true }
        );
    }


     

    
    

   

    useEffect(() => {

        async function getUserInfo() {

            const userDocument = await firestore().collection("users").doc(currentUserUID).get();

            if (!userDocument.exists) {
                Alert.alert('No user data found!')
            } else {
                let dataObj = userDocument.data();
                setFirstName(dataObj.name)
                setAddress(dataObj.address)
                setContact(dataObj.contact)
            }
        }
        getUserInfo();



        storage()
            .ref(`Profile/${currentUserUID}`) //name in storage in firebase console
            .getDownloadURL()
            .then((url) => {
                setImageUrl(url);
            })

            .catch((e) => console.log('Errors while downloading => ', e));


    },

        []);

    return (


        <Container>
            <Header style={{ paddingRight: "90%", paddingTop: "3%", backgroundColor: "#0275d8" }}>

                <Icon name="menu" onPress={() => props.navigation.openDrawer()} style={{ color: 'white' }}></Icon>
            </Header>


            <SafeAreaView style={styles.container}>
            <Image style={{height:0, width:0}} source={imgSource} />

                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>

                        <Avatar.Image
                            source={{
                                uri: imageUrl,
                            }}
                            size={80}
                        />

                        <View style={{ marginLeft: 20 }}>
                            <Title style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                            }]}>{firstName}</Title>

                            <TouchableRipple onPress={() => { AdminSection() }}>
                                <Caption style={styles.caption}>Change Password</Caption>

                            </TouchableRipple>

                            <TouchableRipple onPress={() => { selectImage() }}>

                                <Caption style={styles.caption}>Change Profile Picture</Caption>

                            </TouchableRipple>
        
                        </View>
                    </View>
                </View>

                <View style={styles.userInfoSection}>

                    <View style={styles.row}>
                        <Icon name="pin" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>{address}   </Text>
                        <Icon name="create" onPress={() => { AdminSection() }} color="#777777" size={20} />
                    </View>


                    <View style={styles.row}>
                        <Icon name="call" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>{contact}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="mail" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>{currentUserUID}</Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1
                    }]}>
                        <Title>₹140.50</Title>
                        <Caption>Wallet</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title>12</Title>
                        <Caption>Orders</Caption>
                    </View>
                </View>

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="heart-outline" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>Your Favorites</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="credit-card" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>Payment</Text>
                        </View>
                    </TouchableRipple>



                </View>
            </SafeAreaView>
        </Container>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        color: "blue"
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});