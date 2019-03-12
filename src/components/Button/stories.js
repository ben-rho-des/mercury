import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '../../../.storybook/decorator';

import Button from './Button';

addDecorator(ThemeDecorator);
storiesOf('Button')
	.add('with text', () => (
		<Button onClick={action('clicked')}>Hello Button</Button>
	))
	.add('with emoji', () => (
		<Button onClick={action('clicked')}>🚿 🚿 🐈 🐈</Button>
	))
	.add('as anchor', () => (
		<Button tag="a" onClick={action('clicked')}>Hello anchor Button</Button>
	))
	.add('primary button', () => (
		<Button type="primary" onClick={action('clicked')}>Hello Button</Button>
	));
