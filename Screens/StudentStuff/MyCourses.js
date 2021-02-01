import * as React from 'react';
import { Text, View, SafeAreaView, FlatList, StyleSheet, ScrollView, Button, StatusBar, Image,TouchableOpacity} from 'react-native';
import {Header, Container, Left, ListItem,Content,List} from 'native-base';
import 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';

import Video from 'react-native-video';





export default class MyCourses extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <Container>
            <Header style={{ paddingRight: "90%", paddingTop: "3%" }}>
    
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} ></Icon>
    
    
    
        </Header>
            <ScrollView style={{flex: 1}}>

            <View style={{width:'100%', height: 100, backgroundColor: 'black', flexDirection:'row',borderColor:"black",borderWidth:2 }} >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EnrollCourses',{uri:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"})} >
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7oe4zk7MR38KEfO47yPyViQE5wU_xjvY2Q&usqp=CAU'}} style={{width:150, height:70, padding:48}} />
                </TouchableOpacity>
                <View>
                <Text style={{fontSize:25,padding:5,color:'white'}}>Bunny video</Text>
                <Text style={{fontSize:15,padding:5,color:'white'}}>This is the description of the video.</Text>
                </View>
            </View>
            <View style={{width:'100%', height: 100, backgroundColor: 'white', flexDirection:'row' ,borderColor:"black",borderWidth:2 }} >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EnrollCourses',{uri:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"})} >
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Nr4WR8s_cC_Ddya4ZQl_THXjSsfj2l088w&usqp=CAU'}} style={{width:150, height:70, padding:48}} />
                </TouchableOpacity>
                <View>
                <Text style={{fontSize:25,padding:5}}>Bunny video</Text>
                <Text style={{fontSize:15,padding:5}}>This is the description of the video.</Text>
                </View>
            </View>
            <View style={{width:'100%', height: 100, backgroundColor: 'black', flexDirection:'row' ,borderColor:"black",borderWidth:2 }} >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EnrollCourses',{uri:"https://www.javatpoint.com/oprweb/movie.mp4"})} >
                <Image source={{uri:'https://imgcp.aacdn.jp/img-a/1200/900/global-aaj-front/article/2017/12/5a307779aad6f_5a307767efee1_337860917.jpg'}} style={{width:150, height:70, padding:48}} />
                </TouchableOpacity>
                <View>
                <Text style={{fontSize:25,padding:5,color:'white'}}>Bunny video</Text>
                <Text style={{fontSize:15,padding:5,color:'white'}}>This is the description of the video.</Text>
                </View>
            </View>
            <View style={{width:'100%', height: 100, backgroundColor: 'white', flexDirection:'row',borderColor:"black",borderWidth:2 }} >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EnrollCourses',{uri:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"})} >
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7oe4zk7MR38KEfO47yPyViQE5wU_xjvY2Q&usqp=CAU'}} style={{width:150, height:70, padding:48}} />
                </TouchableOpacity>
                <View>
                <Text style={{fontSize:25,padding:5}}>Bunny video</Text>
                <Text style={{fontSize:15,padding:5}}>This is the description of the video.</Text>
                </View>
            </View>
            <View style={{width:'100%', height: 100, backgroundColor: 'black', flexDirection:'row' ,borderColor:"black",borderWidth:2 }} >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EnrollCourses',{uri:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"})} >
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Nr4WR8s_cC_Ddya4ZQl_THXjSsfj2l088w&usqp=CAU'}} style={{width:150, height:70, padding:48}} />
                </TouchableOpacity>
                <View>
                <Text style={{fontSize:25,padding:5,color:'white'}}>Bunny video</Text>
                <Text style={{fontSize:15,padding:5,color:'white'}}>This is the description of the video.</Text>
                </View>
            </View>
            <View style={{width:'100%', height: 100, backgroundColor: 'white', flexDirection:'row' ,borderColor:"black",borderWidth:2 }} >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EnrollCourses',{uri:"https://www.javatpoint.com/oprweb/movie.mp4"})} >
                <Image source={{uri:'https://imgcp.aacdn.jp/img-a/1200/900/global-aaj-front/article/2017/12/5a307779aad6f_5a307767efee1_337860917.jpg'}} style={{width:150, height:70, padding:48}} />
                </TouchableOpacity>
                <View>
                <Text style={{fontSize:25,padding:5}}>Bunny video</Text>
                <Text style={{fontSize:15,padding:5}}>This is the description of the video.</Text>
                </View>
            </View>
            <View style={{width:'100%', height: 100, backgroundColor: 'black', flexDirection:'row',borderColor:"black",borderWidth:2 }} >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EnrollCourses',{uri:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"})} >
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7oe4zk7MR38KEfO47yPyViQE5wU_xjvY2Q&usqp=CAU'}} style={{width:150, height:70, padding:48}} />
                </TouchableOpacity>
                <View>
                <Text style={{fontSize:25,padding:5,color:'white'}}>Bunny video</Text>
                <Text style={{fontSize:15,padding:5,color:'white'}}>This is the description of the video.</Text>
                </View>
            </View>
            <View style={{width:'100%', height: 100, backgroundColor: 'white', flexDirection:'row' ,borderColor:"black",borderWidth:2 }} >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EnrollCourses',{uri:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"})} >
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Nr4WR8s_cC_Ddya4ZQl_THXjSsfj2l088w&usqp=CAU'}} style={{width:150, height:70, padding:48}} />
                </TouchableOpacity>
                <View>
                <Text style={{fontSize:25,padding:5}}>Bunny video</Text>
                <Text style={{fontSize:15,padding:5}}>This is the description of the video.</Text>
                </View>
            </View>
            <View style={{width:'100%', height: 100, backgroundColor: 'black', flexDirection:'row' ,borderColor:"black",borderWidth:2 }} >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EnrollCourses',{uri:"https://www.javatpoint.com/oprweb/movie.mp4"})} >
                <Image source={{uri:'https://imgcp.aacdn.jp/img-a/1200/900/global-aaj-front/article/2017/12/5a307779aad6f_5a307767efee1_337860917.jpg'}} style={{width:150, height:70, padding:48}} />
                </TouchableOpacity>
                <View>
                <Text style={{fontSize:25,padding:5,color:'white'}}>Bunny video</Text>
                <Text style={{fontSize:15,padding:5,color:'white'}}>This is the description of the video.</Text>
                </View>
            </View>


          </ScrollView>
</Container>
        )
            
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
flex:1
    },
  });

{/* <View style={styles.backgroundVideo}>
<Button title="press me" onPress={()=>this.props.navigation.navigate('EnrollCourses',{uri:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"})}/>
</View> */}