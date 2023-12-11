import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Personal from './Personal';
import Business from './Business';
import Merchnat from './Merchnat';

const Tab = createMaterialTopTabNavigator();
const Explore = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#143D59',
            height: 50,
            overflow: 'hidden',
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'white', // Change this color to set the scroll indicator color
          },
          tabBarLabelStyle: {
            textTransform: 'capitalize',
            fontSize:16,
            fontWeight:"600"
          },
        }}>
        <Tab.Screen
          name="Personal"
          component={Personal}
          options={{tabBarLabel: 'Personal'}}
        />
        <Tab.Screen
          name="Business"
          component={Business}
          options={{tabBarLabel: 'Business'}}
        />
        <Tab.Screen
          name="Merchant"
          component={Merchnat}
          options={{tabBarLabel: 'Merchant'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Explore;
