import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreenProps } from "../../App";

interface Props
  extends NativeStackScreenProps<StackScreenProps, "InfoScreen"> {}

export const InfoScreen: React.FC<Props> = ({ navigation, route }) => {
  const user = route.params;
  const hasUser = !!user;

  if (!hasUser) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No hay el usuario</Text>
        <Button
          title="Ir atrás"
          onPress={() => {
            const canGoBack = navigation.canGoBack();

            if (canGoBack) {
              navigation.goBack();
            } else {
              navigation.popToTop();
            }
          }}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{JSON.stringify(user)}</Text>
    </View>
  );
};
