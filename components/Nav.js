import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
  
const Nav = ({navigation}) => {
    return(
        <View style={styles.nav}>
        <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.navItem}>
          <View>
            <Text style={styles.navText}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Profile")} style={styles.navItem}>
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