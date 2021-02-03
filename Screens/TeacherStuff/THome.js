import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, Button, StatusBar } from 'react-native';
import { Header, Container, Left } from 'native-base';
import 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';

export default function Home(props) {
    return (
        <Container>
            <Header style={{ paddingRight: "90%", paddingTop: "3%", backgroundColor: "#0275d8" }}>

                <Icon name="menu" onPress={() => props.navigation.openDrawer()} style={{ color: 'white' }}></Icon>
            </Header>
            <Text>Teacher Home</Text>
        </Container>

    )


}




