import React , { useState } from 'react'

function TodoList() {

    const [todos, setTodos] = useState([
        { text: "Eat", date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() },
        { text: "Sleep", date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() },
        { text: "Code", date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() }
    ]);
    const [newTodo, setNewTodo] = useState("");


    function handleInputChange(event) {
        setNewTodo(event.target.value);

    }

    function handleAddTodo() {  
        if(newTodo.trim() !== "") {
            setTodos(t => [...t, { text: newTodo, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() }]);
            setNewTodo("");
        }
    }

    function handleDeleteTodo(index) {
        if(window.confirm('Do You want delete this task? Sure ')){
            const updatedTodos = todos.filter((_, i) => i !== index);
            setTodos(updatedTodos);
        }
    }

    function handleMoveUp(index) {
        if(index >0){
            if(window.confirm('Do You want move up this task? Sure ')){
            const updatedTodos = [...todos];
            [updatedTodos[index - 1], updatedTodos[index]] = [updatedTodos[index], updatedTodos[index - 1]];
            setTodos(updatedTodos);
        }
    }


    }

    function handleMoveDown(index) {

        if(index < todos.length - 1){
            if(window.confirm('Do You want move down this task? Sure ')){
            const updatedTodos = [...todos];
            [updatedTodos[index], updatedTodos[index + 1]] = [updatedTodos[index + 1], updatedTodos[index]];
            setTodos(updatedTodos);
        }
    }
    }

    
  return (
    <div className='todo-list'>
      <h2>Todo - List</h2>

      <div>
        <input
            type="text"
            placeholder='Enter a task .....'
            value={newTodo}
            onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}
         className='add-button'>
            Add
        </button>
      </div>
      <ol>
        {todos.map((todo, index) =>{
            return(
                <li key={index}>
                    <span className='text'>{todo.text}</span>
                    <span className='date'> ({todo.date} {todo.time})</span>
                    <button 
                        className='delete-button'
                        onClick={() => handleDeleteTodo(index)}
                    >
                        Delete
                    </button>

                    <button 
                        className='move-button'
                        onClick={() => handleMoveUp(index)}
                    >
                        UP👆
                    </button>

                    <button 
                        className='down-button'
                        onClick={() => handleMoveDown(index)}
                    >
                        DOWN👇
                    </button>
                </li>
            )
        })}

      </ol>
    </div>
  )
}

export default TodoList
