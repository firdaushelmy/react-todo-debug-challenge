import React, { useState } from 'react';
import uuid from 'react-uuid';
import ToDoItem from './ToDoItem';
import InputArea from './InputArea';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText('');
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <InputArea />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={uuid}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
              handleChange={handleChange}
              addItem={addItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
