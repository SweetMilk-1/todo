import React from 'react';
import ReactDOM from 'react-dom';


import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {
  
  const todoData = [
    {
      id: 0,
      label: 'Drink Coffee',
      important: false
    }, 
    {
      id: 1,
      label: 'Make Awesome App',
      important: true,
    },
    {
      id: 2,
      label: 'Have a lunch',
      important: false,
    }
  ];


  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos={todoData}/>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));