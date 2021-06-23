import styled from "styled-components";

const PokemonDetailStyle = styled.div`
  display: grid;
  grid-template-columns: 419px 520px;
  align-items: center;
  justify-content: center;
  margin: auto 0;

  img {
    width: 100%;
    height: auto;
  }

  h1 {
    span {
      font-weight: 400;
      color: #3d3d3d;
    }
  }

  h4 {
    margin-bottom: 10px;
  }

  .description {
    color: #5b5b5b;
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  .contain-type {
    max-width: 150px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
  }

  @media screen and (max-width: 576px) {
    .description {
      margin-bottom: 30px;
    }
  }
`;

export default PokemonDetailStyle;

export const TypeStyle = styled.div`
  background-color: ${(props) =>
    props.theme.colorsType[props.type] || "#732984"};
  display: inline-block;
  padding: 7px 10px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  margin-right: 5px;
  margin-bottom: 5px;
`;
