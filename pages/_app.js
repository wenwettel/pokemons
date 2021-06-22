import { createGlobalStyle, ThemeProvider } from "styled-components";
import { PokemonProvider } from "Context/PokemonContext";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  *,
  *::after,
  *::before {
  box-sizing: inherit;
  }

  * {
  margin: 0;
  padding: 0;
  }

`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  const [pokemonInfo, setPokemonInfo] = useState({
    page: 0,
  });
  return (
    <>
      <GlobalStyle />
      <PokemonProvider value={{ pokemonInfo, setPokemonInfo }}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PokemonProvider>
    </>
  );
}
