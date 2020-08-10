import React, { useState } from 'react';
import AddCategory from './components/CategoyApp';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch',
    'Samuarai',
    'Dragon Ball',
  ]);

  const hanldedAdd = (newOne) => {
    setCategories(prev => [...prev, newOne])
  }

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
      <ol>
        {categories.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
