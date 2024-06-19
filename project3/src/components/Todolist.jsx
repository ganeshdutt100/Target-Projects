import React, { useState } from "react";

export const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

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


//   function editing todolist
    const startEditing = (index) =>{
        setEditingIndex(index);
        setEditingText(todos[index]);
    }

    // function save
    const saveEdit =(index) =>{
    const newTodos = [...todos];
    newTodos[index] = editingText;


    setTodos(newTodos);
    setEditingIndex(null);
    setEditingText("");
    }


    // function cancel
    const cancelEdit =()=>{
        setEditingIndex(null);
        setEditingText("");
    }


    // function event
    const handleKeyPress =(e)=>{
       if(e.key === "Enter"){
        addTodo();
       }
    }


//  save edit options
const saveKeyPress =(e)=>{
  if(e.key === "Enter"){
    saveEdit();
  }
}

  return (
    <div className="text-center mt-5">
      <h1>Todo List </h1>
      <input
        type="text"
        // onKeyPress={handleKeyPress}
        onKeyDown={handleKeyPress}
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Enter your task here.."
      />
      <button className="btn btn-success ms-2" onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo, index) => <li key={index}>
            

        {editingIndex === index ? (
                   <>
                   <input type="text" onKeyDown={saveKeyPress} value={editingText}  onChange={(e)=> setEditingText(e.target.value)} />
                   <button className="btn btn-primary" onClick={()=> saveEdit(index)}>save</button>
                   <button className="btn btn-danger" onClick={()=>cancelEdit(index)}>Cancel</button>
                    </>
            ):(
               <>
                {todo} <button className="btn btn-danger" onClick={removeTodo}>Remove</button>
                <button className="btn btn-warning" onClick={()=> startEditing(index)} >Edit</button> </>
            )
        
        
        }
            
            
           
        
        </li>)}
      </ul>
    </div>
  );
};
