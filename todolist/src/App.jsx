import { useState, useEffect } from 'react'
import InputTodo from './components/InputTodo'
import TodoCard from './components/TodoCard'
import AddButton from './components/AddButton'
import './App.css'


function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState('');
  
  const setInputVar = (value) => {
    setInput(value);
  }
  const addTodo = () => {
    setTodos([...todos, input]);
    localStorage.setItem('todos', JSON.stringify([...todos]));
    setInput('');
  }
  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);

    }
  return (
    <>
      <div>
        <h1>Todo App</h1>
        <div className='input-with-add'>
          <InputTodo onInputChange={setInputVar}/>
          <AddButton handleAdd={addTodo}/>
        </div>
        {todos.map((todo, index)=>{
          return <TodoCard key={index} content={todo} deleteTodo={deleteTodo} index={index}/>
        })}
      </div>
    </>
  )
}

export default App
