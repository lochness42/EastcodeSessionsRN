// @flow
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Content from './Content';
import { ErrorContext } from 'contexts/errorContext';

storiesOf('Content', module).add('With text', () => (
  <ErrorContext.Provider value={false}>
    <Content name="Story Name" />
  </ErrorContext.Provider>
));
