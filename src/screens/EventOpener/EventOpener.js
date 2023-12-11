import { StyleSheet, Text, View ,TextInput,Image,FlatList,ScrollView,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Header from '../../components/Header'
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import MyIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EventOpener = ({navigation,route}) => {
     const [images, setimages] = useState([
          require('../../assets/images/mall.jpg'),
          require('../../assets/images/mall2.jpg'),
          require('../../assets/images/mall3.jpg'),
          require('../../assets/images/mall4.jpg'),
          require('../../assets/images/mall5.jpg')

        ]);

  return (
    <View style={{flex: 1,backgroundColor: 'black'}}>
            
      <ScrollView>

      <Image
       source={route.params.imageData}
        style={{width: wp(90),
        height: hp(40),
        borderRadius: 10,
        marginTop: 10,
        alignSelf: 'center'
        }}/>

    <Text style={{
        color: 'white',
        padding: 20,
        fontWeight: 'bold'
        }}>Music House</Text>    
        
        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row',
           // borderWidth: 1,borderColor: 'red',height: hp(3)    
    }}>    
        <MyIcons name='calendar-today' size={20}
        color={'purple'}
        style={{paddingLeft: 20}}
        />
        <Text style={{color: 'white',paddingLeft: 20}}>aug 29,2023</Text>
   
   </View>
   <View style={{flexDirection: 'row',
           // borderWidth: 1,borderColor: 'red',height: hp(3)    
    }}>    
        <Icon name='clock' size={20}
        color={'purple'}
        style={{paddingLeft: 20}}
        />
        <Text style={{color: 'white',paddingLeft: 20}}>8:30 PM</Text>
   
   </View>
   <View style={{flexDirection: 'row',
           // borderWidth: 1,borderColor: 'red',height: hp(3)    
    }}>    
        <MyIcons name='edit-location' size={20}
        color={'purple'}
        style={{paddingLeft: 20}}
        />
        <Text style={{color: 'white',paddingLeft: 20}}>New York</Text>
   
   </View>
   
   </View>
    <View>
             <Text style={{color: 'white',fontSize: 30,fontWeight: 'bold'}}>4.2</Text>
        <View
style={{flexDirection: 'row',paddingRight: 20}}
>
<MyIcons name='star-rate' size={20}
     color={'purple'} />   
     <MyIcons name='star-rate' size={20}
     color={'purple'} />   
     <MyIcons name='star-rate' size={20}
     color={'purple'} />   
     <MyIcons name='star-rate' size={20}
     color={'purple'} />   
     <MyIcons name='star-rate' size={20}
     color={'white'} />   
</View>
   
        </View>

        </View>

        <View style={{
    //  backgroundColor: 'red',
      height: hp(10),
      width: wp(85),
      borderRadius: 5,
      alignSelf: 'center',
      paddingTop: 50,
      }}>
       <TouchableOpacity
       style={{height: hp(8),width: wp(90),
        //backgroundColor: 'green',
        borderRadius: 5,
       alignSelf: 'center'
      }}
      //onPress={myfunc}
       onPress={()=>navigation.navigate('RateEvent')}
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
       margin: 12,
       fontWeight: 'bold',
       }}> ★ Rate This Event</Text>
      
      </LinearGradient>
      </TouchableOpacity>
        
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'white',marginTop: 60,paddingLeft: 20,fontSize: 14}}>Ratings</Text>
        <Text style={{color: 'purple',fontSize: 14,marginTop: 60}}> (483)</Text>
        
        </View> 

       <View style={{
        width: wp(95),height: hp(8),margin: 10,flexDirection: 'row',
    justifyContent: 'space-between'}}>

       <View style={{flexDirection: 'row'}}> 
       <Image 
       source={require('../../assets/images/mall.jpg')}
       style={{
        borderRadius:50,
        width: wp(11),
        height: hp(6),

    }}/>

    <View style={{flexDirection: 'column'}}>
    <Text style={{color: 'white',fontSize: 14,paddingLeft: 10}}> Rana Rashid</Text>
    <Text style={{color: 'grey',fontSize: 14,paddingLeft: 10,paddingTop: 5}}> aug 29,2023</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row',marginTop: 20}}>
    <Text style={{color: 'white',fontSize: 20,paddingLeft: 10,paddingRight: 10}}> 4.5</Text>
    <MyIcons name='star-rate' size={20}
     color={'purple'} />   
    <MyIcons name='star-rate' size={20}
     color={'purple'} />   
    <MyIcons name='star-rate' size={20}
     color={'purple'} />   
<MyIcons name='star-rate' size={20}
     color={'purple'} />   
