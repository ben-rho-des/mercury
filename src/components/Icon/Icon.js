import React from 'react';
import styled from 'styled-components';

const IconWrap = styled('span')`
    > svg {
        display: inline-block;
        fill: currentcolor;
        height: 1.25em;
        max-width: 100%;
        position: relative;
        user-select: none;
        vertical-align: text-bottom;
    }
`

function Icon(props) {
	return <IconWrap>{props.src}</IconWrap> ;
}

export default Icon;
