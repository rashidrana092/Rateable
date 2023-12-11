import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import RateEvent from '../screens/RateEvent/RateEvent';
import Account from '../screens/Account/Account';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
const Drawer =createDrawerNavigator();

const DrawerNav=()=>{
  return(

        <Drawer.Navigator 
        initialRouteName='Home'
        screenOptions={{
          drawerPosition: 'right',
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'black', 
            width: wp(50), 
          },
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'purple',
          drawerActiveBackgroundColor: 'black',
          drawerLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          }
        
        }}
        >
          <Drawer.Screen name='Home' component={Home}
          options={{
            drawerLabel: 'Home Screen',
            title: 'Home1',
            drawerIcon:()=>{
                return (
                   <Icon
                    name='home' size={20} type='material-community'
                   color={'purple'}

                   />
                );
                }

          }}
          />
          <Drawer.Screen name='Account' component={Account} 
          options={{
            drawerLabel: 'Account',
            title: 'Account1',
            drawerIcon:()=>{
              return (
                 <Icon name='person' size={20} type='entype'
                 color={'purple'}
                 />
              );
              }
          }}
          />
          <Drawer.Screen name='RateEvent' component={RateEvent} 
          options={{
            drawerLabel: 'Rate Event',
            title: 'Rate Event1',
            drawerIcon:()=>{
              return (
                 <Icon name='star' size={20} type='material-community'
                 color={'purple'}
                 />
              );
              }
          }}
          
          />
          
        </Drawer.Navigator>
 
  );
}
    
export default DrawerNav;