import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useLocation} from '../hooks/useLocation';

export const StacksScreen = ({navigation}) => {
  const {userLocation} = useLocation();

  return (
    <View style={styles.container}>
      <Button
        title="Ir a Drawer"
        onPress={() => {
          navigation.navigate('DrawerScreen');
        }}
      />

      <Button
        title="Ir a Bottom Tabs"
        onPress={() => {
          navigation.navigate('BottomTabsScreen');
        }}
      />

      <Button
        title="Ir a Top Tabs"
        onPress={() => {
          navigation.navigate('TopTabsScreen');
        }}
      />

      <View style={{marginTop: 20}}>
        <Text>{JSON.stringify(userLocation)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});
