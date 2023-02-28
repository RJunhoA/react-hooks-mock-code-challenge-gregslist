import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
 
  const [fetching, setFetch] = useState([])


  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(response => response.json())
    .then(setFetch)
  }, [])

  const renderCard = fetching.map((fetch) => 
   <ListingCard key={fetch.id} fetch={fetch}/>
  )

  return (
    <main>
      <ul className="cards">
        {renderCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
