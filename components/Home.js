import React, {useState, useEffect, useContext} from 'react';
import Nav from './Nav'
import {firebase} from "../firebase/config"
import {ListingContext} from "../context/ListingContext"
import Listing from "./Listing"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  RefreshControl,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';

const Home = (props) => {
  const [listingsArray, setListingsArray] = useContext(ListingContext)
  const [listings, setListings] = useState([])
  useEffect(() => {
    firebase.firestore().collection("listings")
      .get().then((listing) => listing.docs.map((item) => {
        console.log(item.id)
        setListingsArray(listingsArray => [...listingsArray,{id: item.id, ...item.data()}])
        console.log(listingsArray,"geg")
      }))
  }, [])
  console.log(listings,"geg")
  console.log(props)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <ScrollView style={styles.itemContainer}>
         {listingsArray.map((listing) => {
           return <Listing  key={listing.Title} navigation={props.navigation} listing={listing}/>
         })}
        </ScrollView>
      </View>
      <Nav user={props.user} navigation={props.navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    width: '100%',
    height: '92%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: '90%',
    display: 'flex',
  },
  nav: {
    width: '100%',
    height: '8%',
    display: 'flex',
    flexDirection: 'row',
  },
  navItem: {
    flex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 20,
    color: 'green',
  },
});
export default Home;
