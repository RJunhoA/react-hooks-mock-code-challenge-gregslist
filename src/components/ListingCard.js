import React, {useState, useEffect} from "react";

function ListingCard( {fetch, fetching, setFetch, handleCardDelete} ) {
  const [likeState, setLikeState] = useState(false)
  // const [deleteCard, setDeleteCard] = useState(fetch.id)
  
  const handleLikeClick = () => {
    setLikeState(likeState => !likeState)
  }

  // const idFunction = (e) => {
  //   console.log(fetch.id)
  // }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={fetch.image} alt={fetch.name} />
      </div>
      <div className="details">
        {likeState ? (
          <button onClick= {handleLikeClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick= {handleLikeClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{fetch.description}</strong>
        <span> · {fetch.location}</span>
        <button onClick={handleCardDelete}className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
