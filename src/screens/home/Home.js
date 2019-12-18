// @flow
import React from 'react';
import Header from 'components/header/Header';
import Content from 'components/content/Content';

type Props = {|
  name?: string,
|};

const Home = ({ name }: Props) => <Content name={name} />;

Home.defaultProps = {
  name: `Pavel`,
};

export default Home;
