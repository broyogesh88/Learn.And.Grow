import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import Loader from 'react-loader-spinner';

export default function LoadingScreen({ navigation }) {
  useEffect(
     () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user.emailVerified) {
          navigation.replace('Home');
        } else {
          navigation.replace('Login');
        }
      });
    }
  );

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        marginTop: 10,
      },

});