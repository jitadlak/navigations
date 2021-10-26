import * as React from 'react';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Screens/Profile';
import Edit from './Screens/Edit';
import tab1 from './Screens/tab1';
import tab2 from './Screens/tab2';
import tab3 from './Screens/tab3';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

        headerShown: false,
      })}>
      <Tab.Screen name="Tab1" component={tab1} options={{tabBarBadge: 3}} />
      <Tab.Screen name="Tab2" component={tab2} options={{tabBarBadge: 10}} />
      <Tab.Screen name="Tab3" component={tab3} options={{tabBarBadge: 3}} />
    </Tab.Navigator>
  );
};

const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Tabs}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Tab1') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Tab2') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={StackScreen}
          options={{headerShown: true}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
