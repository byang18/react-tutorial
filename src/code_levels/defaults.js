// export const DUMMY_APP_CODE = `class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toDoList: ['Study', 'Get Haircut', 'Laundry'],
//       selectedItem: ''
//     };
//
//     this.selectItem = this.selectItem.bind(this);
//   }
//
//   selectItem = (selectedItem) => {
//     this.setState({ selectedItem });
//   }
//
//   render() {
//     const { toDoList, selectedItem } = this.state;
//     const toDoListItems = toDoList.map((item, index) => {
//       const itemKey = index.toString() + item;
//       const indexString = index.toString();
//       return (
//         <ToDoItem key={itemKey} item={item} selectItem={this.selectItem} />
//       );
//     });
//
//     return (
//       <div>
//         <h3>To Do App!</h3>
//         <div id="selected-item-row">
//           <div>Currently: </div>
//           <div id="selected-item">{selectedItem}</div>
//         </div>
//         <div id="todo-items">
//           {toDoListItems}
//         </div>
//       </div>
//     );
//   }
// }`;

export const DUMMY_APP_CODE = `class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ['Study', 'Get Haircut', 'Laundry'],
      selectedItem: '',
    };
    this.addItem = this.addItem.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem = (selectedItem) => {
    this.setState({ selectedItem });
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
        <div id="todo-items">
          {toDoListItems}
        </div>
      </div>
    );
  }
}`;

export const DUMMY_ITEM_CODE = `const ToDoItem = (props) => {
  const { item, selectItem } = props;
  const onClickItem = () => {
    selectItem(item);
  };
  return <li onClick={onClickItem}>{item}</li>;
};`;

export const DUMMY_ADD_BAR_CODE = `class AddBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  submitItem = () => {
    const { value } = this.state;
    const { addItem } = this.props;
    addItem(value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <div id="add-bar">
        <input onChange={this.handleChange} value={value} />
        <button
          id="todo-button"
          type="submit"
          onClick={this.submitItem}
        >
        +
        </button>
      </div>
    );
  }
}
`;