<MyIcons name='star-rate' size={20}
     color={'purple'} />   

    </View>
       </View>

       <FlatList
    horizontal={true} 
    showsHorizontalScrollIndicator={false} 
    data={images}
    renderItem={ ({ item, index }) => (
      <Image source={item} /* Use item to set the image source */
        key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
        style={{
          width:wp(25),
          height:hp(15),
          resizeMode:'cover',
          margin:5,
          borderRadius: 10,
        }}
      />
    )}
  />

<View>
     <Text style={{color: 'white',marginLeft: 15}}>
        Your comments are valuable for us. Please comment out how you feel about this event. Your comments are valuable for us.Please comment out how you feel about this event. 


     </Text>
</View>
<View style={{height: 1,backgroundColor: 'white',marginTop: 5}}></View>
   
<View style={{
        width: wp(95),height: hp(8),margin: 10,flexDirection: 'row',
    justifyContent: 'space-between'}}>

       <View style={{flexDirection: 'row'}}> 
       <Image 
       source={require('../../assets/images/mall.jpg')}
       style={{
        borderRadius:50,
        width: wp(11),
        height: hp(6),

    }}/>

    <View style={{flexDirection: 'column'}}>
    <Text style={{color: 'white',fontSize: 14,paddingLeft: 10}}> Rana Rashid</Text>
    <Text style={{color: 'grey',fontSize: 14,paddingLeft: 10,paddingTop: 5}}> aug 29,2023</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row',marginTop: 20}}>
    <Text style={{color: 'white',fontSize: 20,paddingLeft: 10,paddingRight: 10}}> 4.5</Text>
    <MyIcons name='star-rate' size={20}
     color={'purple'} />   
    <MyIcons name='star-rate' size={20}
     color={'purple'} />   
    <MyIcons name='star-rate' size={20}
     color={'purple'} />   
<MyIcons name='star-rate' size={20}
     color={'purple'} />   
<MyIcons name='star-rate' size={20}
     color={'purple'} />   

    </View>
       </View>

       <FlatList
    horizontal={true} 
    showsHorizontalScrollIndicator={false} 
    data={images}
    renderItem={ ({ item, index }) => (
      <Image source={item} /* Use item to set the image source */
        key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
        style={{
          width:wp(25),
          height:hp(15),
          resizeMode:'cover',
          margin:5,
          borderRadius: 10,
        }}
      />
    )}
  />

<View>
     <Text style={{color: 'white',marginLeft: 15}}>
        Your comments are valuable for us. Please comment out how you feel about this event. Your comments are valuable for us.Please comment out how you feel about this event. 


     </Text>
</View>
<View style={{height: 1,backgroundColor: 'white',marginTop: 5}}></View>


<View style={{
        width: wp(95),height: hp(8),margin: 10,flexDirection: 'row',
    justifyContent: 'space-between'}}>

       <View style={{flexDirection: 'row'}}> 
       <Image 
       source={require('../../assets/images/mall.jpg')}
       style={{
        borderRadius:50,
        width: wp(11),
        height: hp(6),

    }}/>

    <View style={{flexDirection: 'column'}}>
    <Text style={{color: 'white',fontSize: 14,paddingLeft: 10}}> Rana Rashid</Text>
    <Text style={{color: 'grey',fontSize: 14,paddingLeft: 10,paddingTop: 5}}> aug 29,2023</Text>
    </View>
    </View>
    <View style={{flexDirection: 'row',marginTop: 20}}>
    <Text style={{color: 'white',fontSize: 20,paddingLeft: 10,paddingRight: 10}}> 4.5</Text>
    <MyIcons name='star-rate' size={20}
     color={'purple'} />   
    <MyIcons name='star-rate' size={20}
     color={'purple'} />   
    <MyIcons name='star-rate' size={20}
     color={'purple'} />   
<MyIcons name='star-rate' size={20}
     color={'purple'} />   
<MyIcons name='star-rate' size={20}
     color={'purple'} />   

    </View>
       </View>

       <FlatList
    horizontal={true} 
    showsHorizontalScrollIndicator={false} 
    data={images}
    renderItem={ ({ item, index }) => (
      <Image source={item} /* Use item to set the image source */
        key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
        style={{
          width:wp(25),
          height:hp(15),
          resizeMode:'cover',
          margin:5,
          borderRadius: 10,
        }}
      />
    )}
  />

<View>
     <Text style={{color: 'white',marginLeft: 15}}>
        Your comments are valuable for us. Please comment out how you feel about this event. Your comments are valuable for us.Please comment out how you feel about this event.


     </Text>
</View>
<View style={{height: 1,backgroundColor: 'white',marginTop: 5}}></View>

       </ScrollView>

    </View>
  )
}

export default EventOpener