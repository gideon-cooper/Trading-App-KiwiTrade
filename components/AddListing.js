import React, {useState, useContext} from 'react'
import {firebase} from "../firebase/config"
import ImagePicker from 'react-native-image-picker'
import {ListingContext} from "../context/ListingContext"
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
  
export default function AddListing(props) {
    console.log(props)
    const [listingsArray, setListingsArray] = useContext(ListingContext)
   
    const [Title, setTitle] = useState('')
    const [Price, setPrice] = useState(Number(''))
    const [Image, setImage] = useState('')
    const handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            setImage( response.uri)
          }
        })
      }
    const handleSubmit= () => {
        const data = {
            Title,Price,Image
        }
        const listingsRef = firebase.firestore().collection('listings')
        console.log(data)
      
        listingsRef
            .add(data).then(() => {
                setListingsArray(listingsArray => [...listingsArray,data])
                props.navigation.navigate('Home')
            }   
            )
    }
    return (
        
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Add Listing</Text>
            </View>
            <View style={styles.form}>
                <TextInput type='text' name='Title' style={styles.input} onChangeText={(text) => setTitle(text)}placeholder="Enter listing name"></TextInput>
                <TextInput name='Price' onChangeText={(text) => setPrice(text)} style={styles.input} placeholder="Enter Price"></TextInput>
                <Button color='green' title="Choose Photo" onPress={() => handleChoosePhoto()} />
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => handleSubmit()}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        color: 'green',
        fontSize: 32,
    },
    titleContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    form: {
        flex: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    input: {
        width: '60%',
        marginBottom: 16,
        borderBottomWidth: 0.4,
        padding: 10,
    
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
          fontSize: 28
      }
})
