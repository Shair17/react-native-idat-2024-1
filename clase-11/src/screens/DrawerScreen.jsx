import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileScreen} from './common/ProfileScreen';
import {SettingsScreen} from './common/SettingsScreen';

const DrawerStack = createDrawerNavigator();

export const DrawerScreen = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <DrawerStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </DrawerStack.Navigator>
  );
};
