import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const Header = ({navigation}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <Icon
          name="account"
          type="material-community"
          size={20}
          color={'purple'}
          style={{marginLeft: 10, marginTop: 5}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contactus')}>
        <Icon
          name="email"
          type="material-community"
          size={20}
          color={'purple'}
          style={{marginLeft: 10, marginTop: 5}}
        />
      </TouchableOpacity>

      <Text
        style={{
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold',
          marginHorizontal: 100,
        }}>
        Rateable
      </Text>

      <TouchableOpacity
       onPress={() => navigation.toggleDrawer()}>
        <Icon
          name="calendar-blank"
          type="material-community"
          size={20}
          color={'purple'}
          style={{marginHorizontal: 20, marginTop: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '5%',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    //borderColor: 'red',
    //marginHorizontal: 5
    //paddingHorizontal: 10
  },
});
