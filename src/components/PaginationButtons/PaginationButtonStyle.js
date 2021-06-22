import styled from "styled-components";

const ButtonStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px;
  button {
    font-family: "Roboto", sans-serif;
    padding: 12px 20px;
    border-radius: 10px;
    border: 1px solid #bfbdbd;
    box-shadow: -5px 7px 9px 1px rgba(0, 0, 0, 0.17);
    font-weight: 600;
    color: white;
    background-color: black;
    &:hover {
      cursor: pointer;
      box-shadow: -5px 7px 9px 1px rgba(0, 0, 0, 0.33);
    }
  }

  .next {
    margin-left: auto;
  }
`;

export default ButtonStyle;
