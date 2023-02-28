import React, { useState } from "react";

function ListingCard( {fetch} ) {
  const [likeState, setLikeState] = useState(false)
  
  const handleLikeClick = () => {
    setLikeState(likeState => !likeState)
  }

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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
