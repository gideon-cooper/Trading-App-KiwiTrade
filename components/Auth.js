import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "./Login"
import Register from "./Register"
const Stack = createStackNavigator();

export default function Auth() {
    return (
        <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </>
    )
}
