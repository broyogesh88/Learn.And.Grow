import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Alert,
  Button,
  StatusBar,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

import apiKeys from './config/keys';
import Home from './Screens/StudentStuff/Home';
import LoadingScreen from './Screens/LoadingScreen';
import Icon from 'react-native-ionicons';
import Profile from './Screens/StudentStuff/Profile';
import Prof from './Screens/StudentStuff/Profile/index';
import Events from './Screens/StudentStuff/Events';
import Quiz from './Screens/StudentStuff/Quiz';
import Products from './Screens/StudentStuff/Products';
import EnrollCourses from './Screens/StudentStuff/Courses';
import Courses from './Screens/StudentStuff/MyCourses';
import AddProduct from './Screens/AddProduct';
import Product from './Screens/Products';
import { loggingOut } from './API/firebaseMethods';


import * as firebase from 'firebase';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';


import THome from './Screens/TeacherStuff/THome';
import TProfile from './Screens/TeacherStuff/TProfile';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function TabNavigator() {



  return (



    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'MyClasses') {
              iconName = focused
                ? 'folder-open'
                : 'folder-open';
            } else if (route.name === 'EnrollCourses') {
              iconName = focused ? 'school' : 'school';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="MyClasses" component={Courses} />
        <Tab.Screen name="EnrollCourses" component={EnrollCourses} />
      </Tab.Navigator>

    </SafeAreaView>
  )
}


function TCustomDrawerContent(props) {
  // let currentUserUID = firebase.auth().currentUser.email;
  // const [imageUrl, setImageUrl] = useState("./Screens/default.png");
  // const [firstName, setFirstName] = useState('');
  // useEffect(() => {

  //   async function getUserInfo() {

  //     const userDocument = await firestore().collection("users").doc(currentUserUID).get();

  //     if (!userDocument.exists) {
  //       Alert.alert('No user data found!')
  //     } else {
  //       let dataObj = userDocument.data();
  //       setFirstName(dataObj.name)
  //     }
  //   }
  //   getUserInfo();



  //   storage()
  //     .ref(`Profile/${currentUserUID}`) //name in storage in firebase console
  //     .getDownloadURL()
  //     .then((url) => {
  //       setImageUrl(url);
  //     })

  //     .catch((e) => console.log('Errors while downloading => ', e));


  // },

  //   []);



  return (
    <DrawerContentScrollView {...props} >
      {/* <View style={{ padding: '5%', flexDirection: "row", backgroundColor: "#0275d8" }}>
        <Image style={{ height: 80, borderRadius: 100, width: 80 }} source={{ uri: imageUrl }} />
        <View style={{ padding: '5%', flexDirection: "column" }}>
          <Text style={{ color: "white" }}>{firstName}</Text>
          <Text style={{ color: "white" }}>{currentUserUID}</Text>
        </View>
      </View> */}
      <DrawerItemList {...props} />
      <DrawerItem icon={() => (<Icon
        style={{ paddingLeft: '3%', color: '#0275d8' }}

        name="exit"
        size={30} />)} label="Logout" onPress={() => Alert.alert(
          "",
          "Are you sure?",
          [
            {
              text: "No",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "Yes", onPress: () => { loggingOut, props.navigation.replace('Login') } }
          ],
          { cancelable: true }
        )} />
    </DrawerContentScrollView>
  );
}



function CustomDrawerContent(props) {
  
  let currentUserUID = firebase.auth().currentUser.email;
  const [imageUrl, setImageUrl] = useState("./Screens/default.png");
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

    <DrawerContentScrollView {...props} >
      <View style={{ padding: '5%', flexDirection: "row", backgroundColor: "#0275d8" }}>
        <Image style={{ height: 80, borderRadius: 100, width: 80 }} source={{ uri: imageUrl }} />
        <View style={{ padding: '5%', flexDirection: "column" }}>
          <Text style={{ color: "white" }}>{firstName}</Text>
          <Text style={{ color: "white" }}>{currentUserUID}</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem icon={() => (<Icon
        style={{ paddingLeft: '5%', color: '#0275d8' }}

        name="exit"
        size={30} />)} label="Logout" onPress={() => Alert.alert(
          "",
          "Are you sure?",
          [
            {
              text: "No",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "Yes", onPress: () => { loggingOut, props.navigation.replace('Login') } }
          ],
          { cancelable: true }
        )} />
    </DrawerContentScrollView>
  );
}

function TDrawerRoutes(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>


      <Drawer.Navigator drawerContent={props => <TCustomDrawerContent {...props} />} initialRouteName="THome" >

        <Drawer.Screen name="Home"
          component={THome} options={{
            drawerIcon: ({ focused, size }) => (<Icon
              style={{ paddingLeft: 10, color: '#0275d8' }}

              name="md-home"
              size={30}
            />
            )
          }} />

        <Drawer.Screen name="Profile"
          component={TProfile} options={{
            drawerIcon: ({ focused, size }) => (<Icon
              style={{ paddingLeft: 10, color: '#0275d8' }}

              name="person"
              size={30} />)
          }} />
      </Drawer.Navigator>
    </SafeAreaView>
  );
}



function DrawerRoutes(props) {


  return (
    <SafeAreaView style={{ flex: 1 }}>


      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Home" >

        <Drawer.Screen name="Home"
          component={Home} options={{
            drawerIcon: ({ focused, size }) => (<Icon
              style={{ paddingLeft: 10, color: '#0275d8' }}
              name="md-home"
              size={30}
            />
            )
          }} />
        <Drawer.Screen name="Profile"
          component={Profile} options={{
            drawerIcon: ({ focused, size }) => (<Icon
              style={{ paddingLeft: 10, color: '#0275d8' }}

              name="person"
              size={30} />)
          }} />
        <Drawer.Screen name="Events"
          component={Events} options={{
            drawerIcon: ({ focused, size }) => (<Icon
              style={{ paddingLeft: 10, color: '#0275d8' }}

              name="calendar"
              size={30} />)
          }} />
        <Drawer.Screen name="Quiz"
          component={Quiz} options={{
            drawerIcon: ({ focused, size }) => (<Icon
              style={{ paddingLeft: 10, color: '#0275d8' }}

              name="clipboard"
              size={30} />)
          }} />
        <Drawer.Screen name="Products"
          component={Products} options={{
            drawerIcon: ({ focused, size }) => (<Icon
              style={{ paddingLeft: 10, color: '#0275d8' }}

              name="cart"
              size={30} />)
          }} />
        <Drawer.Screen name="Courses"
          component={TabNavigator} options={{
            drawerIcon: ({ focused, size }) => (<Icon
              style={{ paddingLeft: 10, color: '#0275d8' }}

              name="book"
              size={30} />)
          }} />




      </Drawer.Navigator>
    </SafeAreaView>
  );
}


function App() {

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Splash"
          component={Splash} />
        <Stack.Screen name="Login"
          component={Login} />
        <Stack.Screen name="Signup"
          component={Signup} />
        <Stack.Screen name="Home"
          component={DrawerRoutes} />
        <Stack.Screen name={'Loading'}
          component={LoadingScreen} />
        <Stack.Screen name={'AddProduct'}
          component={AddProduct} />
        <Stack.Screen name={'Product'}
          component={Product} />
        <Stack.Screen name={'Prof'}
          component={Prof} />



        <Stack.Screen name="THome"
          component={TDrawerRoutes} />
      </Stack.Navigator>

    </NavigationContainer>
  );

}

const styles = StyleSheet.create({});
export default App;