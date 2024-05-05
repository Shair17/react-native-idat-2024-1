import { View, StyleSheet, Button, Alert } from "react-native";

export const ButtonExample = () => {
  const handleOnPress = () => {
    Alert.alert("haz hecho clic en el botón", undefined, undefined, {
      cancelable: true,
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Presioname!" onPress={handleOnPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 24,
  },
});
