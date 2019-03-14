import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '../../../.storybook/decorator';

// import build icons from this repo to showcase icons
import IconCircle from '../../../build/icons/react-icons/circle';
import Icon from '../Icon';
import Button from './Button';

addDecorator(ThemeDecorator);
storiesOf('Button')
	.add('with text', () => (
		<Button  onClick={action('clicked')}>Hello Button</Button>
	))
	.add('with emoji', () => (
		<Button onClick={action('clicked')}>🚿 🚿 🐈 🐈</Button>
	))
	.add('as anchor', () => (
		<Button href="a" onClick={action('clicked')}>Hello anchor Button</Button>
	))
	.add('primary button', () => (
		<Button variation="primary" onClick={action('clicked')}>Hello Button</Button>
	))
	.add('primary button dark hover effect', () => (
		<Button activeEffect="darken" variation="primary" onClick={action('clicked')}>Hello Button</Button>
	))
	.add('primary button with icon before', () => (
		<Button variation="primary" onClick={action('clicked')}><Icon src={<IconCircle/>} />Hello Button</Button>
	))
	.add('primary button with icon after', () => (
		<Button variation="primary" onClick={action('clicked')}>Hello Button <Icon src={<IconCircle/>} /></Button>
	))
	.add('primary button with icon before&after', () => (
		<Button variation="primary" onClick={action('clicked')}><Icon src={<IconCircle/>} /> Hello Button <Icon src={<IconCircle/>} /></Button>
	));
