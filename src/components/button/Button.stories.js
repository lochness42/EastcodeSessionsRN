// @flow
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button from './Button';
import styled from 'styled-components/native';

export const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

storiesOf('Button', module).add('Default', () => <Button onPress={() => {}} title="button" />);
