import React from 'react';
import styled from 'styled-components';

const e = React.createElement

/* need to seperate from background and below better, eg make mixins come from a utils js file rather then from theme... theme can use same util methods */
const ButtonEle = styled(({ tag = 'button', children, ...props }) => e(tag, props, children))`
	appearance: none;
	border-radius: ${props => props.theme.borderRadius};
	cursor: pointer;
	display: inline-block;
	font-size: ${props => props.theme.fontSize};
	height: ${props => props.theme.buttonHeight}
	line-height: ${props => props.theme.lineHeight};
	outline: none;
	padding: ${props => props.theme.buttonPaddingY} ${props => props.theme.buttonPaddingX};
	text-align: center;
	text-decoration: none;
	transition: background .2s, border .2s, box-shadow .2s, color .2s;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;
	&:focus {
		${props => props.theme.mixinFocus(props.theme.focusColor)}
	}
	
	background: ${props => props.theme.colorDarkest};
	border: ${props => props.theme.borderWidth} solid ${props => props.theme.colorDarkest};
	color: ${props => props.theme.colorLightest};
	&:focus,
	&:hover {
		${props => props.theme.mixinLighten('background', props.theme.colorDarkest, '20')};
		${props => props.theme.mixinLighten('border-color', props.theme.colorDarkest, '20')};
		text-decoration: none;
	}
	&:active {
		${props => props.theme.mixinLighten('background', props.theme.colorDarkest, '30')};
		${props => props.theme.mixinLighten('border-color', props.theme.colorDarkest, '30')};
	}

	&[type='primary'] {
		background: ${props => props.theme.colorPrimary};
		border: ${props => props.theme.borderWidth} solid ${props => props.theme.colorPrimary};
		color: ${props => props.theme.colorLightest};
	} 
	[type='primary']&:hover {
		${props => props.theme.mixinLighten('background', '#0f0', '5')};
		${props => props.theme.mixinLighten('border-color', '#f00', '5')};
	}
	[type='primary']&:active {
		${props => props.theme.mixinLighten('background', props.theme.colorPrimary, '15')};
			${props => props.theme.mixinLighten('border-color', props.theme.colorPrimary, '15')};
	}
`

function Button(props) {
	return <ButtonEle {...props}>{props.children}</ButtonEle> ;
}

export default Button;
