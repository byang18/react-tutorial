export const IMPORT_APP_TEXT = 'import React from `react`;\nimport ToDoItem from \'./todo_item\';\n';
export const EXPORT_APP_TEXT = 'export default App;';
export const EXPORT_ITEM_TEXT = 'export default ToDoItem;';
export const SHOW_GUTTER = false;

export const EMPTY_APP_CODE = `
const App = () => {
    return <div></div>;
  };
`;

export const EMPTY_ITEM_CODE = `const ToDoItem = () => {
    return <div></div>;
};`;

export const DUMMY_APP_CODE = `class App extends React.Component {
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
}`;

export const DUMMY_ITEM_CODE = `const ToDoItem = (props) => {
  const { item } = props;
  return <li>{item}</li>;
}`;

export const WRAPPED_COMPONENT_CODE = `const wrappedComponent = (WrappedComponent) => {
  const DummyComponent = (props) => {
    console.log(props);
    return <WrappedComponent {...props} />;
  };
  return DummyComponent;
};`;
