/* eslint-disable */
import React from 'react';

const ToDoItem = (props) => {
  const { item } = props;
  return <li>{item}</li>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ['Study', 'Get Haircut', 'Laundry'],
    };
  }

  render() {
    const { toDoList } = this.state;
    const toDoListItems = toDoList.map((item, index) => {
      const itemKey = index.toString() + item;
      return (
        <ToDoItem key={itemKey} item={item} />
      );
    });

    return (
      <div>
        <div>All the React Belong to Us!</div>
        <div id="todo-items">
          {toDoListItems}
        </div>
      </div>
    );
  }
};

const wrappedComponent = (WrappedComponent) => {
  const DummyComponent = (props) => {
    console.log(props);
    return <WrappedComponent {...props} />;
  };
  return DummyComponent;
};
