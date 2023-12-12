import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Refine from './screens/Refine';
import Explore from './screens/Explore ';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconnn from 'react-native-vector-icons/Feather';
import Iconnnn from 'react-native-vector-icons/MaterialIcons';
import Network from './screens/Network';
import Chat from './screens/Chat';
import Contacts from './screens/Contacts';
import Groups from './screens/Groups';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomHeader = () => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('refine');
  };
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
      <TouchableOpacity>
        <Icon name="reorder-three-outline" size={40} color="#fff" />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: '600',
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
      <TouchableOpacity onPress={handleNavigate}>
        <Iconn name="format-list-checks" size={35} color="#fff" />
        <Text style={{color: 'white', fontSize: 12}}>Refine </Text>
      </TouchableOpacity>
    </View>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0e2e43', // Change this to your desired active color
        inactiveTintColor: '#74858F', // Change this to your desired inactive color
      }}
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
          tabBarIcon: ({color, size}) => (
            <Icon name="eye" color={color} size={size} />
          ),
          // headerShown: false
        }}
      />
      <Tab.Screen
        name="Network"
        component={Network}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="git-network-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name="chatbubble-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({color, size}) => (
            <Iconn name="contacts-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          tabBarIcon: ({color, size}) => (
            <Iconnn name="hash" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#0e2e43" />

      <NavigationContainer independent={true}>
        {/* <Tab.Navigator> */}
        <Stack.Navigator initialRouteName={'expore'}>
          <Stack.Screen
            name="explore"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="refine"
            component={Refine}
            options={{
              headerStyle: {
                backgroundColor: '#0e2e43',
              },
              headerTitle: 'Refine',
              headerTitleStyle:{
                color:"#fff"
              },
              headerTintColor: '#fff',
              
              
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
