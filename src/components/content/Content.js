// @flow
import React from 'react';

import { Container, Text } from './Content.styles';

type Props = {
  name: string,
  error?: boolean,
};

const Content = ({ name }: Props) => (
  <Container>
    <Text error={error}>{`Hi ${name} welcome to Eastcode Sessions`}</Text>
  </Container>
);

export default Content;
