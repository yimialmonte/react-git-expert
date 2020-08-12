import React, { useEffect, useState } from 'react';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=Lebron&limit=10&api_key=2LFC22cPjAEgBWlUXVXdCbAaQbORCyOL';
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((item) => ({
      id: item.id,
      title: item.title,
      url: item?.images.downsized_medium.url,
    }));
    setImages(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>
      <ol>
        {images.map(({id, title}) => (
          <li key={id}>
            {title}
          </li>
        ))}
      </ol>
    </div>
  );
};
