import { createGlobalStyle } from "styled-components";
import { Banner } from "./Banner/Banner";
import { Navbar } from "./Navbar/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Banner />
            <div>Hello</div>
        </>
    );
};
