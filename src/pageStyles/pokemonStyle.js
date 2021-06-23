import styled from "styled-components";

const PokemonStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .return {
    margin: auto;
  }

  @media screen and (max-width: 576px) {
    .return {
      margin: auto auto 30px auto;
    }
  }
`;

export default PokemonStyle;
