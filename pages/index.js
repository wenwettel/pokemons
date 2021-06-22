import styled from "styled-components";
import Card from "components/Card";
import { useState, useContext } from "react";
import Link from "next/link";
import PaginationButtons from "components/PaginationButtons";
import PokemonContext from "Context/PokemonContext";

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;

  a {
    color: black;
    text-decoration: none;
  }
  .bar-search {
    position: relative;

    input {
      height: 33px;
      width: 221px;
      border: 1px solid #bfbdbd;
      border-radius: 5px;
      padding: 14px 10px;
    }

    .fas.fa-search {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 7px;
      color: #939393;
      font-size: 21px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .contain-cards {
    margin-top: 20px;
    width: clamp(320px, 84%, 1339px);
    display: grid;
    grid-template-columns: repeat(auto-fit, 309px);
    grid-auto-rows: 202px;
    gap: 30px;
    justify-content: center;
  }
`;

function Home({ pokemons, page, count }) {
  const { pokemonInfo, setPokemonInfo } = useContext(PokemonContext);

  const [searchValue, setSearchValue] = useState("");

  const changeInput = (e) => {
    setSearchValue(e.target.value);
  };

  const filterPokemon = pokemons.filter((pokemon) => {
    return pokemon.name.includes(searchValue);
  });

  return (
    <HomeStyle>
      <div className="bar-search">
        <input
          type="text"
          placeholder="Búscar pokémon..."
          value={searchValue}
          onChange={changeInput}
        />
        <i className="fas fa-search"></i>
      </div>
      <div className="contain-cards">
        {filterPokemon.map((pokemon) => {
          return (
            <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
              <a onClick={() => setPokemonInfo({ ...pokemonInfo, page })}>
                <Card
                  image={pokemon.sprites.front_default}
                  name={pokemon.name}
                  number={pokemon.id}
                />
              </a>
            </Link>
          );
        })}
        <PaginationButtons
          prevHref={page >= 1 && `/?page=${page - 1}`}
          nextHref={Math.floor(count / 20) !== page && `/?page=${page + 1}`}
        />
      </div>
    </HomeStyle>
  );
}

Home.getInitialProps = async (ctx) => {
  const { page = 0 } = ctx.query;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`
  );

  const resPokemons = await res.json();

  const urls = resPokemons.results.map((pokemon) => {
    return pokemon.url;
  });

  const pokemons = await Promise.all(
    urls.map(async (url) => {
      const res = await fetch(url);
      const resDetailsPokemons = await res.json();
      return resDetailsPokemons;
    })
  );

  return {
    pokemons,
    page: Number(page),
    count: resPokemons.count,
  };
};

export default Home;
