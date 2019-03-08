/* eslint-disable max-len */

const levels = [
  {
    title: 'Table of Contents',
    instructions: 'Welcome to the interactive React Tutorial! The goal is this tutorial is to get you up to speed with the basic principles of React (components, state, and props).\n\nThis tutorial assumes you have basic knowledge of Javascript (we will be using ES6 syntax), HTML/CSS.\n\nYou can skip ahead by clicking on the links associated in the Table of Contents.\n\nTo the far right is the completed "To Do" app. This is what you will be creating!\n\n**Content for this tutorial was adapted from Tim Tregubov\'s CS 52 class at Dartmouth College as well as the official React documentation.',
    // dummy code in case?
    appCode: `const App = () => {
      return <div>The react belong to us!</div>
  }`,
    itemCode: '',
    addBarCode: '',
    showImportReact: false,
    showItemFile: false,
    showAddBarFile: false,
  },
  {
    title: 'Introduction to JSX, Elements, and Components',
    instructions: 'Elements are the building blocks of React. An element describes what you want to see on the screen using **JSX syntax**. JSX syntax looks like HTML, but you can think of it as an add-on to Javascript that makes it easier to describe what you want rendered on the screen.\n\nA webapp built in React is composed of many components, which in return are composed of React element(s). In React, components are actually just functions. They accept inputs (called props--which we will go over in a later section), and return React elements to be displayed.\n\nThe preset code to the right defines a component `App` that takes in no parameters and returns an element. Go ahead and change the text inside the `<h1>` tag and press *Compile* to see the `<h1>`tag render.\n\n*Note: The arrow function syntax is Javascript ES6. The commented out function underneath is ES5. The analogous codes are equivalent, which you can test if you uncomment the bottom code and comment out the top code. For the remainder of the tutorial, all code shown will be in ES6.*',
    appCode: `// the variable "element" describes an <h1> tag that renders "Hello World!"
const element = <h1>Hello World!</h1>;

// this is a component
const App = () => {
    return element;
}

// function App() {
//     return element;
// }`,
    itemCode: '',
    addBarCode: '',
    showImportReact: true,
    showItemFile: false,
    showAddBarFile: false,
  },
  {
    title: 'Class-Based Components',
    instructions: 'You can also use an ES6 class to define components. The code to the right, which is a **class-based component**, is equivalent to the code from the previous section, or a **functional component** (commented out under) from a React point of view.\n\nFunctional components typically are faster to render, but there certain clear advantages to using class based components, such as keeping track of a component "state," which will be discussed in the next section.\n\nFor now, don\'t worry about the "Visualization of Props and State" box that pops up. Its purpose will be made clear in later sections.\n\n*In order for the bottom code to work, an import statement such as `import React from \'react\'` would be needed. However, the code editor already imports React when compiling, so "import React" statements are shown purely for your guidance.*',
    appCode: `class App extends React.Component {
    render() {
        return (
            <h1>Hello World!</h1>
            /* Add a subtitle element here! (You may also need to wrap these elements to ensure that only one element is returned) */
        );
    }
}

// const App = () => {
//    return <h1>Hello World!</h1>
// }`,
    challenge: 'Try Adding a Subtitle! Hint: If you encounter errors, know that each react component only returns ONE element!',
    itemCode: '',
    addBarCode: '',
    showImportReact: false,
    showItemFile: false,
    showAddBarFile: false,
  },
  {
    title: 'Props',
    // this is plagiarized
    instructions: 'We previously rendered a React element as \n\n```const element = <h1>Hello World!</h1>;```\n\nHowever, React elements could also represent user-defined components, for example:\n\n```const element = <Item item="Study" />```\n\nOf course, in order for this to be valid, `Item` must be defined in order for the code to compile.\n\nNotice the syntax `item="study"`&mdash;that is **props**! Attributes in JSX are passed in as a *single object*, meaning that a component only accepts a single object as a parameter. Props can then be accessed as attributes of the passed-in object.\n\nFor example, suppose we have a parent component that renders a component, and we would like to pass down the attributes `item` as a string and `forTomorrow` as a boolean:\n\n```<Item item="Study" forTomorrow=false />```\n\nThe "props" object would then be passed down as ```{item: "Study", forTomorrow: false}```.\n\nInside a child component, these attributes could then be accessed as `props.item` and `props.forTomorrow`, for the values `"Study"` and `false` respectively. \n\nAs with any function, theoretically, you can name the "props" parameter any variable name you would like, but we call it "props" by convention.\n\nFinally, note that if you try to render `<div>props.item</div>`, that would literally render "props.item" instead of "Study". In order to render variable names in JSX, they must be wrapped in curly braces, as in `<div>{props.item}</div>`. This lets the JSX parser know it needs to render the contents as Javascript instead of a String (that\'s right!&mdash;you can also write functions within curly braces, which will be explored later in this tutorial.)',
    appCode: `const ToDoItem = (props) => {
    return <div>{props.item}</div>;
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>To-Dos</h3>
                <ToDoItem item="Study" />
                // Try inserting more Items here!
            </div>
        );
    }
}`,
    challenge: 'Let\'s begin creating our app! A to-do list can be represented as a list of "to-dos." So, under the header "To-Dos," try rendering two list items (for example, "Get Haircut" and "Laundry") using the functional component `Item`.\n\nHint: Don\'t worry about looping or anything like that right now. Just try to get three items to render!',
    itemCode: '',
    addBarCode: '',
    showImportReact: false,
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
    showImportReact: false,
    showItemFile: true,
    showAddBarFile: true,
  },
];

export default levels;
