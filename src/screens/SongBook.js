//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TextInput,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';
import {songs} from '../MusicData';
import MusicListItem from '../components/MusicListItem';
import HeaderBanner from '../components/HeaderBanner';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notification from './Activity';
import Music from './Music';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../components/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// create a component

const SongBook = () => {
  const FeedData = [
    ,
    'Extended',
    'Popular',
    'Free',
    'Top 50',
    'Top 10',
    'Trending Now',
    'Remix',
  ];
  return (
    <View style={styles.container}>
      <View>
        <StatusBar translucent backgroundColor={Colors.secondaryColor} />
      </View>
      <View
        style={{
          backgroundColor: Colors.secondaryColor,
          height: 70,
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
            width: '90%',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            height: 40,
          }}>
          <AntDesign name="search1" style={{fontSize: 20}} />
          <TextInput
            style={{
              fontSize: 18,
            }}
            placeholder="Search for songs, singers, invites..."
          />
        </View>

        <AntDesign name="message1" style={{fontSize: 20}} />
      </View>

      <View style={{backgroundColor: Colors.greyColor}}>
        <HeaderBanner />
      </View>
      <View>
        <FlatList
          horizontal
          data={FeedData}
          style={{
            paddingVertical: 5,
            marginBottom: 5,
            backgroundColor: Colors.greyColor,
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  paddingHorizontal: 20,
                  backgroundColor: 'white',
                  paddingVertical: 10,
                }}>
                <Text style={{color: 'black', fontWeight: '700', fontSize: 18}}>
                  {item}
                </Text>
              </View>
            );
          }}
        />
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            top: 5,
            paddingHorizontal: 10,
            elevation: 5,
            paddingVertical: 4,
          }}>
          <MaterialIcons name="notes" color="black" style={{fontSize: 30}} />
        </View>
      </View>
      <FlatList
        data={songs}
        renderItem={({item, index}) => {
          return <MusicListItem item={item} index={index} data={songs} />;
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fefefe',
  },

  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#00008B',
  },
  tabsWrapper: {
    backgroundColor: 'red',
  },
});

export default SongBook;
