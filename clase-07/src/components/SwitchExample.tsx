import { useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";

export const SwitchExample = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = (newValue: boolean) => {
    setIsEnabled(newValue);
  };

  return (
    <View style={styles.container}>
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
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
