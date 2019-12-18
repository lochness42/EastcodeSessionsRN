// @flow
import React, { useState } from 'react';
import Header from 'components/header/Header';
import Content from 'components/content/Content';
import Button from 'components/button/Button';
import { ErrorContext } from 'contexts/errorContext';

type Props = {|
  name?: string,
|};

const Home = ({ name = 'Pavel' }: Props) => {
  const [error, setError] = useState(false);
  return (
    <ErrorContext.Provider value={error}>
      <Header onButtonPress={() => setError(!error)} error={error} />
      <Content name={name} error={error} />
      <Button title="Reset error" onPress={() => setError(false)} />
    </ErrorContext.Provider>
  );
};

export default Home;
