import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearTextGradient } from "react-native-text-gradient";
import Styles from './Styles';


const Login = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={Styles.container}>
      <Image
        style={Styles.logo}
        source={require('../../assets/icons/logo.png')}
      />
      
     
      {/* <LinearTextGradient
        style={{fontWeight: 'bold', fontSize: 25}}
        locations={[0, 1]}
        colors={['red', 'blue']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        >
        <Text>fhh</Text>
      </LinearTextGradient> */}

<Text style={{
  
  color: 'white',fontSize: 30,
  fontWeight: 'bold'
  
  }}>
  Rateable
  </Text>
  
      <Text
        style={{
          color: 'white',
          marginTop: 20,
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        Login to your account
      </Text>

      <View
        style={Styles.textInputView}>
        <Image
          source={require('../../assets/icons/user.png')}
          style={Styles.textInputIcon}
          />

        <TextInput
          style={{flex: 1, fontSize: 16, textAlign: 'center'}}
          placeholder="username"
          placeholderTextColor={'black'}
        />
      </View>

      <View
        style={Styles.textInputView}>
        <Image
          source={require('../../assets/icons/lock.png')}
          style={Styles.textInputIcon}
          />

        <TextInput
          style={{flex: 1, fontSize: 16, textAlign: 'center'}}
          placeholder="password"
          placeholderTextColor={'black'}
        />
      </View>
      <View
        style={{
          // backgroundColor:'white',
          width: wp(95),
          height: hp(5),
          flexDirection: 'row',
          marginBottom: 20
        }}>
        <Icon
          onPress={() => setIsChecked(!isChecked)}
          name={isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={28}
          color="lightgrey"
        />
        <Text
          style={{
            color: 'white',
            marginLeft: 10,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          Remember me
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            marginHorizontal: 125,
            fontWeight: 'bold',
          }}>
          Forgot Password
        </Text>
      </View>

      <View style={Styles.gradientButtonView}>
       <TouchableOpacity
       style={Styles.gradientButton}
       onPress={()=>navigation.navigate('Home')}
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
       }}>Login</Text>
      
      </LinearGradient>
      </TouchableOpacity>
        
      </View>


      <View
        style={Styles.normalButton}>
        <TouchableOpacity
          style={{
            height: hp(8),
            width: wp(90),
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'white',
            flexDirection: 'row',
          }}>
          <Icon name="email" size={40} color={'white'}
           style={{margin: 10}} />

          <Text
            style={Styles.normalButtonText}>
            Signup with Email
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={Styles.normalButton}>
        <TouchableOpacity
          style={{
            height: hp(8),
            width: wp(90),
            borderRadius: 5,
            borderWidth: 1,
            backgroundColor: '#192F69',
            flexDirection: 'row',
          }}>
          <Icon
            name="facebook"
            size={40}
            color={'white'}
            style={{margin: 12}}
          />

          <Text
            style={Styles.normalButtonText}>
            Login with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
