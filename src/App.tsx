import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { ITodo } from './types/data'; 
import TodoList from './components/TodoList';

import './App.css';
import Description from './components/Description';

const App: React.FC = () => {

const [value, setValue] = useState('');
const [todos, setTodos] = useState<ITodo[]>([]);

const inputRef = useRef<HTMLInputElement>(null);


const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  setValue(e.target.value);
}

const hendleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
  if(e.key === 'Enter')
  addTodo();
}

const addTodo = () => {
  if(value){
     setTodos([...todos, {
    id: Date.now(),
    title: value,
    complete: false,
  }])
  setValue('');
  console.log(value);
  }
}

const removeTodo = (id: number): void =>{
  setTodos(todos.filter(todo => todo.id !== id))
}

const toggleTodo = (id: number): void => {
  setTodos(todos.map(todo => {
    if(todo.id !== id) return todo;

    return {
      ...todo,
      complete: !todo.complete
    }
  }))
}

useEffect(() => {
  if(inputRef.current) inputRef.current.focus();
},[]);

  return (
    <div className="App">
      <div>
        <input 
        value={value}
        ref={inputRef}
        onKeyDown={hendleKeyDown}
        onChange={handleChange}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <hr/>
      <div>
        <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
      </div>
      <hr/>
      <Description/>
    </div>
    
  );
}

export default App;
