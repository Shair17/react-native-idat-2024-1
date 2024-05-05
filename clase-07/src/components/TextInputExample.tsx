import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

export const TextInputExample = () => {
  const [text, setText] = useState("");

  const handleOnChangeText = (newText: string) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre"
          placeholderTextColor="#aaa"
          value={text}
          onChangeText={handleOnChangeText}
        />

        <Text style={styles.text}>Input: {text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 24,
  },
  content: {
    gap: 16,
  },
  input: {
    backgroundColor: "#333",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    color: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});
