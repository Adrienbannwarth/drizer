import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {

    const data = await fetch(
      'https://api.deezer.com/user/2529/playlists'
    );

    const items = await data.json();
    console.log(data);
    setItems(items.data);
  };

  return (
    <div>
      {items.map(data => (
        <h1 key={data.id}>
          <Link to={`/shop/${data.id}`}>{data.first_name}</Link>
        </h1>
      ))}

    </div>
  );
}

export default Shop;
