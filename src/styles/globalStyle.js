import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html,body {
        background-color: ${({ theme }) => theme[theme.name]}
        color: ${({ theme }) => theme.fontColor}
    }

    body::-webkit-scrollbar {
        display:none;
    }

`;
