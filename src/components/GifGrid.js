import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=netflix&limit=10&api_key=2LFC22cPjAEgBWlUXVXdCbAaQbORCyOL';
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
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((item) => (
          <GifGridItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
