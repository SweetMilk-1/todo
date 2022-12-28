import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemPanel from '../add-item-form';

import './app.css';


export default class App extends Component {

  maxId = 1;

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  state = {
    search: '',
    filter: 'all',
    todoData : [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ]
  };

    changeFilter = (filter) => {
        this.setState({
          filter: filter
        });
    }

    changeSearch = (str) => {
      this.setState({
        search:str
      });
    }

    deleteItem = (id) => {
      this.setState( ({ todoData }) => {
      
        const idx =todoData.findIndex((el)=> el.id===id )
        const newTodoData = [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1) 
        ];
        return {
          todoData: newTodoData
        }
      });
    }

    addItem = (label) => {
      this.setState(( {todoData} ) => {
        const maxId = todoData.reduce((mx, {id}) => {
          return Math.max(mx, id)
        }, 0);

        const newItem = this.createTodoItem(label);

        return {
          todoData: [...todoData, newItem]
        }
      })
    }

    changeProperty = (arr, id, propName) => {

        const idx =arr.findIndex((el)=> el.id===id );
        const oldItem = arr[idx];

        const newItem = {
          ...oldItem, 
          [propName]: !oldItem[propName]
        };

        return [
          ...arr.slice(0, idx),
          newItem,
          ...arr.slice(idx + 1)  
        ];
    }

    changeDone = (id) => {
      this.setState(({todoData}) => {
        const newTodoData = this.changeProperty(todoData, id, "done");
        return {
          todoData: newTodoData
        };
      });
    };

    changeImportant = (id) => {
      this.setState(({todoData}) => {
        const newTodoData = this.changeProperty(todoData, id, "important");
        return {
          todoData: newTodoData
        };
      });
    };

    filterTodoData = ({todoData, search, filter}) => {
      return todoData
      .filter((el) => {
        if (filter === 'all')
          return true;
        if (filter === 'active' && !el.done || filter === 'done' && el.done)
          return true;
        return false;
        })
      .filter((el) => el.label.toUpperCase().includes(search.toUpperCase()));
    } 

  render() {

    const {filter} = this.state;

    const todos = this.filterTodoData(this.state)
    
    const doneCount = todos.filter((item) => item.done).length;
    const todoCount = todos.length - doneCount;
    
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} /> 
        <div className="top-panel d-flex">
          <SearchPanel onChangeSearch={this.changeSearch}/>
          <ItemStatusFilter selected={filter} onChangeFilter={this.changeFilter}/>
        </div>
  
        <TodoList 
          todos={todos}
          onDeleted={this.deleteItem} 
          onToggleDone={this.changeDone}
          onToggleImportant={this.changeImportant}/>
        <AddItemPanel onAdded={this.addItem}/>
      </div>
    );
  }
}