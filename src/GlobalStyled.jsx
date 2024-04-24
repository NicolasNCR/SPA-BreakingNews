import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: "Newsreader", Arial;
    }

    html {
        width: auto;
    }

    body {
        max-width: 100vw;
        height: 100vh;
        background-color: #e6e6e6;
    }
`;