
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/screens/Login/Login';
import Home from './src/screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import Test1 from './src/screens/Test1';
import Test2 from './src/screens/Test2';
import Splash from './src/screens/Splash/Splash';
import EventOpener from './src/screens/EventOpener/EventOpener';
import RateEvent from './src/screens/RateEvent/RateEvent';
import Account from './src/screens/Account/Account';
import MyRating from './src/screens/Account/MyRating';
import { LinearTextGradient } from 'react-native-text-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text} from 'react-native';
import EditAccount from './src/screens/Account/EditAccount';
import Contactus from './src/screens/Account/Contactus';
import ResetPassword from './src/screens/Account/ResetPassword';
import Header from './src/components/Header';
import DrawerNav from './src/components/DrawerNav';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default App=() =>{
  return (


    <NavigationContainer>
    <Stack.Navigator>

     {/* name wil be used in navigation */}
       <Stack.Screen name='Splash' 
          options={{ headerShown: false  }}
          component={Splash}
          /> 
         <Stack.Screen name='Login' 
          options={{ headerShown: false  }}
         component={Login}
         />
         <Stack.Screen name='Home' 
          options={{ headerShown: false,
            header: () => <Header />  }}
         component={Home}
         />

          <Stack.Screen name='EventOpener' 
          options={{ title:'Event Opener',headerTitleAlign: 'center'  }}
         component={EventOpener}
         />
          <Stack.Screen name='RateEvent' 
           options={{ title:'Rate Event',headerTitleAlign: 'center'  }}
          
         component={RateEvent}
         />
          <Stack.Screen name='Account' 
          //options={{ headerShown: false  }}
          options={{ headerTitleAlign: 'center'  }}
          component={Account}
         />

          <Stack.Screen name='EditAccount' 
          //options={{ headerShown: false  }}
          options={{ title:'Edit Account',headerTitleAlign: 'center'  }}
         component={EditAccount}
         />
          <Stack.Screen name='MyRating' 
          //options={{ headerShown: false  }}
          options={{ title:'My Rating',headerTitleAlign: 'center'  }}
          
         component={MyRating}
         />
          <Stack.Screen name='ResetPassword' 
          //options={{ headerShown: false  }}
          options={{ title:'Reset Password',headerTitleAlign: 'center'  }}
        
         component={ResetPassword}
         />
         
         <Stack.Screen name='Contactus' 
          options={{
            title:''
          }}         
         component={Contactus}
         />

 <Stack.Screen 
 name="Drawer"
 component={DrawerNav}
 options={{ headerShown: false }}
 />      
</Stack.Navigator>
</NavigationContainer>



);
}

//     // for drawer navigation
//     // <NavigationContainer>
//     // <Drawer.Navigator initialRouteName='Test1'>
//     //   <Drawer.Screen name="Screen 1" component={Test1} />
//     //   <Drawer.Screen name="Screen 2" component={Test2} />
//     // </Drawer.Navigator>
//     // </NavigationContainer>
    
