import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputArea({ addItem }) {
  const [inputText, setInputText] = useState('');

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className='form'>
      <input type='text' onChange={handleChange} value={inputText} />
      <button
        type='submit'
        onClick={() => {
          addItem(inputText);
          setInputText('');
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

InputArea.propTypes = {
  addItem: PropTypes.string.isRequired,
};

export default InputArea;
