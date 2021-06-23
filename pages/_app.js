import { createGlobalStyle, ThemeProvider } from "styled-components";
import { PokemonProvider } from "Context/PokemonContext";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
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
    white: "#ffffff",
    black: "#000000",
  },
  colorsType: {
    grass: "#269b14",
    poison: "#302c2c",
    water: "#2649af",
    fire: "#ea892e",
    flying: "#33c1ce",
    bug: "#1d770f",
    normal: "#7c7575",
  },

  fontFamily: "'Roboto', sans-serif",
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
