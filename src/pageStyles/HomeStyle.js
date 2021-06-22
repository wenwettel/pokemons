import styled from "styled-components";
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

export default HomeStyle;
