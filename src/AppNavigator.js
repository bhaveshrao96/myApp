import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SongBook from './screens/SongBook';
import Activity from './screens/Activity';
import Music from './screens/Music';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from './components/colors/colors';
import Profile from './screens/Profile';
import Feed from './screens/Feed';
import Explore from './screens/Explore';
const Stack = createStackNavigator();

const songBook = 'Songbook';
const activity = 'Activity';
const profile = 'Profile';
const feed = 'Feed';
const explore = 'Explore';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={songBook}
        screenOptions={({route}) => ({
          tabBarLabelStyle: {
            fontSize: 10,
            marginBottom: 10,
            color: 'grey',
          },
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: Colors.greyColor,
          tabBarStyle: {
            height: 70,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === songBook) {
              iconName = 'folder-music';
            } else if (rn == activity) {
              iconName = 'bell';
            } else if (rn == profile) {
              iconName = 'user';
            } else if (rn == feed) {
              iconName = 'rainbow';
            } else if (rn == explore) {
              iconName = 'youtube';
            }

            return <Entypo name={iconName} color={color} size={size} />;
          },
        })}>
        <Tab.Screen
          name={feed}
          component={Feed}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={explore}
          component={Explore}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={songBook}
          component={SongBook}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={activity}
          component={Activity}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={profile}
          component={Profile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
