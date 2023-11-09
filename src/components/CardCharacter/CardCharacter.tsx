import { Link } from "react-router-dom";
import { ICharacter } from "../../core/models";
import "./CardCharacter.style.css";

interface Props {
  character: ICharacter;
}

const CardCharacter = ({ character }: Props) => {
  const { name, status, species, gender, image } = character;

  return (
    <Link to={`/character/${character.id}`}>
      <div className="card-character__wrapper">
        <img src={image} alt={name} />
        <div className="card-character__details">
          <h3 className="details__title">{name}</h3>
          <div className="detaisl__footer">
            <span
              className={`header__status header__status--${status.toLowerCase()}`}
            >
              {status}
            </span>
            <span className="footer__information">
              {species} | {gender}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCharacter;
