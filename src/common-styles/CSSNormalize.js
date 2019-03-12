const CSSNormalize = `
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
    }

    article,
    aside,
    footer,
    header,
    nav,
    section,
    figcaption,
    figure,
    main,
    details,
    menu {
        display: block;
    }

    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
    }

    a:active,
    a:hover {
        outline-width: 0;
    }

    address {
        font-style: normal;
    }

    b,
    strong {
        font-weight: inherit;
    }

    b,
    strong {
        font-weight: bolder;
    }

    code,
    kbd,
    pre,
    samp {
        font-size: 1em;
    }

    dfn {
        font-style: italic;
    }

    small {
        font-size: 80%;
        font-weight: 400;
    }

    sub,
    sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    audio,
    video {
        display: inline-block;
    }

    audio:not([controls]) {
        display: none;
        height: 0;
    }

    img {
        border-style: none;
    }

    svg:not(:root) {
        overflow: hidden;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        margin: 0;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    html [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    fieldset {
        border: 0;
        margin: 0;
        padding: 0;
    }

    legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
    }

    progress {
        display: inline-block;
        vertical-align: baseline;
    }

    textarea {
        overflow: auto;
    }

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }

    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
    -webkit-appearance: button;
        font: inherit;
    }

    summary {
        display: list-item;
        outline: none;
    }

    canvas {
        display: inline-block;
    }

    template,
    [hidden] {
        display: none;
    }
`;

export default CSSNormalize;
