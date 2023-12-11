import { View, Text,Image,TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearTextGradient } from "react-native-text-gradient";
import LinearGradient from 'react-native-linear-gradient';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


const Account = ({navigation}) => {
     const myfunc=()=>{
          Alert.alert('under construction');
        }
  return (
    <View style={{flex: 1,backgroundColor: 'black'}}>

      <View
      style={{
       // borderWidth: 1,borderColor: 'red',
      height: hp(20),width: wp(100),marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center'
    }}
      >
        <Image 
        source={require('../../assets/images/mypic.jpg')}
        resizeMode='contain' 
        style={{
          width: wp(30),height: hp(15),
          borderRadius: 100
        
        }}
        />
      </View>


      {/* <LinearTextGradient
  style={{ fontWeight: "bold", fontSize: 25, marginHorizontal: 100,alignSelf: 'center',//borderWidth: 1,borderColor: 'red'
}}
  locations={[0, 1]}
  colors={["red", "blue"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
>
<Text>Rana Rashid</Text> */}

{/* </LinearTextGradient> */}
<Text style={{color: 'white',fontSize: 30,fontWeight: 'bold',textAlign: 'center'}}>
  Rana Rashid
  </Text>
 
<View style={{
    //  backgroundColor: 'red',
      height: hp(10),
      width: wp(100),
      borderRadius: 5,
      //borderWidth: 1,
      //borderColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: -15,
      
      }}>
       <TouchableOpacity
       style={{height: hp(7),width: wp(50),
       //borderWidth: 2,borderColor: 'red',
       //borderRadius: 20
      }}
      //onPress={myfunc}
       onPress={()=>navigation.navigate('EditAccount')}
       >
       <LinearGradient
          start={{x: 0, y: 0}}
          //end={{x: 1, y: 0}}
          colors={['purple', '#192f6a']}
          style={{borderRadius: 20}}
          >
        
       <Text style={{
        color: 'white',
       fontSize: 25,
       textAlign: 'center',
       margin: 10,
       fontWeight: 'bold',
       alignSelf: 'center',

       }}>Rashid Rater</Text>
      
      </LinearGradient>
      </TouchableOpacity>
        
      </View>
      <Text style={{color: 'white',textAlign: 'center',fontSize: 14,paddingTop: 10}}>rashidrana092@gmail.com</Text> 

  <View
  style={{flexDirection: 'row',paddingTop :30,
       //borderWidth: 1,borderColor: 'red'
       }}>
       <TouchableOpacity
       onPress={()=>navigation.navigate('MyRating')}
       
       >
       <View
  style={{flexDirection: 'row',paddingTop :10,
       //borderWidth: 1,borderColor: 'red',
       width: wp(100),justifyContent:'space-between'

}}>
        <Text style={{color: 'white',textAlign: 'center',fontSize: 16,paddingLeft: 5}}>My Ratings</Text>
    
        <Icon 
        name='greater-than'
        size={16}
        color={'white'}
        style={{paddingRight: 5,paddingBottom: 10,marginTop: 10}}
        />
    </View>    
       </TouchableOpacity>
  </View>
    
       <View style={{height: 1,backgroundColor: 'white'}} />

       <View
  style={{flexDirection: 'row'
       //borderWidth: 1,borderColor: 'red'
       }}>
       <TouchableOpacity
              onPress={()=>navigation.navigate('EditAccount')}

       >
       <View
  style={{flexDirection: 'row',paddingTop :10,
       //borderWidth: 1,borderColor: 'red',
       width: wp(100),justifyContent:'space-between'

}}>
        <Text style={{color: 'white',textAlign: 'center',fontSize: 16,paddingLeft: 5}}>Edit Account</Text>
    
        <Icon 
        name='greater-than'
        size={16}
        color={'white'}
        style={{paddingRight: 5,paddingBottom: 10,marginTop: 10}}
        />
    </View>    
       </TouchableOpacity>
  </View>
    
       <View style={{height: 1,backgroundColor: 'white'}} />


       <View style={{height: 1,backgroundColor: 'white'}} />

       <View
  style={{flexDirection: 'row'
       //borderWidth: 1,borderColor: 'red'
       }}>
       <TouchableOpacity
       onPress={()=>navigation.navigate('ResetPassword')}
       >
       <View
  style={{flexDirection: 'row',paddingTop :10,
       //borderWidth: 1,borderColor: 'red',
       width: wp(100),justifyContent:'space-between'

}}>
        <Text style={{color: 'white',textAlign: 'center',fontSize: 16,paddingLeft: 5}}>Reset Password</Text>
    
        <Icon 
        name='greater-than'
        size={16}
        color={'white'}
        style={{paddingRight: 5,paddingBottom: 10,marginTop: 10}}
        />
    </View>    
       </TouchableOpacity>
  </View>
    
       <View style={{height: 1,backgroundColor: 'white'}} />

       <View style={{height: 1,backgroundColor: 'white'}} />

       <View
  style={{flexDirection: 'row'
       //borderWidth: 1,borderColor: 'red'
       }}>
       <TouchableOpacity
       onPress={myfunc}
       >
       <View
  style={{flexDirection: 'row',paddingTop :10,
       //borderWidth: 1,borderColor: 'red',
       width: wp(100),justifyContent:'space-between'

}}>
        <Text style={{color: 'white',textAlign: 'center',fontSize: 16,paddingLeft: 5}}>About Rateable</Text>
    
        <Icon 
        name='greater-than'
        size={16}
        color={'white'}
        style={{paddingRight: 5,paddingBottom: 10,marginTop: 10}}
        />
    </View>    
       </TouchableOpacity>
  </View>
    
       <View style={{height: 1,backgroundColor: 'white'}} />

    </View>
  )
}

export default Account