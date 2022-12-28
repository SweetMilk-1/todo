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
    todoData : [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ]
  };


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

  render() {

    const {todoData} = this.state;
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;
    
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} /> 
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={todoData} 
          onDeleted={this.deleteItem} 
          onToggleDone={this.changeDone}
          onToggleImportant={this.changeImportant}/>
        <AddItemPanel onAdded={this.addItem}/>
      </div>
    );
  }
}