import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
  ${reset};

  *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Helvetica", "Arial", sans-serif;
    }

    html, body {
      height: 100vh;
      max-width: 100%;
      margin: 0 auto;
    }

  
    a{
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyled;
