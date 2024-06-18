import React, { useState } from "react";

export const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // function to add a new task
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  // function remove
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="text-center mt-5">
      <h1>Todo List </h1>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Enter your task here.."
      />
      <button className="btn btn-success ms-2" onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo, index) => <li>{todo} <button className="btn btn-danger" onClick={removeTodo}>Remove</button><button className="btn btn-warning" >Edit</button> </li>)}
      </ul>
    </div>
  );
};
