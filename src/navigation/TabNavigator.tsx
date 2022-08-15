import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import MintScreen from '../screens/MintScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        // options={({route}) => ({
        //   title: route.params?.title,
        // })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: 'gray'},
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: '#FFF',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: 'gray',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Mint"
        component={MintScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="cloud-snow" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'green'},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'GameDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
