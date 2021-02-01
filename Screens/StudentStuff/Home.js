import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { loggingOut } from '../../API/firebaseMethods';
import { Header, Container, Left } from 'native-base';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Icon from 'react-native-ionicons';

export default function Home(props) {
    let currentUserUID = firebase.auth().currentUser.email;

    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        async function getUserInfo() {

            const userDocument = await firestore().collection("users").doc(currentUserUID).get();
            
            if (!userDocument.exists) {
                Alert.alert('No user data found!')
            } else {
                let dataObj = userDocument.data();
                setFirstName(dataObj.name)
            }
        }
        getUserInfo();
    })

    const handlePress = () => {
        Alert.alert(currentUserUID)
        Alert.alert(firstName);
        //loggingOut();
        //navigation.replace('Login');
    };
    const [imageUrl, setImageUrl] = useState("./default.png");
    //const ref = storage().ref('Profile/broyogesh88@gmail.com');
    //const url = ref.getDownloadURL();
    //console.log(currentUserUID);


    useEffect(() => {
        storage()
            .ref(`Profile/${currentUserUID}`) //name in storage in firebase console
            .getDownloadURL()
            .then((url) => {
                setImageUrl(url);
            })
            .catch((e) => console.log('Errors while downloading => ', e));
    }, []);


    return (



        <View style={styles.container} >

            <Header style={{ paddingRight: "90%", paddingTop: "3%", backgroundColor:"#0275d8"}}>

                <Icon name="menu" onPress={() => props.navigation.openDrawer()} style={{color:'white'}}></Icon>
            </Header>
            <Text style={styles.titleText}>Dashboard</Text>
        
            <Text style={styles.text}>Hi {firstName}</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>







        </View>
    )
}

const styles = StyleSheet.create({

});




