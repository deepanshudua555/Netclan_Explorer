import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StatusBar} from 'react-native';
import Refine from './screens/Refine';
import Explore from './screens/Explore ';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomHeader = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        width: 330,
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop:10
      }}>
      <Icon name="reorder-three-outline" size={40} color="#fff" />
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: "600",
            marginLeft: -20,
            marginTop: 10,
          }}>
          Howdy DEEPANSHU DUA!!
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            // width: 330,
            // justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Icon
            name="location-sharp"
            size={15}
            color="#fff"
            style={{
              marginLeft: -20,
            }}
          />

          <Text style={{color: 'white', fontSize: 12}}>Nangloi, New Delhi</Text>
        </View>
      </View>
      <View>
        <Iconn name="format-list-checks" size={35} color="#fff" />
        <Text style={{color: 'white', fontSize: 12}}>Refine </Text>
      </View>
    </View>
  );
};
const App = () => {
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName={'explore'}>
          <Stack.Screen
            name="explore"
            component={Explore}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="refine"
            component={Refine}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
      <StatusBar backgroundColor="#0e2e43" />
      <NavigationContainer independent={true}>
        {/* <Tab.Navigator> */}
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0e2e43',
            },
            // headerTitleAlign: 'center',
            headerTitle: () => <CustomHeader />,
            headerTintColor: 'white',
            // headerStatusBarHeight:10
          }}>
          <Tab.Screen
            name="Explore"
            component={Explore}
            options={{
              title: 'Explore',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0e2e43',
              },
              // headerShown: false
            }}
          />
          <Tab.Screen
            name="Refine"
            component={Refine}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
