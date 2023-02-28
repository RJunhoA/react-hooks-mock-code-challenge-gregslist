import React from "react";

function ListingCard( {fetch} ) {
  console.log(fetch)
  return (
    <li className="card" key={fetch.id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={fetch.image} alt={fetch.name} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{fetch.description}</strong>
        <span> · {fetch.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
