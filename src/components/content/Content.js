// @flow
import React, { useContext } from 'react';
import { ErrorContext } from 'contexts/errorContext';

import { Container, Text } from './Content.styles';

type Props = {|
  name: string,
|};

const Content = ({ name }: Props) => {
  const error = useContext(ErrorContext);
  const contentText = error ? `Please fix error first` : `Hi ${name} welcome to Eastcode Sessions`;
  return (
    <Container>
      <Text error={error}>{contentText}</Text>
    </Container>
  );
};

export default Content;
