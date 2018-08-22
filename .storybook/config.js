import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/Hello/story.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
