import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
//        backgroundColor: 'red'
    },
    logo: {
      width: wp(45),
      height: hp(20),
      alignSelf: 'center',
      //backgroundColor: 'red'
      marginBottom: 20
    },
    logotext: {
      fontSize: 30,
      color: 'black',
      marginBottom: 10
  
    } 
});

//export { styles }