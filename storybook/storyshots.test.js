import initStoryshots, {
  multiSnapshotWithOptions
} from "@storybook/addon-storyshots";
import { loadStories } from "./storyLoader"; // eslint-disable-line import/no-unresolved

jest.useFakeTimers();

initStoryshots({
  test: multiSnapshotWithOptions(),
  config: ({ configure }) => configure(loadStories, module)
});
