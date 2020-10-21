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

export default function Listing({listing}) {
  console.log(listing)
  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: listing.Image,
          }}
        />
      </View>
      <View style={styles.itemBottom}>
        <Text style={styles.title}>{listing.Title}</Text>
        <Text style={styles.price}>${listing.Price}</Text>
      </View>
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
