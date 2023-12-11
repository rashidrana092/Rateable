// in this file styles for Login Screen will be saved.
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
      },
      logo: {
        width: wp(15),
        height: hp(10),
        marginTop: 10,
        //backgroundColor: 'white'
      },
      logoText: {
        fontSize: 30,
        //  color: 'white'
      },
      input: {
        backgroundColor: 'white',
        width: wp(70),
        textAlign: 'center',
        height: hp(10),
        marginBottom: 10,
      },
      inputIcon: {
        width: wp(15),
        height: hp(15),
        backgroundColor: 'red',
        //marginVertical: 10
      },
      gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      textInputView: {
        flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderWidth: 0.5,
          borderColor: '#000',
          height: hp(8),
          borderRadius: 5,
          margin: 10,
      },
      textInputIcon:{
        padding: 10,
        margin: 5,
        height: hp(4),
        width: wp(8),
        resizeMode: 'stretch',
        alignItems: 'center',
      },
      gradientButtonView:{
         //  backgroundColor: 'red',
      //height: hp(10),
      width: wp(100),
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'center',
      //marginVertical: 8
      // borderWidth: 1,
      // borderColor: 'red'
   
      },
      gradientButton: {
        height: hp(8),
        width: wp(90),
        borderRadius: 10,
      },
      normalButton :{
        height: hp(8),
        width: wp(100),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
       // marginTop: -20,
        //marginBottom: 10
        marginVertical: 10
      },
      normalButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        margin: 18,
        paddingLeft: 20,
        fontWeight: 'bold',
      
      }

})
