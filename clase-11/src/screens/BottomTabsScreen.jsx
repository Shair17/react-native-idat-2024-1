import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen} from './common/ProfileScreen';
import {SettingsScreen} from './common/SettingsScreen';

const BottomStack = createBottomTabNavigator();

export const BottomTabsScreen = () => {
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <BottomStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </BottomStack.Navigator>
  );
};
