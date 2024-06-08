import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

export const StacksScreen = ({navigation}) => {
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
