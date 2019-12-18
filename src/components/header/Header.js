// @flow
import React, { useContext } from 'react';
import { ErrorContext } from 'contexts/errorContext';
import Button from 'components/button/Button';
import { Container, Text } from './Header.styles';

type Props = {
  onButtonPress: () => void,
};
const Header = ({ onButtonPress }: Props) => {
  const error = useContext(ErrorContext);
  return (
    <Container>
      <Text>This is our demo app</Text>
      {/* <Button onPress={onButtonPress} title={`Set error to ${String(!error)}`} /> */}
    </Container>
  );
};

export default Header;
