// @flow
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Header from './Header';
import { ErrorContext } from 'contexts/errorContext';

storiesOf('Header', module).add('Default', () => (
  <ErrorContext.Provider value={false}>
    <Header onButtonPress={() => {}} />
  </ErrorContext.Provider>
));
