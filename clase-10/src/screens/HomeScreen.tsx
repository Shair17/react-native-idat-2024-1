import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { type StackScreenProps } from "../../App";

interface Props
  extends NativeStackScreenProps<StackScreenProps, "HomeScreen"> {}

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
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

        <Button
          title="Ir a ViewExample"
          onPress={() => {
            navigation.navigate("ViewExample");
          }}
        />
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
