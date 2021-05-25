import React, { useState } from 'react';
import InputForm from './components/InputForm';
import List from './components/List';
import store from './store';
import { Provider } from 'react-redux';
import uniqid from 'uniqid';

export default function App() {
  const [description, setDescription] = useState('');
  const [list, setList] = useState([]);

  const addTodo = (todo) => {
      setList(list.concat(todo));
    };

  const handleChange = (event) => {
      setDescription(event.target.value);
    };

  const handleSubmit = (event) => {
      event.preventDefault();

  const todo = {
        description: description,
        id: uniqid(),
        completed: false,
      };

      console.log(todo);
      addTodo(todo);
      setDescription('');
    };

const toggleCompleted = (todo) => {
  setList(list.map((td) => {
    if( todo.id === td.id ){
      todo.completed = !td.completed
    }
    return td
  }))
}

  
  const reset = () => {
    setList([])
  }
  return (
    <Provider store={store}>
      <div className='App'>
        <InputForm handleSubmit={handleSubmit} handleChange={handleChange} description={description} />
        <List list={list} reset={reset} toggleCompleted={toggleCompleted}/>
      </div>
    </Provider>
  );
}
