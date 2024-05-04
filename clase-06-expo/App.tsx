import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { ViewExample } from "./components/ViewExample";
import { ScrollExample } from "./components/ScrollExample";
import { ImageExample } from "./components/ImageExample";
import { TextInputExample } from "./components/TextInputExample";
import { ButtonExample } from "./components/ButtonExample";
import { SwitchExample } from "./components/SwitchExample";
import { FlatListExample } from "./components/FlatListExample";
import { SectionListExampe } from "./components/SectionListExampe";
import { BackHandlerExample } from "./components/BackHandlerExample";
import { ToastAndroidExample } from "./components/ToastAndroidExample";
import { ActivityIndicatorExample } from "./components/ActivityIndicatorExample";

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
      <ActivityIndicatorExample />
    </Fragment>
  );
}
