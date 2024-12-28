import { useEffect, useState } from 'react'
import Card from "./components/Card"

function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [maxCard, setMaxCard] = useState(200);
  const [cardList, setCardList] = useState([]);
  const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
  useEffect(()=>{
    let newCards = [];
    let newCard;
    for (let i = 0; i<maxCard; i++) {
        let ranNum = Math.floor(Math.random()*151+1);
        let pokeData = fetch(pokeAPI+ranNum)
        .then(response => response.json())
        .then(data => {
          let isDup = false;
          
          newCard = {
            name: data.name.slice(0,1).toUpperCase()+data.name.slice(1, data.name.length),
            src: data.sprites.front_default,
            type: data.types[0].type.name, //first type listed
          }
          for (let j = 0; j<newCards.length;j++) {
            if (newCards[j].name == newCard.name) {
              isDup = true;
              i--;
              break;
            }
          }
          if (isDup == false) {
            newCards.push(newCard);
          }
        })
        .then(()=>{
          setCardList(newCards);
          console.log(newCards.length)
        })
        .catch(error => console.error('Error:', error));
    }
  }, [])
  return (
    <>
      <div className="cardDiv">{cardList.map((card, index)=>(<Card name={card.name} src={card.src}></Card>))}</div>
    </>
  )
}

export default App
