/* disable-eslint */

import React, { Component } from 'react';
import ToDoItem from './todo_item';

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ['Study', 'Get Haircut', 'Laundry'],
      selectedItem: 'Laundry',
    };
  }

  render() {
    const { toDoList, selectedItem } = this.state;
    const toDoListItems = toDoList.map((item, index) => {
      const itemKey = index.toString() + item;
      return (
        <ToDoItem key={itemKey} item={item} selectItem={this.selectItem} />
      );
    });

    return (
      <div id="todo-app">
        <h3>To-Dos</h3>
        <div id="selected-item-row">
          <div>Currently: </div>
          <div id="selected-item">{selectedItem}</div>
        </div>
        <AddBar addItem={this.addItem} />
      </div>
    );
  }
}
