import CardStyled from './CardStyled';
import BgPattern from "../svg/BgPattern";
import { USER } from "../../../src/constants";
const { name, age, city, social, image } = USER;

const Card = () => {
  return (
    <CardStyled>
      <BgPattern className="bg-pattern" />
      <div className="image-container">
        <img src={image} alt="Profile picture" />
      </div>
      <div className="info-container">
        <div>
          <span className="name">{name} </span>
          <span className="age">{age}</span>
        </div>
        <div className="city">{city}</div>
      </div>
      <div className="social">
        {social.map(({ label, count }) => (
          <div key={label} className="social__stat">
            <div className="social__num">{count}K</div>
            <div className="social__label">{label}</div>
          </div>
        ))}
      </div>
    </CardStyled>
  );
};

export default Card;
