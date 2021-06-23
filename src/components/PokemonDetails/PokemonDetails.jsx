import PokemonDetailStyle, { TypeStyle } from "./PokemonDetailStyle";
import { capitalizeFirstLetter } from "utils/formatter";

function PokemonDetails({ name, id, height, weight, abilities, types, image }) {
  return (
    <PokemonDetailStyle>
      <div>
        {" "}
        <img src={image} />
      </div>
      <div>
        <h1>
          {capitalizeFirstLetter(name)} <span>#{id}</span>
        </h1>
        <div className="description">
          <div>
            <h4>Height</h4>
            <p>{height}</p>
          </div>

          <div className="contain-type">
            <h4>Type</h4>
            {types.length >= 1 &&
              types.map((type) => {
                return (
                  <TypeStyle type={type}>
                    <p>{capitalizeFirstLetter(type)}</p>{" "}
                  </TypeStyle>
                );
              })}
          </div>

          <div>
            <h4>Weight</h4>
            <p>{weight}</p>
          </div>

          <div>
            <h4>Abilities</h4>
            {abilities.length >= 1 &&
              abilities.map((ability) => (
                <p>{capitalizeFirstLetter(ability)}</p>
              ))}
          </div>
        </div>
      </div>
    </PokemonDetailStyle>
  );
}

export default PokemonDetails;
