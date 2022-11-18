import CharacterRoot from "../UI/character-root";
import classes from "./allcharacters.module.css";
import Rhaenyra from "../posters/Rhaenyra.jpg";
import Alicent from "../posters/alicent.jpg";
import Daemon from "../posters/DaemonTargaryen.jpg";
import Otto from "../posters/OttoHightower.jpg";
import Viserys from "../posters/ViserysTargaryen.jpg";
import CristonCole from "../posters/SerCristonCole.jpg";
import Rhaenys from "../posters/RhaenysTargaryen.jpg";
import Corlys from "../posters/CorlysVelaryon.jpg";
import Mysaria from "../posters/Mysaria.jpg";
import AllcharacterItem from "./allcharacter-item";

const All_info = [
  {
    id: 1,
    name: "Rhaenyra",
    image: Rhaenyra,
    description:
      "Princess Rhaenyra Targaryen, cheered as the Realm's Delight when she was young and later called the Half-Year Queen,[1] was the first-born child of King Viserys I Targaryen. Rhaenyra was King Viserys I's only living child by his first wife, Queen Aemma of House Arryn. At the age of eight, she was made her father's heir and grew up expecting to become the first ruling Queen of Westeros. Rhaenyra was a dragonrider whose mount was Syrax.[1][4] Her claim to the Iron Throne was challenged by her younger half-brother, Aegon II Targaryen sparking the civil war known as the Dance of the Dragons. She was the mother of two kings,5 Aegon III and Viserys II.Rhaenyra's personal sigil was the normal Targaryen heraldry a three-headed red dragon on a black field, quartered with the moon-and-falcon sigil of House Arryn for her mother Aemma Arryn, and the silver seahorse on sea green of House Velaryon for her first husband Laenor Velaryon, as well as for the Velaryons in general, who were among her major supporters. During the Dance, her faction used her personal heraldry as their battle-flag. In the television adaptation House of the Dragon Rhaenyra is portrayed by Emma D'Arcy and Milly Alcock young.",
  },
  {
    id: 2,
    name: "Alicent",
    image: Alicent,
    description:
      "Alicent Hightower was a member of House Hightower who became the second wife to King Viserys I Targaryen. She was the daughter of Ser Otto Hightower, who had been Hand of the King to Jaehaerys I, Viserys I, and later his grandson Aegon II. She was the mother of King Aegon II, Queen Helaena, Prince Aemond and Prince Daeron."},
{
    id: 3,
    name: "Daemon",
    image: Daemon,
    description:
"    Prince Daemon Targaryen was a member of House Targaryen, being a younger son of Prince Baelon Targaryen and a brother of King Viserys I Targaryen. Daemon was the second husband of Rhaenyra Targaryen, Princess of Dragonstone, following Ser Laenor Velaryon.[1] Daemon was the most experienced warrior of his time and wielded the Valyrian steel blade Dark Sister. A dragonrider whose dragon was Caraxes, Daemon declared himself the King of the Stepstones and the Narrow Sea.[1] During the Dance of the Dragons, he was a prominent supporter of his wife, Rhaenyra.[4] Much of Daemon's life was written about by Archmaester Gyldayn in The Rogue Prince, or, A King's Brother.[5][2] "},
{
    id: 4,
    name: "OttoHightower",
    image: Otto,
    description:
" Ser Otto Hightower was a knight from House Hightower who served as Hand of the King to three kings, although two of the kings removed him from office at various times.[4] He was the younger brother of Lord Hightower,[1] and the uncle of Lord Ormund Hightower of Oldtown.[5] His children included Alicent Hightower, the second queen of King Viserys I Targaryen, and Ser Gwayne Hightower, second in command of the gold cloaks.[6] Otto is remembered as a warning that knowledge is not everything.[7] "},
{
    id: 5,
    name: "Viserys",
    image: Viserys,
    description:
      "Viserys I Targaryen was the fifth Targaryen king to sit the Iron Throne,[4] ruling from 103 AC to 129 AC. He succeeded his grandfather, the Old King Jaehaerys I. Viserys continued the prosperous peace and legacy of his grandsire, but the seeds for the civil war known as the Dance of the Dragons that would much later engulf the realm were inadvertently sown in his reign.[2] Viserys was a dragonrider who rode Balerion until the dragon died of old age during the reign of Jaehaerys I. Viserys never bonded with another dragon after Balerion's death.[5]  "},
{
    id: 6,
    name: "Criston Cole",
    image: CristonCole,
    description:
"    Ser Criston Cole was a knight from House Cole who rose to become Lord Commander of the Kingsguard for Viserys I Targaryen.[4] His relationship with Viserys's daughter, Princess Rhaenyra Targaryen, was first friendly and then adversarial.[4] Criston convinced Viserys's son, Prince Aegon the Elder, to claim the rule of the Seven Kingdoms as his father lay dead. This led to the Dance of the Dragons, a civil war between Aegon II and his elder half-sister, Rhaenyra, whom Viserys had long groomed as his successor. For this the knight became known as Criston the Kingmaker.[3] Criston also served as Hand of the King for Aegon II during part of the war.[5]"},
{
    id: 7,
    name: "Rhaenys Targaryen",
    image: Rhaenys,
    description:
"    Princess Rhaenys Targaryen, known as the Queen Who Never Was,[5] was the daughter of Prince Aemon Targaryen and Lady Jocelyn Baratheon. She was married to Lord Corlys Velaryon of Driftmark. She was a dragonrider whose dragon was Meleys, the Red Queen.[3]  "},
{
    id: 8,
    name: "Corlys Velaryon",
    image: Corlys,
    description:
    "Corlys Velaryon, known as the Sea Snake, was a fabled Lord of the Tides, Master of Driftmark, and head of House Velaryon.[6] He was the husband of Princess Rhaenys Targaryen. During the Dance of the Dragons, he became Hand to Queen Rhaenyra Targaryen. Ser Corlys became head of House Velaryon and Lord of the Tides after the death of his grandsire. Richer than Lords Lannister or Hightower through his expeditions, Lord Corlys used his great wealth to construct a new seat, High Tide,[12] where he stored his eastern treasures. The towns of Hull and Spicetown sprang up and drew trade away from King's Landing.[8]"}, 
{
    id: 9,
    name: "Mysaria",
    image: Mysaria,
    description:
      "Mysaria, also called Lady Misery, was a dancer from Lys who became the paramour of Prince Daemon Targaryen and the unofficial mistress of whisperers to Queen Rhaenyra Targaryen during the Dance of the Dragons.[1] During the Dance of the Dragons, Prince Daemon Targaryen desired revenge for the death of his stepson, Prince Lucerys Velaryon. With a pale stranger used as a go-between, two assassins, Blood and Cheese, infiltrated the Red Keep and killed Prince Jaehaerys Targaryen, the eldest son of King Aegon II Targaryen. Under torture, Blood admitted that he had been hired by a pale older woman called Misery by harlots. The gold cloaks were unable to find Mysaria or Cheese, however."
}];

const AllCharacters = (props) => {
  const allcharacterList = All_info.map((chars) => (
    <AllcharacterItem
      key={chars.id}
      name={chars.name}
      image={chars.image}
      description={chars.description}
    />
  ));

  return (
    <CharacterRoot>
      <h1 onClick={props.onCancel} className={classes.close}>
        x
      </h1>
      <div className={classes.characters}>{allcharacterList}</div>
    </CharacterRoot>
  );
};

export default AllCharacters;
