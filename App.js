/**
 *
 * @format
 * @flow
 */

import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import Home from "./src/screens/home/Home";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
