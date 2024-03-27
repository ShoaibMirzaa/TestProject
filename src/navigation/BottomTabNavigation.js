import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {View, Text, Image} from 'react-native';

const TabStack = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#BA7B42',
          height: 75,
          width: '100%',
          borderTopColor: '#531900',
          borderTopWidth: 1,
        },
      })}>
      <TabStack.Screen
        name={'Darshan'}
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => {
            return (
              <TabItemView
                focused={focused}
                label="Chadava"
                imgSource={require('../assets/bottom_darshan.png')}
              />
            );
          },
        }}
      />
      <TabStack.Screen
        name={'Chadava'}
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => {
            return (
              <TabItemView
                focused={focused}
                label="Chadava"
                imgSource={require('../assets/bottom_chadava.png')}
              />
            );
          },
        }}
      />
      <TabStack.Screen
        name={'Aarti'}
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => {
            return (
              <TabItemView
                focused={focused}
                label="Aarti"
                imgSource={require('../assets/bottom_aarti.png')}
              />
            );
          },
        }}
      />
      <TabStack.Screen
        name={'Profile'}
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({focused}) => {
            return (
              <TabItemView
                focused={focused}
                label="Profile"
                imgSource={require('../assets/bottom_profile.png')}
              />
            );
          },
        }}
      />
    </TabStack.Navigator>
  );
};

export default BottomTabNavigation;

const TabItemView = ({focused, label, imgSource}) => (
  <View
    style={{
      alignItems: 'center',
    }}>
    <Image
      style={{
        width: 24,
        height: 24,
        tintColor: focused ? '#531900' : '#fff',
      }}
      resizeMode="contain"
      source={imgSource}
    />
    <Text
      style={{
        fontSize: 12,
        marginTop: 6,
        color: focused ? '#531900' : '#fff',
      }}>
      {label}
    </Text>
  </View>
);
