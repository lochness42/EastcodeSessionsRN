// @flow
import React from 'react';
import { Text } from 'react-native';

import { ContentContainer } from './Content.styles';

type Props = {
  text?: string,
};

const Content = ({ text = 'hi' }: Props) => (
  <ContentContainer>
    <Text>{`Content Component ${text}`}</Text>
  </ContentContainer>
);

Content.defaultProps = {
  text: 'is very cool!',
};

export default Content;
