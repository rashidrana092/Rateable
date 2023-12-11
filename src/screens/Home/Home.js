import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  Button,
  Alert,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MyIcons from 'react-native-vector-icons/MaterialIcons';


const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>

      <Header navigation={navigation} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderWidth: 0.5,
          borderColor: '#000',
          height: hp(8),
          borderRadius: 5,
          margin: 10,
        }}>
        <MyIcons name="search" size={30} color={'black'} style={{margin: 5}} />

        <TextInput
          style={{flex: 1, fontSize: 16}}
          placeholder="search"
          placeholderTextColor={'black'}
        />
      </View>
      <Pressable  onPress={() => navigation.navigate('Contactus')}>

      <View
        style={{
          borderWidth: 1,
          borderColor: 'white',
          height: hp(8),
          width: wp(95),
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <MyIcons name="email" size={30} color={'white'} style={{margin: 10}} />
        <Text style={{color: 'white', margin: 10, flexWrap: 'wrap', flex: 1}}>
          You can contact with us if you want to post any kind of concert on
          this app.
        </Text>
        </View>

        </Pressable>
     
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: 'white',
              marginTop: 20,
              marginLeft: 10,
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Events Near You
          </Text>

          <Text
            style={{
              color: 'purple',
              marginTop: 25,
              marginBottom: 10,
              marginRight: 10,
              fontSize: 16,
            }}>
            See All
          </Text>
        </View>
        <View
          style={{
            height: hp(30),
            //justifyContent: 'center',
            // backgroundColor: 'grey'
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('EventOpener', {
                imageData: require('../../assets/images/mall2.jpg'),
              })
            }>
            <ImageBackground
              source={require('../../assets/images/mall2.jpg')}
              style={{
                width: wp(95),
                height: hp(30),
                alignSelf: 'center',
              }}>
              <View
                style={{
                  //borderWidth: 1,
                  //borderColor: 'red',
                  height: hp(10),
                  //flex: 1
                  backgroundColor: '#2225',
                  marginVertical: 90,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 10,
                  }}>
                  Music Soul 2020
                </Text>
                <View style={{flexDirection: 'row', marginLeft: 10}}>
                  <MyIcons name="star-rate" size={20} color={'purple'} />
                  <MyIcons name="star-rate" size={20} color={'purple'} />
                  <MyIcons name="star-rate" size={20} color={'purple'} />
                  <MyIcons name="star-rate" size={20} color={'purple'} />
                  <MyIcons name="star-rate" size={20} color={'white'} />

                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                    4.2
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
            padding: 10,
          }}>
          Top Rated
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              backgroundColor: '#222',
              height: hp(30),
              width: wp(10),
              margin: 5,
              flex: 1,
              borderRadius: 10,
            }}>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('EventOpener', {
                    imageData: require('../../assets/images/mall.jpg'),
                  })
                }>
                <Image
                  source={require('../../assets/images/mall.jpg')}
                  style={{
                    width: wp(45),
                    height: hp(20),
                    borderRadius: 10,
                    margin: 5,
                    alignSelf: 'center',
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  paddingLeft: 5,
                }}>
                Music House
              </Text>
              <View style={{flexDirection: 'row'}}>
                <MyIcons name="star-rate" size={20} color={'purple'} />

                <Text style={{color: 'white', fontSize: 16}}>4.2</Text>
                <Text style={{color: 'white', fontSize: 16}}> | </Text>

                <MyIcons name="edit-location" size={20} color={'purple'} />

                <Text style={{color: 'white', fontSize: 16}}>New York</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#222',
              height: hp(30),
              width: wp(10),
              margin: 5,
              flex: 1,
              borderRadius: 10,
            }}>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('EventOpener', {
                    imageData: require('../../assets/images/mall2.jpg'),
                  })
                }>
                <Image
                  source={require('../../assets/images/mall2.jpg')}
                  style={{
                    width: wp(45),
                    height: hp(20),
                    borderRadius: 10,
                    margin: 5,
                    alignSelf: 'center',
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  paddingLeft: 5,
                }}>
                Music House
              </Text>
              <View style={{flexDirection: 'row'}}>
                <MyIcons name="star-rate" size={20} color={'purple'} />

                <Text style={{color: 'white', fontSize: 16}}>4.2</Text>
                <Text style={{color: 'white', fontSize: 16}}> | </Text>

                <MyIcons name="edit-location" size={20} color={'purple'} />

                <Text style={{color: 'white', fontSize: 16}}>New York</Text>
              </View>
            </View>
          </View>
        </View>

        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
            padding: 10,
          }}>
          Latest Concerts
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              backgroundColor: '#222',
              height: hp(30),
              width: wp(10),
              margin: 5,
              flex: 1,
              borderRadius: 10,
            }}>
            <View style={{}}>
              <Image
                source={require('../../assets/images/mall.jpg')}
                style={{
                  width: wp(45),
                  height: hp(20),
                  borderRadius: 10,
                  margin: 5,
                  alignSelf: 'center',
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  paddingLeft: 5,
                }}>
                Music House
              </Text>
              <View style={{flexDirection: 'row'}}>
                <MyIcons name="star-rate" size={20} color={'purple'} />

                <Text style={{color: 'white', fontSize: 16}}>4.2</Text>
                <Text style={{color: 'white', fontSize: 16}}> | </Text>

                <MyIcons name="edit-location" size={20} color={'purple'} />

                <Text style={{color: 'white', fontSize: 16}}>New York</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#222',
              height: hp(30),
              width: wp(10),
              margin: 5,
              flex: 1,
              borderRadius: 10,
            }}>
            <View style={{}}>
              <Image
                source={require('../../assets/images/mall2.jpg')}
                style={{
                  width: wp(45),
                  height: hp(20),
                  borderRadius: 10,
                  margin: 5,
                  alignSelf: 'center',
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  paddingLeft: 5,
                }}>
                Music House
              </Text>
              <View style={{flexDirection: 'row'}}>
                <MyIcons name="star-rate" size={20} color={'purple'} />

                <Text style={{color: 'white', fontSize: 16}}>4.2</Text>
                <Text style={{color: 'white', fontSize: 16}}> | </Text>

                <MyIcons name="edit-location" size={20} color={'purple'} />

                <Text style={{color: 'white', fontSize: 16}}>New York</Text>
              </View>
            </View>
          </View>
        </View>

        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
            padding: 10,
          }}>
          Older Concerts
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              backgroundColor: '#222',
              height: hp(30),
              width: wp(10),
              margin: 5,
              flex: 1,
              borderRadius: 10,
            }}>
            <View style={{}}>
              <Image
                source={require('../../assets/images/mall.jpg')}
                style={{
                  width: wp(45),
                  height: hp(20),
                  borderRadius: 10,
                  margin: 5,
                  alignSelf: 'center',
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  paddingLeft: 5,
                }}>
                Music House
              </Text>
              <View style={{flexDirection: 'row'}}>
                <MyIcons name="star-rate" size={20} color={'purple'} />

                <Text style={{color: 'white', fontSize: 16}}>4.2</Text>
                <Text style={{color: 'white', fontSize: 16}}> | </Text>

                <MyIcons name="edit-location" size={20} color={'purple'} />

                <Text style={{color: 'white', fontSize: 16}}>New York</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#222',
              height: hp(30),
              width: wp(10),
              margin: 5,
              flex: 1,
              borderRadius: 10,
            }}>
            <View style={{}}>
              <Image
                source={require('../../assets/images/mall2.jpg')}
                style={{
                  width: wp(45),
                  height: hp(20),
                  borderRadius: 10,
                  margin: 5,
                  alignSelf: 'center',
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  paddingLeft: 5,
                }}>
                Music House
              </Text>
              <View style={{flexDirection: 'row'}}>
                <MyIcons name="star-rate" size={20} color={'purple'} />

                <Text style={{color: 'white', fontSize: 16}}>4.2</Text>
                <Text style={{color: 'white', fontSize: 16}}> | </Text>

                <MyIcons name="edit-location" size={20} color={'purple'} />

                <Text style={{color: 'white', fontSize: 16}}>New York</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
