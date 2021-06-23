import styled from "styled-components";

const ButtonStyle = styled.button`
  font-family: "Roboto", sans-serif;
  padding: ${(props) => (props.big ? "12px 42px" : "12px 20px")};
  border-radius: 10px;
  border: 1px solid #bfbdbd;
  box-shadow: -5px 7px 9px 1px rgba(0, 0, 0, 0.17);
  font-weight: 600;
  color: white;
  background-color: ${(props) => props.color || "transparent"};
  &:hover {
    cursor: pointer;
    box-shadow: -5px 7px 9px 1px rgba(0, 0, 0, 0.33);
  }
`;

export default ButtonStyle;
