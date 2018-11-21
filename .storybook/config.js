import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/Button/story.tsx');
  require('../src/components/Input/story.tsx');
  require('../src/components/Fieldset/story.tsx');
}

configure(loadStories, module);
