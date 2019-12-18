// @flow
import React from 'react';
import { Text } from 'react-native';

import { Container, Title } from './Button.styles';

type Props = {|
  title: string,
  onPress: () => void,
  disabled?: boolean,
|};

const Button = ({ onPress, disabled = false, title }: Props) => (
  <Container onPress={onPress} disabled={disabled}>
    <Title>{`${title}`}</Title>
  </Container>
);

export default Button;
