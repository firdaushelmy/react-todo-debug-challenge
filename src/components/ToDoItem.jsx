import React from 'react';
import PropTypes from 'prop-types';

function ToDoItem({ onChecked, id, text }) {
  return (
    <div
      role='presentation'
      onKeyDown={() => {
        onChecked(id);
      }}
      onClick={() => {
        onChecked(id);
      }}
    >
      <li>{text}</li>
    </div>
  );
}

ToDoItem.propTypes = {
  onChecked: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ToDoItem;
