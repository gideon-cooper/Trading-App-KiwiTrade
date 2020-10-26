import React, {useState, useContext} from 'react'
import {ListingContext} from "../context/ListingContext"
import {firebase} from "../firebase/config"
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
  

export default function ListingDetails(props) {
    const [listingsArray, setListingsArray] = useContext(ListingContext)
    const listingsRef = firebase.firestore().collection('listings').doc(props.route.params.props.listing.id)
    const handlePress = () => {
        listingsRef.delete().then(() => {
            setListingsArray(listingsArray.filter((item) => item.id !== props.route.params.props.listing.id))
            return props.navigation.navigate("Home")
        })
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: props.route.params.props.listing.Image}}></Image>
            </View>
            <View style={styles.informationContainer}>
                <Text style={styles.text}>{props.route.params.props.listing.Title}</Text>
                <Text style={styles.text}>${props.route.params.props.listing.Price}</Text>
                <TouchableOpacity onPress={() => handlePress()} style={styles.button}>
                    <View>
                        <Text style={styles.buttonText}>Purchase</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageContainer: {
        flex: 1,
  
    },
    image: {
        width: '100%',
        height: '100%'
    },
    informationContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10
    },
    button: {
        marginTop: 20,
        backgroundColor: 'green',
        width: '50%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 24
    }
})