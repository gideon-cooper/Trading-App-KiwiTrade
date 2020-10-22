import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
  
const Nav = ( props) => {
  console.log("NAV",props)
    return(
        <View style={styles.nav}>
        <TouchableOpacity onPress={()=> props.navigation.navigate("Home")} style={styles.navItem}>
          <View>
            <Text style={styles.navText}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> props.navigation.navigate("Profile", {user: props.user})} style={styles.navItem}>
          <View style={styles.navItem}>
            <Text style={styles.navText}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
    

}
const styles = StyleSheet.create({
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
})
export default Nav