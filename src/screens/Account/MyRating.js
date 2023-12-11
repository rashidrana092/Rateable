import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import MyIcons from 'react-native-vector-icons/MaterialIcons'

const MyRating = () => {
  return (
    <View style={{flex: 1,backgroundColor: 'black'}}>
<ScrollView>
<View style={{
        width: wp(95),height: hp(8),margin: 10,flexDirection: 'column',
    justifyContent: 'space-between'}}>

       <View style={{flexDirection: 'row'}}> 
       <Image 
       source={require('../../assets/images/mypic.jpg')}
       style={{
        borderRadius:10,
        width: wp(11),
        height: hp(6),

    }}/>

    <View style={{flexDirection: 'column'}}>
    <Text style={{color: 'white',fontSize: 14,paddingLeft: 10}}> Rana Rashid</Text>
    <Text style={{color: 'grey',fontSize: 14,paddingLeft: 10,paddingTop: 5}}> aug 29,2023</Text>
    </View>
    </View>

    
    <View style={{flexDirection: 'row',marginTop: 20}}>
    <Text style={{color: 'white',fontSize: 16,paddingLeft: 10,paddingRight: 10}}> 4.5</Text>
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

      
<View style={{paddingTop: 20}}>
     <Text style={{color: 'white',marginLeft: 15}}>
        Your comments are valuable for us. Please comment out how you feel about this event. Your comments are valuable for us.Please comment out how you feel about this event.


     </Text>
</View>
<View style={{height: 1,backgroundColor: 'white',marginTop: 10,marginBottom: 20}}></View>


<View style={{
        width: wp(95),height: hp(8),margin: 10,flexDirection: 'column',
    justifyContent: 'space-between'}}>

       <View style={{flexDirection: 'row',
       // borderWidth: 1,borderColor: 'red',
    }}> 
       <Image 
       source={require('../../assets/images/mall2.jpg')}
       style={{
        borderRadius:10,
        width: wp(11),
        height: hp(6),

    }}/>

    <View style={{flexDirection: 'column'}}>
    <Text style={{color: 'white',fontSize: 14,paddingLeft: 10}}> Rana Rashid</Text>
    <Text style={{color: 'grey',fontSize: 14,paddingLeft: 10,paddingTop: 5}}> aug 29,2023</Text>
    </View>
    
    <View
    style={{flexDirection: 'row',justifyContent: 'flex-end',
    
    //borderWidth: 1,borderColor: 'red',
    width: wp(60)
}}
    >
    <Icon 
    name='close-circle'
    size={20}
    color={'red'}
    style={{paddingHorizontal: 5}}
    />
    
    <MyIcons 
    name='add-circle'
    size={20}
    color={'white'}
    //style={{justifyContent: 'center'}}
    />
    
    </View>

    
    </View>

    
    <View style={{flexDirection: 'row',marginTop: 20}}>
    <Text style={{color: 'white',fontSize: 16,paddingLeft: 10,paddingRight: 10}}> 4.5</Text>
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

      
<View style={{paddingTop: 20}}>
     <Text style={{color: 'white',marginLeft: 15}}>
        Your comments are valuable for us. Please comment out how you feel about this event. Your comments are valuable for us.Please comment out how you feel about this event.


     </Text>
</View>
<View style={{height: 1,backgroundColor: 'white',marginTop: 10,marginBottom: 10}}></View>
<View style={{
        width: wp(95),height: hp(8),margin: 10,flexDirection: 'column',
    justifyContent: 'space-between'}}>

       <View style={{flexDirection: 'row',
       // borderWidth: 1,borderColor: 'red',
    }}> 
       <Image 
       source={require('../../assets/images/mall3.jpg')}
       style={{
        borderRadius:10,
        width: wp(11),
        height: hp(6),

    }}/>

    <View style={{flexDirection: 'column'}}>
    <Text style={{color: 'white',fontSize: 14,paddingLeft: 10}}> Rana Rashid</Text>
    <Text style={{color: 'grey',fontSize: 14,paddingLeft: 10,paddingTop: 5}}> aug 29,2023</Text>
    </View>
    
    <View
    style={{flexDirection: 'row',justifyContent: 'flex-end',
    
    //borderWidth: 1,borderColor: 'red',
    width: wp(60)
}}
    >
    <Icon 
    name='close-circle'
    size={20}
    color={'red'}
    style={{paddingHorizontal: 5}}
    />
    
    <MyIcons 
    name='add-circle'
    size={20}
    color={'white'}
    //style={{justifyContent: 'center'}}
    />
    
    </View>

    
    </View>

    
    <View style={{flexDirection: 'row',marginTop: 20}}>
    <Text style={{color: 'white',fontSize: 16,paddingLeft: 10,paddingRight: 10}}> 4.5</Text>
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

      
<View style={{paddingTop: 20}}>
     <Text style={{color: 'white',marginLeft: 15}}>
        Your comments are valuable for us. Please comment out how you feel about this event. Your comments are valuable for us.Please comment out how you feel about this event.


     </Text>
</View>
<View style={{height: 1,backgroundColor: 'white',marginTop: 10, marginBottom: 10}}></View>

<View style={{
        width: wp(95),height: hp(8),margin: 10,flexDirection: 'column',
    justifyContent: 'space-between'}}>

       <View style={{flexDirection: 'row',
       // borderWidth: 1,borderColor: 'red',
    }}> 
       <Image 
       source={require('../../assets/images/mall4.jpg')}
       style={{
        borderRadius:10,
        width: wp(11),
        height: hp(6),

    }}/>

    <View style={{flexDirection: 'column'}}>
    <Text style={{color: 'white',fontSize: 14,paddingLeft: 10}}> Rana Rashid</Text>
    <Text style={{color: 'grey',fontSize: 14,paddingLeft: 10,paddingTop: 5}}> aug 29,2023</Text>
    </View>
    
    <View
    style={{flexDirection: 'row',justifyContent: 'flex-end',
    
    //borderWidth: 1,borderColor: 'red',
    width: wp(60)
}}
    >
    <Icon 
    name='close-circle'
    size={20}
    color={'red'}
    style={{paddingHorizontal: 5}}
    />
    
    <MyIcons 
    name='add-circle'
    size={20}
    color={'white'}
    //style={{justifyContent: 'center'}}
    />
    
    </View>

    
    </View>

    
    <View style={{flexDirection: 'row',marginTop: 20}}>
    <Text style={{color: 'white',fontSize: 16,paddingLeft: 10,paddingRight: 10}}> 4.5</Text>
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

      
<View style={{paddingTop: 20}}>
     <Text style={{color: 'white',marginLeft: 15}}>
        Your comments are valuable for us. Please comment out how you feel about this event. Your comments are valuable for us.Please comment out how you feel about this event.


     </Text>
</View>
<View style={{height: 1,backgroundColor: 'white',marginTop: 10,marginBottom: 10}}></View>

<View style={{
        width: wp(95),height: hp(8),margin: 10,flexDirection: 'column',
    justifyContent: 'space-between'}}>

       <View style={{flexDirection: 'row',
       // borderWidth: 1,borderColor: 'red',
    }}> 
       <Image 
       source={require('../../assets/images/mall5.jpg')}
       style={{
        borderRadius:10,
        width: wp(11),
        height: hp(6),

    }}/>

    <View style={{flexDirection: 'column'}}>
    <Text style={{color: 'white',fontSize: 14,paddingLeft: 10}}> Rana Rashid</Text>
    <Text style={{color: 'grey',fontSize: 14,paddingLeft: 10,paddingTop: 5}}> aug 29,2023</Text>
    </View>
    
    <View
    style={{flexDirection: 'row',justifyContent: 'flex-end',
    
    //borderWidth: 1,borderColor: 'red',
    width: wp(60)
}}
    >
    <Icon 
    name='close-circle'
    size={20}
    color={'red'}
    style={{paddingHorizontal: 5}}
    />
    
    <MyIcons 
    name='add-circle'
    size={20}
    color={'white'}
    //style={{justifyContent: 'center'}}
    />
    
    </View>

    
    </View>

    
    <View style={{flexDirection: 'row',marginTop: 20}}>
    <Text style={{color: 'white',fontSize: 16,paddingLeft: 10,paddingRight: 10}}> 4.5</Text>
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

      
<View style={{paddingTop: 20}}>
     <Text style={{color: 'white',marginLeft: 15}}>
        Your comments are valuable for us. Please comment out how you feel about this event. Your comments are valuable for us.Please comment out how you feel about this event.


     </Text>
</View>
<View style={{height: 1,backgroundColor: 'white',marginTop: 10,marginBottom: 10}}></View>

<View style={{
        width: wp(95),height: hp(8),margin: 10,flexDirection: 'column',
    justifyContent: 'space-between'}}>

       <View style={{flexDirection: 'row',
       // borderWidth: 1,borderColor: 'red',
    }}> 
       <Image 
       source={require('../../assets/images/mall.jpg')}
       style={{
        borderRadius:10,
        width: wp(11),
        height: hp(6),

    }}/>

    <View style={{flexDirection: 'column'}}>
    <Text style={{color: 'white',fontSize: 14,paddingLeft: 10}}> Rana Rashid</Text>
    <Text style={{color: 'grey',fontSize: 14,paddingLeft: 10,paddingTop: 5}}> aug 29,2023</Text>
    </View>
    
    <View
    style={{flexDirection: 'row',justifyContent: 'flex-end',
    
    //borderWidth: 1,borderColor: 'red',
    width: wp(60)
}}
    >
    <Icon 
    name='close-circle'
    size={20}
    color={'red'}
    style={{paddingHorizontal: 5}}
    />
    
    <MyIcons 
    name='add-circle'
    size={20}
    color={'white'}
    //style={{justifyContent: 'center'}}
    />
    
    </View>

    
    </View>

    
    <View style={{flexDirection: 'row',marginTop: 20}}>
    <Text style={{color: 'white',fontSize: 16,paddingLeft: 10,paddingRight: 10}}> 4.5</Text>
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

      
<View style={{paddingTop: 20}}>
     <Text style={{color: 'white',marginLeft: 15}}>
        Your comments are valuable for us. Please comment out how you feel about this event. Your comments are valuable for us.Please comment out how you feel about this event.


     </Text>
</View>
<View style={{height: 1,backgroundColor: 'white',marginTop: 10,marginBottom: 10}}></View>
</ScrollView>
    </View>
  )
}

export default MyRating