import "react-native-gesture-handler";
import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ViewExample } from "./src/components/ViewExample";
import { ScrollExample } from "./src/components/ScrollExample";
import { ImageExample } from "./src/components/ImageExample";
import { TextInputExample } from "./src/components/TextInputExample";
import { ButtonExample } from "./src/components/ButtonExample";
import { SwitchExample } from "./src/components/SwitchExample";
import { FlatListExample } from "./src/components/FlatListExample";
import { SectionListExampe } from "./src/components/SectionListExampe";
import { BackHandlerExample } from "./src/components/BackHandlerExample";
import { ToastAndroidExample } from "./src/components/ToastAndroidExample";
import { ActivityIndicatorExample } from "./src/components/ActivityIndicatorExample";
import { InfoScreen } from "./src/screens/InfoScreen";

export type StackScreenProps = {
  HomeScreen: undefined;
  ViewExample: undefined;
  ScrollExample: undefined;
  ImageExample: undefined;
  TextInputExample: undefined;
  ButtonExample: undefined;
  SwitchExample: undefined;
  FlatListExample: undefined;
  SectionListExampe: undefined;
  BackHandlerExample: undefined;
  ToastAndroidExample: undefined;
  ActivityIndicatorExample: undefined;
  InfoScreen:
    | {
        id: string;
        name: string;
      }
    | undefined;
};

const Stack = createNativeStackNavigator<StackScreenProps>();

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" translucent={false} />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{ animation: "slide_from_right" }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ViewExample" component={ViewExample} />
          <Stack.Screen name="ScrollExample" component={ScrollExample} />
          <Stack.Screen name="ImageExample" component={ImageExample} />

          <Stack.Screen name="TextInputExample" component={TextInputExample} />
          <Stack.Screen name="ButtonExample" component={ButtonExample} />
          <Stack.Screen name="SwitchExample" component={SwitchExample} />
          <Stack.Screen name="FlatListExample" component={FlatListExample} />
          <Stack.Screen
            name="SectionListExampe"
            component={SectionListExampe}
          />
          <Stack.Screen
            name="BackHandlerExample"
            component={BackHandlerExample}
          />
          <Stack.Screen
            name="ToastAndroidExample"
            component={ToastAndroidExample}
          />
          <Stack.Screen
            name="ActivityIndicatorExample"
            component={ActivityIndicatorExample}
          />
          <Stack.Screen name="InfoScreen" component={InfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}
