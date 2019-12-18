/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import StorybookUI from "./storybook";
import Config from "react-native-config";
import { name as appName } from "./package.json";

console.log("AppRegistry", Config);
const AppComponent = Config.IS_STORYBOOK ? StorybookUI : App;

AppRegistry.registerComponent(appName, () => AppComponent);
