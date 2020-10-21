import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
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

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onLoginPress = () => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("User does not exist.")
                        return;
                    }
                    const user = firestoreDocument.data()
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'Home' }],
                    });
                    navigation.navigate('Home', {user})
                })
                .catch(error => {
                    alert(error)
                });
        })
        .catch(error => {
            alert(error)
        })
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
          <Button onPress={() => onLoginPress()} color='green' title="Log in"/>
          <View style={styles.button}>
             <Button onPress={()=> navigation.navigate("Register")}  color='green' title="Register"/>
          </View>
      </View>
    </View>
  );
};
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
export default Login;
