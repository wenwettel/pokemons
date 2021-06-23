import styled from "styled-components";

const ErrorStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  div {
    background-color: #efc4c4;
    border: 1px solid #db6767;
    border-radius: 10px;
    padding: 30px;

    h1 {
      color: #ce1e1e;
    }

    p {
      margin: 20px 0;
    }
  }
`;

export default ErrorStyle;
