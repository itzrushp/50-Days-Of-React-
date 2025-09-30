import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const AddTodo = () => {
    setTodos((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h1>Todo List Stuff : </h1>
      <ul>
        {todos.length === 0 && <p>No Todos, Please add some :)</p>}
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>

      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="Enter next thing to do :)"
      />
      <button onClick={AddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
