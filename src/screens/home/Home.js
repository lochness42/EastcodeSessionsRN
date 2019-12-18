// @flow
import Content from "components/content/Content";
import { View, Text } from "react-native";

type Props = {|
  text?: string
|};

const Home = ({ text }: Props) => <Content />;

Home.defaultProps = {
  text: `There's no place like home`
};

export default Home;
