import { configure } from '@storybook/react';
import {addDecorator} from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import { Theme, ThemeCircular, ThemeBoxed } from '../src/common-styles';

const req = require.context('../src/components', true, /[^/]+\/stories.js$/);

const themes = [Theme, ThemeCircular, ThemeBoxed];
addDecorator(withThemesProvider(themes))

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
