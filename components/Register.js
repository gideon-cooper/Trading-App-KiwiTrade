import React, {useState} from 'react'
import {firebase} from "../firebase/config"

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    Button,
  } from 'react-native';
  

export default function Register({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.reset({
                          index: 0,
                          routes: [{ name: 'Home' }],
                        });
                        navigation.navigate('Home', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }
    return (
        <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>
          Kiwi<Text style={styles.green}>Trade</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter email"></TextInput>
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder="Enter password"></TextInput>
          <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.input}
          placeholder="Confirm Password"></TextInput>
          <Button onPress={() => onRegisterPress()} color='green' title="Register"/>
          <View style={styles.button}>
             <Button color='green' onPress={()=> navigation.navigate("Login")}  title="Log in"/>
          </View>
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputContainer: {
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
      
    },
    title: {
      fontSize: 40,
      fontWeight: '200',
      textAlign: 'center',
      marginBottom: 20
    },
    green: {
      color: 'green',
    
    },
    input: {
      width: '60%',
      marginBottom: 16,
      borderBottomWidth: 0.4,
      padding: 10,
  
    },
    button: {
      marginTop: 10
    }
  
  
  });
