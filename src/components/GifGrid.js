import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { loading, data:images } = useFetchGifs(category);
  return (
    <>
      <h3 className="animate__animated animate__lightSpeedInRight">{category}</h3>
      {loading && <p className="animate__animated animate__bounce"> Cargando ...</p>}
      <div className="card-grid animate__animated animate__fadeInDown">
        {images.map((item) => (
          <GifGridItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
