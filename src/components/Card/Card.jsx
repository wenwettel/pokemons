import CardStyle from "./CardStyle";
import { capitalizeFirstLetter } from "utils/formatter";
function Card({ image, name, number }) {
  return (
    <CardStyle>
      <div className="contain-img">
        <div className="image">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="contain-text">
        <h4>{capitalizeFirstLetter(name)}</h4>
        <p>#{number}</p>
      </div>
    </CardStyle>
  );
}

export default Card;
