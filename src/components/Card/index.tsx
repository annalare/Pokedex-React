import CardBase from "react-bootstrap/Card";

import { Pokemon } from "../../types";

type CardProps = {
  pokemon: Pokemon;
};

function Card({ pokemon }: CardProps) {
  return (
    <CardBase className="cardPokemon ">
      <CardBase.Img
        className="cardImg"
        variant="top"
        src={pokemon.sprites.front_default}
      />
      <p>{pokemon.name}</p>
      <span>{pokemon.abilities[0].ability.name}</span>
    </CardBase>
  );
}

export default Card;
