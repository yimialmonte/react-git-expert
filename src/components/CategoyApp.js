import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoyApp = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 1) {
      setCategories((prev) => [...prev, inputValue]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  );
};

CategoyApp.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default CategoyApp;
