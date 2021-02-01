import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Alert } from "react-native";
import storage from '@react-native-firebase/storage';
import * as firebase from 'firebase';


export async function registration(email, password, name, address, contact) {
    try {


        var actionCodeSettings =
        {
            url: 'https://learnandgrow.page.link/emailverification',

            handleCodeInApp: true,
            iOS: {
                bundleId: 'org.reactjs.native.Learn-and-Grow',
                installApp: true,
                minimumVersion: '12'
            },

            android: {
                packageName: 'com.learn_and_grow',
                installApp: true,
                minimumVersion: '12'
            },

        };

        await firebase.auth().createUserWithEmailAndPassword(email, password);
        //await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
        const currentUser = firebase.auth().currentUser;
        await firebase.auth().currentUser.sendEmailVerification(actionCodeSettings);

        const db = firestore();
        db.collection("users")
            .doc(email)
            .set({
                email: currentUser.email,
                name: name,
                address: address,
                contact: contact,

            });
    } catch (err) {
        Alert.alert("There is something wrong!!!!", err.message);
    }
}

export async function addProduct(name, description, price, imageName, imagePath) {

     
    

    try {
        let reference = storage().ref(`Products/${name}`);
        let task = reference.putFile(imagePath);
        let imageUrl = "";
        
        task.then(() => {

            console.log('Image uploaded to the bucket!');
            storage().ref(`Products/${name}`)
            .getDownloadURL()
            .then((url) => { 

                const db = firestore();
            db.collection("products")
                .doc(name)
                .set({
                    name: name,
                    descriptiom: description,
                    price: price,
                    reference: url
                });
                Alert.alert('Product Added Successfully');
                
            });

            

        }).catch((e) => {
            console.log('uploading image error => ', e);
        });
    } catch (err) {
        Alert.alert("There is something wrong!!!!", err.message);
    }
}

export async function signIn(email, password, props) {
    try {
        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
        props.navigation.replace('Loading');
    } catch (err) {
        Alert.alert("There is something wrong!", err.message);
    }
}

export async function loggingOut() {
    try {
        await firebase.auth().signOut();
    } catch (err) {
        Alert.alert('There is something wrong!', err.message);
    }
}
