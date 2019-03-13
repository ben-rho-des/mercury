import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const e = React.createElement

/* need to seperate from background and below better, eg make mixins come from a utils js file rather then from theme... theme can use same util methods */
const ButtonEle = styled(({ tag = 'button', children, ...props }) => e(tag, props, children))`
	appearance: none;
	border-radius: ${props => props.theme.borderRadius};
	cursor: pointer;
	display: inline-block;
	font-size: ${props => props.theme.fontSize};
	min-height: ${props => props.theme.buttonHeight};
	outline: none;
	padding: ${props => props.theme.buttonPaddingY} ${props => props.theme.buttonPaddingX};
	text-align: center;
	text-decoration: none;
	transition: background .2s, border .2s, box-shadow .2s, color .2s;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;

	${props => props.tag === 'a' ? `
		display: flex;
		flex-direction: column;
		justify-content: center;
	` : null}

	&:focus {
		box-shadow: 0 0 0 .1rem ${props => props.theme.focusColor}
	}
	background: ${props =>
		(!props.variation && props.theme.colorDarkest) || 
		(props.variation === 'primary' && props.theme.colorPrimary) ||
		(props.variation === 'secondary' && props.theme.colorSecondary)
	};
	border-style: solid;
	border-width: ${props => props.theme.borderWidth};
	border-color: ${props =>
		(!props.variation && props.theme.colorDarkest) || 
		(props.variation === 'primary' && props.theme.colorPrimary) ||
		(props.variation === 'secondary' && props.theme.colorSecondary)
	};
	color: ${props =>
		(!props.variation && props.theme.colorLightest) || 
		(props.variation === 'primary' && props.theme.colorLightest) ||
		(props.variation === 'secondary' && props.theme.colorLightest)
	};
	&:focus,
	&:hover {
		background: ${props =>
			(!props.activeEffect && lighten(0.2, props.theme.colorDarkest)) || 
			(props.activeEffect === 'darken' && darken(0.2, props.theme.colorDarkest))
		};

		border-color: ${props =>
			(!props.activeEffect && lighten(0.2, props.theme.colorDarkest)) || 
			(props.activeEffect === 'darken' && darken(0.2, props.theme.colorDarkest))
		};
		text-decoration: none;
	}
	&:active {
		background: ${props =>
			(!props.activeEffect && lighten(0.3, props.theme.colorDarkest)) || 
			(props.activeEffect === 'darken' && darken(0.3, props.theme.colorDarkest))
		};

		border-color: ${props =>
			(!props.activeEffect && lighten(0.3, props.theme.colorDarkest)) || 
			(props.activeEffect === 'darken' && darken(0.3, props.theme.colorDarkest))
		};
	}

	[variation='primary']&:focus,
	[variation='primary']&:hover {
		background: ${props =>
			(!props.activeEffect && lighten(0.05, props.theme.colorPrimary)) || 
			(props.activeEffect === 'darken' && darken(0.1, props.theme.colorPrimary))
		};

		border-color: ${props =>
			(!props.activeEffect && lighten(0.05, props.theme.colorPrimary)) || 
			(props.activeEffect === 'darken' && darken(0.2, props.theme.colorPrimary))
		};
		text-decoration: none;
	}
	[variation='primary']&:active {
		background: ${props =>
			(!props.activeEffect && lighten(0.15, props.theme.colorPrimary)) || 
			(props.activeEffect === 'darken' && darken(0.3, props.theme.colorPrimary))
		};

		border-color: ${props =>
			(!props.activeEffect && lighten(0.15, props.theme.colorPrimary)) || 
			(props.activeEffect === 'darken' && darken(0.3, props.theme.colorPrimary))
		};
	}
`

function Button(props) {
	return <ButtonEle {...props}>{props.children}</ButtonEle> ;
}

export default Button;
