global.STORYBOOK_REACT_CLASSES = {};
import {configure} from '@storybook/react-native';
import {getStorybookUI} from '@storybook/react-native';

import './add-decorators';

export function configureStoriesWithDecorators(resolveFunction, moduleName) {
  configure(resolveFunction, moduleName);
}

export function getStorybook(resolveFunction, moduleName, options = {port: 7007, host: 'localhost'}) {
  configureStoriesWithDecorators(resolveFunction, moduleName);
  return getStorybookUI(options);
}
