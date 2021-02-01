import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Image, FlatList, View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-ionicons';
import { Header, Container, Left } from 'native-base';

export default function Products(props) {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
      .collection('products')
      .onSnapshot(querySnapshot => {
        const users = [];

        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }


  return (


    <Container>

      <Header style={{ paddingRight: "90%", paddingTop: "3%", backgroundColor: "#0275d8" }}>

        <Icon name="menu" onPress={() => props.navigation.openDrawer()} style={{ color: 'white' }}></Icon>
      </Header>
    


    <FlatGrid
      itemDimension={130}
      data={users}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: "red" }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.price}</Text>

          <Image
            style={styles.tinyLogo}
            source={{ uri: item.reference }}


          />
        </View>
      )}
    />
    </Container>
    



    );

  // ...
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
});