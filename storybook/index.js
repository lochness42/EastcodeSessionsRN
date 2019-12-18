import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUI = getStorybookUI({
  port: 7007,
  onDeviceUI: true,
  asyncStorage: null,
});

export default StorybookUI;
