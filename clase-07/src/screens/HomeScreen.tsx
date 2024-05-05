import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          {
            backgroundColor: "blue",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "flex-end",
          },
        ]}
      >
        <Text style={styles.titulo}>Hola!</Text>

        <Text style={styles.titulo}>Hola!</Text>
      </View>
      <View
        style={[
          {
            backgroundColor: "red",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <Text style={styles.titulo}>Hola!</Text>

        <Text style={styles.titulo}>Hola!</Text>
      </View>
      <View
        style={[
          {
            backgroundColor: "green",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          },
        ]}
      >
        <Text style={styles.titulo}>Hola!</Text>

        <Text style={styles.titulo}>Hola!</Text>
      </View>
      <View
        style={[
          {
            backgroundColor: "orange",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
          },
        ]}
      >
        <Text style={styles.titulo}>Hola!</Text>

        <Text style={styles.titulo}>Hola!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
});
