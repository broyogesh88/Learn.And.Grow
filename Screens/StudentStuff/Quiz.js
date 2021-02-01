import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, Button, StatusBar} from 'react-native';
import {Header, Container, Left, Icon} from 'native-base';
import 'react-native-gesture-handler';





export default class Quiz extends React.Component {
    render() {
        return (
           <Container>
               <Header style={{paddingRight:"90%",paddingTop:"3%", backgroundColor:"black"}}>
                   
                   <Icon name="ios-menu" onPress = {()=> this.props.navigation.openDrawer()} style={{backgroundColor:"white",height:"70%"}}></Icon>

                   
                   
               </Header>
               <Text>Quiz</Text>
           </Container>

        )
            
    }
}




