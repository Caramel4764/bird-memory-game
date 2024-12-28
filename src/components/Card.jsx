import "../styles/style.css"

function Card({card, onClick, selectCard}) {
  return(
    <>
      <div onClick={()=>onClick(card)} className="card-bg">
        <div className="poke-img-container">
          <div><img className="poke-img" src={card.src}></img></div>
        </div>
        <p class="poke-name">{card.name}</p>
      </div>
    </>
  )
}

export default Card;