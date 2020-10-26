import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ListingProvider} from "./context/ListingContext"
import Login from './components/Login';
import Home from './components/Home';
import AddListing from "./components/AddListing"
import ListingDetails from "./components/ListingDetails"
import Profile from './components/Profile';
import Register from './components/Register';
import {firebase} from "./firebase/config"
import {ActivityIndicator, View} from 'react-native'

const Stack = createStackNavigator();
const App = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {  
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
           setLoading(false)
          });
      } else{
        setLoading(false)
      }
    });
  }, []);
   if(loading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  return (
    <ListingProvider>
      <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="AddListing" component={AddListing} />
              <Stack.Screen name="ListingDetails" component={ListingDetails} />
              <Stack.Screen name="Home">
                {(props) => <Home {...props} user={user} />}
              </Stack.Screen>
              <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </ListingProvider>
  );
};

export default App;
