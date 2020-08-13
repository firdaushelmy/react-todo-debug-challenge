import React from 'react';
import PropTypes from 'prop-types';

function InputArea({ handleChange, inputText, addItem }) {
  return (
    <div className='form'>
      <input onChange={handleChange} type='text' value={inputText} />
      <button type='button' onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

InputArea.propTypes = {
  handleChange: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  addItem: PropTypes.string.isRequired,
};

export default InputArea;
