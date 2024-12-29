import "../styles/style.css"
import pokeball from "../assets/pokeball.png"
function Card({card, onClick, selectCard, isGameOver}) {
  return(
    <>
      <div onClick={()=>onClick(card)} className={`card-bg ${isGameOver&&card.hasClicked?"gameOverCard": "card"}`}>
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