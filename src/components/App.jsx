import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputArea from './InputArea';
import ToDoItem from './ToDoItem';

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    if (inputText !== '') {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }
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
      <InputArea addItem={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={uuidv4}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
