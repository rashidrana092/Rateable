import { StyleSheet, Text, View,Image,ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearTextGradient } from "react-native-text-gradient";
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
const Splash = (props) => {
useEffect(()=>{
setTimeout(() => {
  props.navigation.navigate('Login')
}, 3000);
},[])

  return (
    <View style={Styles.container}>
      <Image 
      style={styles.logo}
      source={require('../../assets/images/star.png')}
      />
      <Text style={styles.logotext}>Rateable</Text>
      <ActivityIndicator />

      {/* <LinearTextGradient
        style={{fontWeight: 'bold', fontSize: 25}}
        locations={[0, 1]}
        colors={['red', 'blue']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text>Rateable</Text>
      </LinearTextGradient> */}

    </View>
  )
}

export default Splash;
