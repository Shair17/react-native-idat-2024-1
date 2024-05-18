import { Button, ToastAndroid, View, StyleSheet } from "react-native";

export const ToastAndroidExample = () => {
  const handleShowToast = () => {
    ToastAndroid.show("hola, soy el toast", 500);
  };

  return (
    <View style={styles.container}>
      <Button title="Disparar el toast!" onPress={handleShowToast} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
