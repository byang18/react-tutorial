import React, { Component } from 'react';
import AddBar from './add_bar';

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ['Work on Independent Study', 'Get Haircut'],
      selectedTodo: '',
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem = (value) => {
    this.setState((state) => {
      const { toDoList } = this.state;
      const updatedList = [...toDoList, value];
      return {
        toDoList: updatedList,
      };
    });
  }

  render() {
    const { toDoList, selectedTodo } = this.state;
    const toDoListItems = toDoList.map((item) => {
      return <li key={item}>{item}</li>;
    });

    return (
      <div id="todo-app">
        <h3>To Dos</h3>
        <div>Selected</div>
        <div>{selectedTodo}</div>
        <AddBar addItem={this.addItem} />
        <div id="todo-items">
          {toDoListItems}
        </div>
      </div>
    );
  }
}

export default ToDoApp;
