import { Text, View, Alert, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView, Button, StatusBar } from 'react-native';
// import {Header, Container, Left, Icon} from 'native-base';
import 'react-native-gesture-handler';
import AnimatedInput from 'react-native-animated-input';
import React, { useState, useEffect } from 'react';
import { AppStyles } from "../assets/AppStyles";
import { signIn } from '../API/firebaseMethods';
import * as firebase from 'firebase';

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handlePress = () => {
        if (!email) {
            Alert.alert('Email is required.');
        }

        if (!password) {
            Alert.alert('Password is required.');
        }

        signIn(email, password, props);
        setEmail('');
        setPassword('');

    };

    const AdminSection = () => {
        props.navigation.push('Product')
    };


    const showProfession = () => {
        Alert.alert(
            "Who are you?",
            "Please select!",
            [
                {
                    text: "Teacher",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Student", onPress: () => props.navigation.push('Signup')
                }
            ],
            { cancelable: true }
        );
    }

    return (
        <View style={styles.container}>

            <Text style={{ color: 'blue', paddingLeft: "80%"}} onPress={() => AdminSection()}>Admin</Text>

            <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.body}
                    placeholder="E-mail or phone number"
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.body}
                    secureTextEntry={true}
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholderTextColor={AppStyles.color.grey}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={{ height: '5%' }}></View>

            <TouchableOpacity onPress={() => handlePress()} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Login</Text>
            </TouchableOpacity>

            


            <Text style={styles.or}>OR</Text>
            <Text>Not Registered yet? <Text style={{ color: 'blue' }} onPress={() => showProfession()}> Create Account</Text>
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    or: {
        fontFamily: AppStyles.fontName.main,
        color: "black",
        marginTop: 20,
        marginBottom: 10
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: "bold",
        color: AppStyles.color.tint,
        marginTop: 20,
        marginBottom: 20
    },
    leftTitle: {
        alignSelf: "stretch",
        textAlign: "left",
        marginLeft: 20
    },
    content: {
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: "center",
        fontSize: AppStyles.fontSize.content,
        color: AppStyles.color.text
    },
    loginContainer: {
        width: AppStyles.buttonWidth.main,
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30
    },
    loginText: {
        color: AppStyles.color.white
    },
    placeholder: {
        fontFamily: AppStyles.fontName.text,
        color: "red"
    },
    InputContainer: {
        width: AppStyles.textInputWidth.main,
        marginTop: 30,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: AppStyles.color.grey,
        borderRadius: AppStyles.borderRadius.main
    },
    body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: AppStyles.color.text
    },

    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }


});

export default Login;




