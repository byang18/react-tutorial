/* eslint-disable max-len */

const levels = [
  {
    title: 'Table of Contents',
    instructions: 'Welcome to the interactive React Tutorial! The goal is this tutorial is to get you up to speed with the basic principles of React (components, state, and props).\n\nThis tutorial assumes you have basic knowledge of Javascript (we will be using ES6 syntax), HTML/CSS.\n\nYou can skip ahead by clicking on the links associated in the Table of Contents.\n\nTo the far right is the completed \'To Do\' app. This is what you will be creating!',
    // dummy code in case?
    appCode: `const App = () => {
      return <div>The react belong to us!</div>
  }`,
    itemCode: '',
    addBarCode: '',
    showItemFile: false,
    showAddBarFile: false,
  },
  {
    title: 'Introduction to Components',
    instructions: 'This is a basic component',
    appCode: `const App = () => {
      return <div>The react belong to us!</div>
  }`,
    itemCode: '',
    addBarCode: '',
    showItemFile: false,
    showAddBarFile: false,
  },
  {
    title: 'Completed To Do App',
    instructions: 'This is an example of the completed app. \n\nThis page is for testing only.',
    appCode: `class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ['Study', 'Get Haircut', 'Laundry'],
      selectedItem: '',
    };
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
}`,
    itemCode: `const ToDoItem = (props) => {
  const { item, selectItem } = props;
  const onClickItem = () => {
    selectItem(item);
  };
  return <li onClick={onClickItem}>{item}</li>;
};`,
    addBarCode: `class AddBar extends React.Component {
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
`,
    showItemFile: true,
    showAddBarFile: true,
  },
];

export default levels;
