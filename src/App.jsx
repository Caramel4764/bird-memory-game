import { useEffect, useState } from 'react'
import Card from "./components/Card"

function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [maxCard, setMaxCard] = useState(8);
  const [cardList, setCardList] = useState([]);
  const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
  useEffect(()=>{
    let newCards = []
    let newCard;
    for (let i = 0; i<maxCard; i++) {
      let ranNum = Math.floor(Math.random()*151+1);
      let pokeData = fetch(pokeAPI+ranNum)
      .then(response => response.json())
      .then(data => {
        newCard = {
          name: data.name,
          src: data.sprites.front_default,
        }
        newCards.push(newCard);
      })
      .then(()=>{
        setCardList(newCards);
      })
      .catch(error => console.error('Error:', error));
    }
  }, [])
  return (
    <>
      {cardList.map((card, index)=>(<Card name={card.name} src={card.src}></Card>))
      }
    </>
  )
}

export default App
