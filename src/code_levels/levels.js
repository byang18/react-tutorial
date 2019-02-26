/* eslint-disable max-len */

const levels = [
  {
    // 1 is default; this corresponds to index 0
    levelIndex: 1,
    title: 'Introduction',
    instructions: 'Welcome to the interactive React Tutorial! The goal is this tutorial is to get you up to speed with the basic principles of React (components, state, and props).\n\nThis tutorial assumes you have basic knowledge of Javascript (we will be using ES6 syntax), HTML/CSS. We cannot wait to dive right in!',
    appCode: `class App extends React.Component {
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
  },
  {
    levelIndex: 2,
    title: 'Components 1',
    instructions: 'This is a basic component',
    appCode: `const App = () => {
    return <div>The react belong to us!</div>
}`,
    itemCode: '',
    addBarCode: '',
  },
];

export default levels;
