import "../styles/style.css"
import pokeball from "../assets/pokeball.png"
function Card({card, onClick, selectCard, isGameOver}) {
  return(
    <>
      <div onClick={()=>onClick(card)} className={`card-bg ${isGameOver&&card.hasClicked?"gameOverCard": "card"}`}>
        <div className="cardColorDiv">
          <div className="colorDivider">
            <div className={`cardBackColorLeft ${card.type[0].type.name}`}></div>
            <div className={`cardBackColorRight ${card.type[1]?card.type[1].type.name:card.type[0].type.name}`}></div>
          </div>
        </div>
        <div className="poke-img-container">
          <div className="card-img">
            {(isGameOver&&card.hasClicked)&&(
              <div className="poke-captured-img">
              <img src={pokeball}></img>
              </div>
            )}
            <img className="poke-img" src={card.src}></img>
          </div>
        </div>
        <p class="poke-name">{card.name}</p>
      </div>
    </>
  )
}

export default Card;