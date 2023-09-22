import React, { useState, useEffect } from 'react';

function Memo() {
  // Step 1: Initialize state for todos, count, and memo input
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [memoInput, setMemoInput] = useState('');

  // Step 2: Create a function to add a new todo
  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  // Step 3: Create a function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Step 4: Create a function to handle memo input and add items
  const handleMemoInput = (e) => {
    setMemoInput(e.target.value);
  };

  const addMemoItem = () => {
    if (memoInput.length > 5) {
      setTodos([...todos, memoInput]);
      setMemoInput('');
    } else {
      alert('Text should be greater than 5 characters');
    }
  };

  // Step 5: Render the components with the defined functionality
  return (
    <div>
      <h1>React Memo</h1>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={incrementCount}>Increment Count</button>
      <p>Count: {count}</p>
      <input
        type="text"
        placeholder="Enter memo item"
        value={memoInput}
        onChange={handleMemoInput}
      />
      <button onClick={addMemoItem}>Submit</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Memo;
