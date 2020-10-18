import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <ScrollView style={styles.itemContainer}>
          <View style={styles.item}>
            <View style={styles.imageContainer}></View>
            <View style={styles.itemBottom}>
              <Text style={styles.title}>HEYYYYYYYYY</Text>
              <Text style={styles.price}>$1200</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.imageContainer}></View>
            <View style={styles.itemBottom}></View>
          </View>
          <View style={styles.item}>
            <View style={styles.imageContainer}></View>
            <View style={styles.itemBottom}></View>
          </View>
          <View style={styles.item}>
            <View style={styles.imageContainer}></View>
            <View style={styles.itemBottom}></View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.navItem}>
          <View>
            <Text style={styles.navText}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navItem}>
            <Text style={styles.navText}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  item: {
    width: '100%',
    height: 250,
    backgroundColor: 'red',
    marginTop: 20,
  },
  imageContainer: {
    flex: 2,
    backgroundColor: 'yellow',
  },
  itemBottom: {
    flex: 1,
    backgroundColor: 'purple',
  },
  title: {
    fontSize: 26,
  },
  price: {
    color: 'green',
    fontSize: 22,
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
