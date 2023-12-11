import { View, Text,Image,TouchableOpacity,TextInput,Alert } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearTextGradient } from "react-native-text-gradient";
import LinearGradient from 'react-native-linear-gradient';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import MyIcons from 'react-native-vector-icons/Entypo'

const Contactus = ({navigation}) => {
  const myfunc=()=>{
    Alert.alert("submitted successfully");
  }
  return (
    <View style={{flex: 1,backgroundColor: 'black'}}>

    <Text style={{fontSize: 24,color: 'white',textAlign: 'center',fontWeight: 'bold',paddingVertical: 30}}>Contact Us</Text>

    <View style={{paddingBottom: 5}}>

        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          height: hp(8),
          borderRadius: 5,
          marginHorizontal: 10,
            
        }}>


        <TextInput
          style={{flex: 1, fontSize: 16,padding: 20}}
          placeholder="First Name"
          placeholderTextColor={'grey'}
          
        />
    </View>
      </View>  
      <View style={{paddingBottom: 5}}>

<View
style={{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  height: hp(8),
  borderRadius: 5,
  marginHorizontal: 10,
    
}}>


<TextInput
  style={{flex: 1, fontSize: 16,padding: 20}}
  placeholder="Email"
  placeholderTextColor={'grey'}
  
/>
</View>
</View>  

<View style={{paddingBottom: 5}}>

        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          height: hp(8),
          borderRadius: 5,
          marginHorizontal: 10,
            
        }}>


        <TextInput
          style={{flex: 1, fontSize: 16,padding: 20}}
          placeholder="Company"
          placeholderTextColor={'grey'}
          
        />
    </View>
      </View>  

      <View style={{paddingBottom: 5}}>

<View
style={{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  height: hp(8),
  borderRadius: 5,
  marginHorizontal: 10,
    
}}>


<TextInput
  style={{flex: 1, fontSize: 16,padding: 20}}
  placeholder="Message"
  placeholderTextColor={'grey'}
  
/>
</View>
</View>  

      <View style={{
    //  backgroundColor: 'red',
      height: hp(10),
      width: wp(100),
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'center',
      paddingTop: 5
      // borderWidth: 1,
      // borderColor: 'red'
      }}>
       <TouchableOpacity
       style={{height: hp(8),width: wp(95),borderRadius: 10,
       //borderWidth: 2,
       //borderColor: 'red'
      }}
      onPress={myfunc}
       //onPress={()=>navigation.navigate('Home')}
       >
       <LinearGradient
          start={{x: 0, y: 0}}
          //end={{x: 1, y: 0}}
          colors={['purple', '#192f6a']}
          >
        
       <Text style={{
        color: 'white',
       fontSize: 20,
       textAlign: 'center',
       margin: 18,
       //fontWeight: 'bold',
       }}>Submit</Text>
      
      </LinearGradient>
      </TouchableOpacity>
        
      </View>



    </View>
  )
}

export default Contactus