import ButtonStyle from "./ButtonStyle";

function Button({ children, color, big }) {
  return (
    <ButtonStyle color={color} big={big}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
