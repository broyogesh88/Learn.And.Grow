import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, Button, StatusBar} from 'react-native';
import {Header, Container, Left, Icon} from 'native-base';
import 'react-native-gesture-handler';





export default class Events extends React.Component {
    render() {
        return (
           <Container>
               <Header style={{paddingRight:"90%",paddingTop:"3%", backgroundColor:"black",backgroundColor:'#0275d8'}}>
                   
                   <Icon name="menu" onPress = {()=> this.props.navigation.openDrawer()} style={{backgroundColor:"white",height:"70%"}}></Icon>

                   
                   
               </Header>
               <Text>Events</Text>
           </Container>

        )
            
    }
}




