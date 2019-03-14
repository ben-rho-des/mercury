import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { product } from '../../settings';

/* need to seperate from background and below better, eg make mixins come from a utils js file rather then from theme... theme can use same util methods */
const ButtonEle = styled(({ tag, children, ...props }) => React.createElement(tag, props, children))`
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
	
	&:focus {
		box-shadow: 0 0 0 .1rem ${props => props.theme.focusColor}
	}
	&:focus,
	&:hover {
		background: ${props =>
			(props.activeeffect === 'lighten' && lighten(0.2, props.theme.colorDarkest)) || 
			(props.activeeffect === 'darken' && darken(0.2, props.theme.colorDarkest))
		};

		border-color: ${props =>
			(props.activeeffect === 'lighten' && lighten(0.2, props.theme.colorDarkest)) || 
			(props.activeeffect === 'darken' && darken(0.2, props.theme.colorDarkest))
		};
		text-decoration: none;
	}
	&:active {
		background: ${props =>
			(props.activeeffect === 'lighten' && lighten(0.3, props.theme.colorDarkest)) || 
			(props.activeeffect === 'darken' && darken(0.3, props.theme.colorDarkest))
		};

		border-color: ${props =>
			(props.activeeffect === 'lighten' && lighten(0.3, props.theme.colorDarkest)) || 
			(props.activeeffect === 'darken' && darken(0.3, props.theme.colorDarkest))
		};
	}

	/* ---------------- vertical height fix on anchors ---------------- */

	${props => props.tag === 'a' ? `
		display: flex;
		flex-direction: column;
		justify-content: center;
	` : null}

	/* ---------------- Variations ---------------- */

	
	.${product}--btn--primary&:focus,
	.${product}--btn--primary&:hover {
		background: ${props =>
			(props.activeeffect === 'lighten' && lighten(0.05, props.theme.colorPrimary)) || 
			(props.activeeffect === 'darken' && darken(0.1, props.theme.colorPrimary))
		};

		border-color: ${props =>
			(props.activeeffect === 'lighten' && lighten(0.05, props.theme.colorPrimary)) || 
			(props.activeeffect === 'darken' && darken(0.2, props.theme.colorPrimary))
		};
	}
	.${product}--btn--primary&:active {
		background: ${props =>
			(props.activeeffect === 'lighten' && lighten(0.15, props.theme.colorPrimary)) || 
			(props.activeeffect === 'darken' && darken(0.3, props.theme.colorPrimary))
		};

		border-color: ${props =>
			(props.activeeffect === 'lighten' && lighten(0.15, props.theme.colorPrimary)) || 
			(props.activeeffect === 'darken' && darken(0.3, props.theme.colorPrimary))
		};
	}
	

	/* ---------------- For adding some trickery margin on icons ---------------- */
	> span:first-child > svg {
		margin-right: 7px;
	}
	> span:last-child > svg {
		margin-left: 7px;
	}
`;

const Button = ({children, activeEffect, variation, theme, href}) => {
	// wrap the plain text children in a span to allow :first-child selections of svg
	const wrappedTextChildren = typeof children === 'object' ? 
		children.map(child => typeof child === 'string' ? <span key="text">{child}</span> : child) :
		children;

	const buttonClasses = classNames({
		[`${product}--btn`]: true,
		[`${product}--btn--primary`]: variation === 'primary',
		[`${product}--btn--secondary`]: variation === 'secondary',
		[`${product}--btn--dark-effect`]: variation === 'darken'
	});

	const eleProps = {
		className: buttonClasses,
		variation: variation,
		theme: theme,
		activeeffect: activeEffect,
		tag: href ? 'a' : 'button'
	};

	return <ButtonEle {...eleProps}>{wrappedTextChildren}</ButtonEle> ;
}

Button.propTypes = {
	tag: PropTypes.string,
	variation: PropTypes.string,
	activeEffect: PropTypes.string
};
  
Button.defaultProps = {
	activeEffect: 'lighten'
};

export default Button;
