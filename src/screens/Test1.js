import { View, Text,Button,Alert } from 'react-native'
import React from 'react';
import Test2 from './Test2';
import {Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function Test1 () {
  const nav=useNavigation();


  return (
    <View>
      <Text style={{fontSize: 40}}>test1</Text>

      <Icon name="home" type="material-community"
        size={50} 
    style={{marginLeft: 10,marginTop: 5}}
    />
  
      <Button title='Go to Test2' 
   onPress={()=>  nav.navigate('Test2')} />


<Button title='open' 
onPress={()=> nav.openDrawer()}/>

<Button title='close' 
onPress={()=>  nav.closeDrawer()}/>

<Button title='toggle' 
onPress={()=>  nav.toggleDrawer()}/>

    </View>
  )
}
