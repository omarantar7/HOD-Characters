import React from "react";
import CharacterList from "../UI/Character-list";
import classes from "./Character.module.css";
import CharacterItem from "./CharacterItem";
import Rhaenyra from "../posters/Rhaenyra.jpg";
import Alicent from "../posters/alicent.jpg";
import Daemon from "../posters/DaemonTargaryen.jpg";
import Otto from "../posters/OttoHightower.jpg";
import Viserys from "../posters/ViserysTargaryen.jpg";
import CristonCole from "../posters/SerCristonCole.jpg";
import Rhaenys from "../posters/RhaenysTargaryen.jpg";
import Corlys from "../posters/CorlysVelaryon.jpg";
import Mysaria from "../posters/Mysaria.jpg";
import Button from "../UI/Button";
const Dummy = [
  {
    id: 1,
    name: "Rhaenyra",
    image: Rhaenyra,
    description: "Princess Rhaenyra Targaryen, cheered as the Realm's Delight when she was young and later called the Half-Year Queen ...",
  },
  {
    id: 2,
    name: "Alicent",
    image: Alicent,
    description: " Alicent Hightower was a member of House Hightower who became the second wife to King Viserys I Targaryen...",
  },
  {
    id: 3,
    name: "Daemon",
    image: Daemon,
    description: " Prince Daemon Targaryen was a member of House Targaryen, being a younger son of Prince Baelon Targaryen and a brother ...",
  },
  {
    id: 4,
    name: "OttoHightower",
    image: Otto,
    description: "Ser Otto Hightower was a knight from House Hightower who served as Hand of the King to three kings, although two ...",
  },
  {
    id: 5,
    name: "Viserys",
    image: Viserys,
    description: "King Viserys I Targaryen, remembered as Viserys the Peaceful, was the fifth king of the Targaryen dynasty to rule and ...",
  },
  {
    id: 6,
    name: "Criston Cole",
    image: CristonCole,
    description: " Ser Criston Cole was a knight from House Cole who rose to become Lord Commander of the Kingsguard for Viserys I Tar ...",
  },
  {
    id: 7,
    name: "Rhaenys Targaryen",
    image: Rhaenys,
    description: " Princess Rhaenys Targaryen, known as the Queen Who Never Was, was the daughter of Prince Aemon Targaryen and ...",
  },
  {
    id: 8,
    name: "Corlys Velaryon",
    image: Corlys,
    description: "Corlys Velaryon, known as the Sea Snake, was a fabled Lord of the Tides, Master of Driftmark, and head of House Velaryon ...",
  },
  {
    id: 9,
    name: "Mysaria",
    image: Mysaria,
    description: " Mysaria, also called Lady Misery, was a dancer from Lys who became the paramour of Prince Daemon Targaryen ...",
  },
];
const Character = (props) => {
  const characterList = Dummy.map((char) => (
    <CharacterItem
      key={char.id}
      name={char.name}
      image={char.image}
      descrip={char.description}
    />
  ));
  return (
    <div className={classes.big}>
      <h1 className={classes.head}>The Show Character's</h1>

      <CharacterList >
        <div className={classes.colomn}>
        {characterList}
        </div>
        <Button onClick={props.onLook}>more details</Button>
      </CharacterList>
  
     
    </div>
  );
};

export default Character;