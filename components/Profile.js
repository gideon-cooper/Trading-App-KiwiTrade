import React from 'react'
import { StackActions} from '@react-navigation/native'
import {firebase} from "../firebase/config"

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

const Profile = (props) => {
  console.log(props)
  const handlePress = () => {
    firebase.auth().signOut().then(() => {
      console.log("HIT")
      props.navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
      return props.navigation.navigate('Login')
    })
  }
  console.log(props.route.params.user)
    return(
        <SafeAreaView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://www.booksie.com/files/profiles/22/mr-anonymous.png'}}></Image>
          </View>
          <View style={styles.informationContainer}>
            <Text style={styles.email}>{props.route.params.user.email}</Text>
            <Button color='green' onPress={()=> props.navigation.navigate('AddListing')} title="Add listing"></Button>
            <View style={styles.button}>
              <Button color='green' onPress={() => handlePress()}title="Log out"></Button>
            </View>
          </View>
          
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    imageContainer:{
      flex: 1,
      backgroundColor:'blue'
    },
    informationContainer: {
      flex: 1,
    },
    email: {
      fontSize: 26,
      textAlign: 'center',
      marginBottom: 12
    },
    button: {
      marginTop: 20
    },
    image: {
      width: '100%',
      height: '100%'
    }
 
   
})
export default Profile