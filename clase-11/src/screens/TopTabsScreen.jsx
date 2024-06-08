import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfileScreen} from './common/ProfileScreen';
import {SettingsScreen} from './common/SettingsScreen';

const TopStack = createMaterialTopTabNavigator();

export const TopTabsScreen = () => {
  return (
    <TopStack.Navigator>
      <TopStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <TopStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </TopStack.Navigator>
  );
};
