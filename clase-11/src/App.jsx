import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PermissionsProvider} from './providers/PermissionsProvider';
import {StacksScreen} from './screens/StacksScreen';
import {DrawerScreen} from './screens/DrawerScreen';
import {BottomTabsScreen} from './screens/BottomTabsScreen';
import {TopTabsScreen} from './screens/TopTabsScreen';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <PermissionsProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="StacksScreen">
          <RootStack.Screen
            name="StacksScreen"
            component={StacksScreen}
            options={{title: 'Inicio'}}
          />
          <RootStack.Screen
            name="DrawerScreen"
            component={DrawerScreen}
            options={{title: 'Drawer', headerShown: false}}
          />
          <RootStack.Screen
            name="BottomTabsScreen"
            component={BottomTabsScreen}
            options={{title: 'Bottom Tabs', headerShown: false}}
          />
          <RootStack.Screen
            name="TopTabsScreen"
            component={TopTabsScreen}
            options={{title: 'Top Tabs'}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </PermissionsProvider>
  );
}
