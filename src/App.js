import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: crypto.randomUUID() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a card choice
  const handleChoice = (card) => {
    if (choiceTwo || card.id === choiceOne?.id) return;

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare the two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      console.log(
        choiceOne.src === choiceTwo.src
          ? "The cards match!"
          : "The cards do not match."
      );
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards, turns, choiceOne, choiceTwo);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
