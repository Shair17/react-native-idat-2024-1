import { useState, useEffect } from "react";
import { View, StyleSheet, BackHandler, Switch, Text } from "react-native";

export const BackHandlerExample = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = (newValue: boolean) => {
    setIsEnabled(newValue);
  };

  useEffect(() => {
    const handler = () => isEnabled;

    BackHandler.addEventListener("hardwareBackPress", handler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handler);
    };
  }, [isEnabled]);

  return (
    <View style={styles.container}>
      <Text>Permitir ir atrás al usuario: {!isEnabled ? "Sí" : "No"}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
