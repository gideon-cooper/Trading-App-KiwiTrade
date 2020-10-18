import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TextInput,
    StatusBar,
    Button,
  } from 'react-native';
  
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <ScrollView style={styles.itemContainer}>
                    <View style={styles.item}>
                        <View style={styles.imageContainer}>

                        </View>
                        <View style={styles.itemBottom}>
                            <Text style={styles.title}>HEYYYYYYYYY</Text>
                            <Text style={styles.price}>$1200</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.imageContainer}>

                        </View>
                        <View style={styles.itemBottom}>

                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.imageContainer}>

                        </View>
                        <View style={styles.itemBottom}>

                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.imageContainer}>

                        </View>
                        <View style={styles.itemBottom}>

                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.nav}>
                
            </View>
            
        </SafeAreaView>
    )
 
}

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        backgroundColor: 'white',
       
    },
    main: {
        width: '100%',
        height: '92%' ,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' ,
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
        backgroundColor: 'yellow'
    },
    itemBottom: {
       flex: 1,
       backgroundColor: 'purple'
    },
    title: {
        fontSize: 26
    },
    price: {
        color: 'green',
        fontSize: 22
    },
    nav: {
        width: '100%',
        height: '8%',
        backgroundColor: 'blue'
    }
})
export default Home