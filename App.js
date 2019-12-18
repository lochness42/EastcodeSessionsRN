/**
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Home from 'screens/home/Home';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
