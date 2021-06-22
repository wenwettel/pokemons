import { createContext } from "react";
const PokemonContext = createContext();

export const PokemonProvider = PokemonContext.Provider;
export default PokemonContext;
