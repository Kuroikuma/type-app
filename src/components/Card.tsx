import { Sub } from "../type";

const Card = ({ avatar, nick, descripcion, subMount }: Sub) => {
  return (
    <li className="sub_card">
      <img src={avatar} alt={avatar} />
      <p>
        {nick} <span>{subMount}</span>
      </p>
      <p>{descripcion?.substring(0, 100)}</p>
    </li>
  );
};

export default Card;
