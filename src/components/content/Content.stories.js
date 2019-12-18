// @flow
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Content from './Content';

storiesOf('Content', module).add('With text', () => <Content text="Hi 2" />);
