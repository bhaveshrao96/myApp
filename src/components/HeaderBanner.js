//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {songs} from '../MusicData';
import {Colors} from './colors/colors';
const {height, width} = Dimensions.get('window');
// create a component
const HeaderBanner = () => {
  return (
    <FlatList
      style={{marginVertical: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      data={songs}
      onScroll={async e => {
        const x = e.nativeEvent.contentOffset.x / width;

        // togglePlayback(playbackState);
      }}
      renderItem={({item, index}) => {
        return (
          <View style={styles.bannerWrapper}>
            <Image source={item.image} style={styles.bannerImage} />
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                paddingHorizontal: 40,
                paddingVertical: 10,
                borderRadius: 5,
                position: 'absolute',
                alignSelf: 'flex-start',
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: 'white',
                top: 140,
                left: 50,
              }}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: '900'}}>
                Jam Now
              </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  bannerWrapper: {
    width: width,
    // height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // marginVertical: 5,
  },
  bannerImage: {
    width: '90%',
    height: 200,
    borderRadius: 20,
    resizeMode: 'contain',
  },
});

//make this component available to the app
export default HeaderBanner;
