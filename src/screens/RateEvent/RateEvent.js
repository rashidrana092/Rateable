import {StyleSheet, Text, View,Image,TextInput, TouchableOpacity,Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React,{useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearTextGradient } from "react-native-text-gradient";
import StarRating from 'react-native-star-svg-rating';

const RateEvent = ({navigation}) => {
    const [rating, setRating] = useState(0);

      const myfunc=()=>{
        Alert.alert('comment saved successfully')
      }
    return (


    <View style={styles.container}>
    
        <Text style={{color: 'white',textAlign: 'left',fontSize: 22,marginLeft: 20,
        fontWeight: 'bold',marginBottom: 20
    }}>Tap to Rate</Text>


    <Text style={{color: 'white',fontSize: 22,textAlign: 'center',fontWeight: 'bold'}}>
      {rating}/{5}</Text>

<View 
    style={{alignItems: 'center',paddingBottom: 20}}
>
  <StarRating
        rating={rating}
        onChange={setRating}
        starSize={40}
        enableHalfStar={false}
        color='#C01CB9'
      />
</View>

<Text style={{color: 'white',fontSize: 18,paddingLeft: 10,paddingBottom: 10}}>
      Comment</Text>
<View style={{alignItems: 'center',paddingBottom: 30
//borderWidth: 1,borderColor: 'red'
}}>
<TextInput
placeholder='enter text' 
style={{backgroundColor: 'white',
width: wp(95),
height: hp(20),
fontSize: 16,
borderRadius: 5

}}
/>
</View>

<View style={{alignItems: 'center',
//borderWidth: 1,borderColor: 'red'
paddingBottom: 30,backgroundColor: 'white',
height: hp(20),width: wp(95),
alignSelf: 'center',borderRadius: 5,
alignItems: 'center',
}}>


<Icon 
name='image'
size={150}
color={'black'}
style={{marginTop: 5}}
/>
</View>

<View style={{flexDirection: 'row',paddingTop: 20,paddingBottom: 20}}>

  <Text style={{color: 'white',fontSize: 18,paddingHorizontal: 10}}>Share on</Text>

<View style={{justifyContent: 'center',flexDirection:'row',
width: wp(60),
//borderWidth: 1,borderColor: 'red'
}}>
      <Icon
        name='facebook'
        size={25}
        color={'white'}
        style={{paddingHorizontal: 20}}  
      />
      <Icon
        name='twitter'
        size={25}
        color={'white'}
        style={{paddingHorizontal: 20}}  

      />

      <Icon
        name='whatsapp'
        size={25}
        color={'white'}
        style={{paddingHorizontal: 20}}  

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
       style={{height: hp(8),width: wp(90),borderRadius: 10,
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
       fontSize: 25,
       textAlign: 'center',
       margin: 10,
       fontWeight: 'bold',
       }}>Post</Text>
      
      </LinearGradient>
      </TouchableOpacity>
        
      </View>






    </View>

  )
}

export default RateEvent;

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'black',
  //  alignItems: 'center',

},

})