export const ACE_EDITOR_THEME = 'kuroir';
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
      selectedItem: ''
    };

    this.selectItem = this.selectItem.bind(this);
  }

  selectItem = (selectedItem) => {
    this.setState({ selectedItem });
  }

  render() {
    const { toDoList, selectedItem } = this.state;
    const toDoListItems = toDoList.map((item, index) => {
      const itemKey = index.toString() + item;
      const indexString = index.toString();
      return (
        <ToDoItem key={itemKey} item={item} selectItem={this.selectItem} />
      );
    });

    return (
      <div>
        <h3>To Do App!</h3>
        <div id="selected-item-row">
          <div>Currently: </div>
          <div id="selected-item">{selectedItem}</div>
        </div>
        <div id="todo-items">
          {toDoListItems}
        </div>
      </div>
    );
  }
}`;

// export const DUMMY_APP_CODE = `class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toDoList: ['Study', 'Get Haircut', 'Laundry'],
//     };
//   }
//
//   render() {
//     const { toDoList } = this.state;
//     const toDoListItems = toDoList.map((item, index) => {
//       const itemKey = index.toString() + item;
//       return (
//         <ToDoItem key={itemKey} item={item} />
//       );
//     });
//
//     return (
//       <div>
//         <div>All the React Belong to Us!</div>
//         <div id="todo-items">
//           {toDoListItems}
//         </div>
//       </div>
//     );
//   }
// }`;

export const DUMMY_ITEM_CODE = `const ToDoItem = (props) => {
  const { item, selectItem } = props;
  const onClickItem = () => {
    selectItem(item);
  };
  return <li onClick={onClickItem}>{item}</li>;
};`;

export const WRAPPED_COMPONENT_CODE = `const wrappedComponent = (WrappedComponent, componentName) => {
  const DummyComponent = (props) => {
    const cleanProps = Object.assign({}, props);
    delete cleanProps.getPropsFromComponents;
    props.getPropsFromComponents(componentName, cleanProps);
    return <WrappedComponent {...props} />;
  };
  return DummyComponent;
};`;

export const WRAPPED_APP_CODE = `
const wrappedApp = (WrappedApp) => {
    const DummyApp = (props) => {
        console.log('dummy app');
        console.log(props);
        return <WrappedApp {...props} />;
    };
    return DummyApp;
}
`;

export const DEFINE_THEME_CONTEXT = 'const ThemeContext = React.createContext(null);';

// export const WRAPPED_COMPONENT_CODE = `const wrappedComponent = (WrappedComponent, componentName) => {
//   const DummyComponent = (props) => {
//     console.log(componentName);
//     console.log(props);
//     return <WrappedComponent {...props} />;
//   };
//   return DummyComponent;
// };`;
