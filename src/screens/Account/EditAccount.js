import { View, Alert,Text,Image,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearTextGradient } from "react-native-text-gradient";
import LinearGradient from 'react-native-linear-gradient';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import MyIcons from 'react-native-vector-icons/Entypo'

const EditAccount = ({navigation}) => {
  const myfunc=()=>{
    Alert.alert('submited successfully');
  }
  return (
    <View style={{flex: 1,backgroundColor: 'black'}}>

      <View
      style={{
       // borderWidth: 1,borderColor: 'red',
      height: hp(10),width: wp(100),marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 40
    }}
      >
        
        <Image 
        source={require('../../assets/images/mypic.jpg')}
        resizeMode='contain' 
        style={{
          width: wp(20),height: hp(10),
          borderRadius: 100
        
        }}
        />
      </View>

    <View style={{paddingBottom: 10}}>
    <Text style={{color: 'white',textAlign: 'left',paddingLeft: 10,fontSize: 16}}>
            First Name
        </Text>

        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          height: hp(8),
          borderRadius: 5,
          margin:5
          

        }}>
       <MyIcons name="user"  size={20} color={'grey'} 
        style={{margin: 5}}
    />


        <TextInput
          style={{flex: 1, fontSize: 16}}
          placeholder="Rana"
          placeholderTextColor={'grey'}
        />
    </View>
      </View>  
        

      <View style={{paddingBottom: 10}}>
    <Text style={{color: 'white',textAlign: 'left',paddingLeft: 10,fontSize: 16}}>
            Last Name
        </Text>

        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          height: hp(8),
          borderRadius: 5,
          margin: 5,

        }}>
       <MyIcons name="user"  size={20} color={'grey'} 
        style={{margin: 5}}
    />


        <TextInput
          style={{flex: 1, fontSize: 16}}
          placeholder="Rashid"
          placeholderTextColor={'grey'}
        />
    </View>
      </View>  
   
      <View style={{paddingBottom: 10}}>
    <Text style={{color: 'white',textAlign: 'left',paddingLeft: 10,fontSize: 16}}>
            Date of Birth
        </Text>

        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          height: hp(8),
          borderRadius: 5,
          margin: 5,

        }}>
       <Icon name="calendar-today"  
       size={20} color={'grey'} 
        style={{margin: 5}}
    />


        <TextInput
          style={{flex: 1, fontSize: 16}}
          placeholder="17/Feb/1989"
          placeholderTextColor={'grey'}
        />
    </View>
      </View>  
   


      <View style={{paddingBottom: 10}}>
    <Text style={{color: 'white',textAlign: 'left',paddingLeft: 10,fontSize: 16}}>
            Email
        </Text>

        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          height: hp(8),
          borderRadius: 5,
          margin: 5,

        }}>
       <Icon name="email"  
       size={20} color={'grey'} 
        style={{margin: 5}}
    />


        <TextInput
          style={{flex: 1, fontSize: 16}}
          placeholder="rashidrana092@gmail.com"
          placeholderTextColor={'grey'}
        />
    </View>
      </View>  
   

      <View style={{paddingBottom: 10}}>
    <Text style={{color: 'white',textAlign: 'left',paddingLeft: 10,fontSize: 16}}>
            Location
        </Text>

        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          height: hp(8),
          borderRadius: 5,
          margin: 5,

        }}>
       <MyIcons name="location-pin"  
       size={20} color={'grey'} 
        style={{margin: 5}}
    />


        <TextInput
          style={{flex: 1, fontSize: 16}}
          placeholder="Arifwala"
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
       }}>Update</Text>
      
      </LinearGradient>
      </TouchableOpacity>
        
      </View>



    </View>
  )
}

export default EditAccount