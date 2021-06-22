import PokemonDetails from "components/PokemonDetails";
import PokemonStyle from "pageStyles/pokemonStyle";
import Link from "next/link";
import PaginationButtons from "components/PaginationButtons";
import PokemonContext from "Context/PokemonContext";
import { useContext } from "react";

function Pokemon({ pokemon }) {
  const { pokemonInfo } = useContext(PokemonContext);
  console.log(pokemonInfo);
  const abilities = pokemon.abilities.map((ability) => {
    return ability.ability.name;
  });
  const types = pokemon.types.map((type) => {
    return type.type.name;
  });

  return (
    <PokemonStyle>
      <PaginationButtons
        prevHref={pokemon.id > 1 && `/pokemon/${pokemon.id - 1}`}
        nextHref={`/pokemon/${pokemon.id + 1}`}
        prevText="PREVIOUS"
        nextText="NEXT"
      />

      <PokemonDetails
        name={pokemon.name}
        id={pokemon.id}
        height={pokemon.height}
        weight={pokemon.weight}
        image={pokemon.sprites.front_default}
        abilities={abilities}
        types={types}
      />
      <Link href={`/?page=${pokemonInfo.page || 0}`}>
        <button className="return">BACK HOME</button>
      </Link>
    </PokemonStyle>
  );
}

Pokemon.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const resPokemon = await res.json();

  return {
    pokemon: resPokemon,
  };
};

export default Pokemon;
