import React from 'react';

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

export default function Listing(props) {
  console.log(props,"a")
  return (
    <View  style={styles.item}>
      {/* <TouchableOpacity  > */}
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={()=> props.navigation.navigate("ListingDetails", {props})}>
            <Image
            
            style={styles.image}
            source={{
              uri: props.listing.Image,
            }}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.itemBottom}>
          <Text style={styles.title}>{props.listing.Title}</Text>
          <Text style={styles.price}>${props.listing.Price}</Text>
        </View>
      {/* </TouchableOpacity> */}
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 250,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'lightgray'
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    width: '100%',
    height: '100%',

  },
  itemBottom: {
    flex: 1,
  
    padding: 10,
  },
  title: {
    fontSize: 26,
  },
  price: {
    color: 'green',
    fontSize: 22,
  },
});
