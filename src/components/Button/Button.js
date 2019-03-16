import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

/* need to seperate from background and below better, eg make mixins come from a utils js file rather then from theme... theme can use same util methods */
const ButtonEle = styled.button`
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
			(props.effect === 'lighten' && lighten(0.2, props.theme.colorDarkest)) || 
			(props.effect === 'darken' && darken(0.2, props.theme.colorDarkest))
		};

		border-color: ${props =>
			(props.effect === 'lighten' && lighten(0.2, props.theme.colorDarkest)) || 
			(props.effect === 'darken' && darken(0.2, props.theme.colorDarkest))
		};
		text-decoration: none;
	}
	&:active {
		background: ${props =>
			(props.effect === 'lighten' && lighten(0.3, props.theme.colorDarkest)) || 
			(props.effect === 'darken' && darken(0.3, props.theme.colorDarkest))
		};

		border-color: ${props =>
			(props.effect === 'lighten' && lighten(0.3, props.theme.colorDarkest)) || 
			(props.effect === 'darken' && darken(0.3, props.theme.colorDarkest))
		};
	}

	/* ---------------- vertical height fix on anchors ---------------- */

	${props => props.as === 'a' ? `
		display: flex;
		flex-direction: column;
		justify-content: center;
	` : null}

	/* ---------------- Variations ---------------- */

	
	.mercury-btn--primary&:focus,
	.mercury-btn--primary&:hover {
		background: ${props =>
			(props.effect === 'lighten' && lighten(0.05, props.theme.colorPrimary)) || 
			(props.effect === 'darken' && darken(0.1, props.theme.colorPrimary))
		};

		border-color: ${props =>
			(props.effect === 'lighten' && lighten(0.05, props.theme.colorPrimary)) || 
			(props.effect === 'darken' && darken(0.2, props.theme.colorPrimary))
		};
	}
	.mercury-btn--primary&:active {
		background: ${props =>
			(props.effect === 'lighten' && lighten(0.15, props.theme.colorPrimary)) || 
			(props.effect === 'darken' && darken(0.3, props.theme.colorPrimary))
		};

		border-color: ${props =>
			(props.effect === 'lighten' && lighten(0.15, props.theme.colorPrimary)) || 
			(props.effect === 'darken' && darken(0.3, props.theme.colorPrimary))
		};
	}
	

	/* ---------------- For adding some trickery margin on icons ---------------- */
	> .mercury-icon:first-child {
		margin-right: 7px;
	}
	> .mercury-icon:last-child {
		margin-left: 7px;
	}
`;

const Button = ({children, href, effect, variation, ...restProps}) => {

	// wrap the plain text children in a span to allow :first-child selections of svg
	const wrappedTextChildren = typeof children === 'object' ? 
		children.map(child => typeof child === 'string' ? <span key="text">{child}</span> : child) :
		children;

	const buttonClasses = classNames({
		[`mercury-btn`]: true,
		[`mercury-btn--primary`]: variation === 'primary',
		[`mercury-btn--secondary`]: variation === 'secondary',
		[`mercury-btn--dark-effect`]: effect === 'darken'
	});
	
	const eleProps = {
		className: buttonClasses,

		effect: effect,
		as: href ? 'a' : 'button',
		variation: variation,
		role: !href ? 'button' : null,
		...restProps
	};

	return <ButtonEle {...eleProps} >{wrappedTextChildren}</ButtonEle> ;
}

Button.propTypes = {
	href: PropTypes.string,
	variation: PropTypes.string,
	effect: PropTypes.string
};
  
Button.defaultProps = {
	effect: 'lighten',
	variation: ''
};


export default Button;
