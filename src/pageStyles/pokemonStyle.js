import styled from "styled-components";

const PokemonStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  button {
    font-family: "Roboto", sans-serif;
    padding: 12px 20px;
    border-radius: 10px;
    border: 1px solid #bfbdbd;
    box-shadow: -5px 7px 9px 1px rgba(0, 0, 0, 0.17);
    font-weight: 600;
    color: white;
    &:hover {
      cursor: pointer;
      box-shadow: -5px 7px 9px 1px rgba(0, 0, 0, 0.33);
    }
  }

  .prev-next {
    display: flex;
    justify-content: space-between;
    margin: 32px;

    .next {
      margin-left: auto;
    }

    button {
      background-color: black;
      padding: 12px 20px;
    }
  }

  .return {
    margin: auto;
    padding: 12px 42px;

    background-color: green;
    &:hover {
      box-shadow: -5px 7px 9px 1px rgba(138, 148, 139, 1);
    }
  }
`;

export default PokemonStyle;
