import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

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
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>
          Kiwi<Text style={styles.green}>Trade</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"></TextInput>
        <TextInput
          secureTextEntry={true}
     
          style={styles.input}
          placeholder="Enter password"></TextInput>
          <Button onPress={()=> navigation.navigate("Home")} color='green' title="Log in"/>
          <View style={styles.button}>
             <Button color='green' title="Register"/>
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
