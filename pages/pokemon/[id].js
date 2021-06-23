import PokemonDetails from "components/PokemonDetails";
import PokemonStyle from "pageStyles/pokemonStyle";
import Link from "next/link";
import PaginationButtons from "components/PaginationButtons";
import PokemonContext from "Context/PokemonContext";
import Button from "components/Button";
import Error from "components/Error";
import { useContext } from "react";

function Pokemon({ pokemon, error }) {
  if (error) {
    return <Error />;
  }
  const { pokemonInfo } = useContext(PokemonContext);

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
        <a className="return">
          <Button big color="#0e7a34">
            BACK HOME
          </Button>
        </a>
      </Link>
    </PokemonStyle>
  );
}

Pokemon.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const resPokemon = await res.json();

    return {
      pokemon: resPokemon,
      error: false,
    };
  } catch (e) {
    return {
      error: true,
    };
  }
};

export default Pokemon;
