//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Button,
} from 'react-native';
import {Colors} from '../components/colors/colors';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {height, width} = Dimensions.get('window');
// create a component
const MusicListItem = ({item, index, data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {}} style={[styles.MusicListItem]}>
      <Image source={item.image} style={styles.banner} />
      <View style={styles.musicDetails}>
        <Text style={styles.songName}>{item.title}</Text>
        <Text style={styles.movieName}>{item.movie}</Text>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome style={{color: 'grey', marginRight: 5}} name="user" />
          <Text style={styles.movieName}>{item.singer}</Text>
        </View>
      </View>
      <View style={styles.singButtonWrapper}>
        <TouchableOpacity style={styles.singButton}>
          <Text style={styles.singButtonText}>Sing</Text>
        </TouchableOpacity>
        <View style={styles.likesWrapper}>
          <Text style={styles.likesText}>92%(717)</Text>
          <AntDesign name="like1" style={styles.likesIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  MusicListItem: {
    height: 80,
    width: width,
    alignSelf: 'center',
    backgroundColor: '#efefef',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  musicDetails: {
    flexDirection: 'column',
    marginLeft: 10,
    width: '62%',
  },
  movieName: {
    fontSize: 12,
    color: 'grey',
    fontWeight: 500,
  },
  songName: {
    color: 'black',
    fontSize: 16,
    fontWeight: 700,
  },
  banner: {
    height: 60,
    width: 60,
    borderRadius: 5,
    margin: 5,
    resizeMode: 'center',
  },
  singButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 5,
  },
  singButtonText: {
    fontSize: 14,
    color: 'white',
  },
  likesWrapper: {
    flexDirection: 'row',
    marginTop: 5,
  },
  likesText: {
    color: '#5ddb6a',
    fontWeight: 600,
    fontSize: 12,
  },
  likesIcon: {
    color: '#5ddb6a',
    marginLeft: 5,
  },
});

//make this component available to the app
export default MusicListItem;
