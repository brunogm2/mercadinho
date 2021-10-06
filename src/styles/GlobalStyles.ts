import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
    *, button, input {
        font-family: Roboto, sans-serif;
    }
    :root {
        --color-primary: #F6F7FB;
        --color-secondary: #D1E361;
        --color-tertiary: #CFA17E;
        --color-quaternary: #6E85CD;
        --color-blue: #111D5E;
        --color-border: #bdc4c9;
        --color-white: #FFF;
        --color-letters: #5D5E62
    }

`;