import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '../../../.storybook/decorator';

// import built icons from this repo to showcase icons
import IconCircle from '../../../build/icons/mercury-icons/circle';
import Button from './Button';

addDecorator(ThemeDecorator)

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
		<Button effect="darken" variation="primary" onClick={action('clicked')}>Hello Button</Button>
	))
	.add('primary button with icon before', () => (
		<Button variation="primary" onClick={action('clicked')}><IconCircle/>Hello Button</Button>
	))
	.add('primary button with icon after', () => (
		<Button variation="primary" onClick={action('clicked')}>Hello Button <IconCircle/></Button>
	))
	.add('primary button with icon before&after', () => (
		<Button variation="primary" onClick={action('clicked')}><IconCircle/> Hello Button <IconCircle/></Button>
	));
