import { useEffect, useState } from 'react'
import Card from "./components/Card"

function App() {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  //max card is 151
  const [maxCard, setMaxCard] = useState(151);
  //151
  const [cardList, setCardList] = useState([]);
  const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
  function checkDupId(list, id) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] == id) {
        return true;
      }
    }
    return false;
  }
  function addPokeCard(pokeIdList) {
    let ranNum = Math.floor(Math.random()*151+1);
    while (checkDupId(pokeIdList, ranNum)) {
      ranNum = Math.floor(Math.random()*151+1);
    }
    pokeIdList.push(ranNum);
  }
  async function getPokeCard(pokeIdList, newCards) {
    for (let i = 0; i<pokeIdList.length; i++) {
    let pokeData = await fetch(pokeAPI+pokeIdList[i])
      .then(response => response.json())
      .then(data => {
        let newCard = {
          cardId: i,
          hasClicked: false,
          name: data.name.slice(0,1).toUpperCase()+data.name.slice(1, data.name.length),
          src: data.sprites.front_default,
          type: data.types[0].type.name, //first type listed
        }
        newCards.push(newCard);
      })
      .then(()=>{
        if (newCards.length==pokeIdList.length) {
          setCardList(newCards);
        }
      })
      .catch(error => console.error('Error:', error));
    }
  }
  useEffect(()=>{
    let newCards = [];
    let pokeIdList = [];
    for (let i = 0; i<maxCard;i++) {
      addPokeCard(pokeIdList);
    } 
    getPokeCard(pokeIdList, newCards);
    /*for (let i = 0; i<maxCard; i++) {
        
        
    }*/
  }, [])
  return (
    <>
      <div className="cardDiv">{cardList.map((card, index)=>(<Card name={card.name} src={card.src}></Card>))}</div>
    </>
  )
}

export default App
