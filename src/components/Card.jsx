import "../styles/style.css"

function Card({name, src}) {
  return(
    <>
      <div className="card-bg">
        <div className="poke-img-container">
          <div><img className="poke-img" src={src}></img></div>
        </div>
        <p class="poke-name">{name}</p>
      </div>
    </>
  )
}

export default Card;