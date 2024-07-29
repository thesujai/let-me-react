import { useState, useCallback } from 'react'
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
  const addTodo = useCallback(() => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos, input];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
    setInput('');
  }, [input]);

  const deleteTodo = useCallback((index) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((_, i) => i !== index);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  }, []);
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
