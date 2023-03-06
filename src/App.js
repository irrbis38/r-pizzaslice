import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <h1>Pizza Slice</h1>
            <div>Hello</div>
        </>
    );
};
