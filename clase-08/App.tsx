import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
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
import { HomeScreen } from "./src/screens/HomeScreen";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" translucent={false} />

      {/* <ViewExample /> */}
      {/* <ScrollExample /> */}
      {/* <ImageExample /> */}
      {/* <TextInputExample /> */}
      {/* <ButtonExample /> */}
      {/* <SwitchExample /> */}
      {/* <FlatListExample /> */}
      {/* <SectionListExampe /> */}
      {/* <BackHandlerExample /> */}
      {/* <ToastAndroidExample /> */}
      {/* <ActivityIndicatorExample /> */}
      <HomeScreen />
    </Fragment>
  );
}
