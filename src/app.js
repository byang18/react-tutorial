/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import CodeEditor from './code_editor';
import FilesBar from './files_bar';
import * as utils from './utils';
// import ToDoApp from './todo_app/todo_app';

// evaluate whether we need a class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'app',
      appCode:
`const App = () => {
    return <div>All the React are belong to us!</div>;
};`,
      itemCode: `
const ToDoItem = (props) => {
  const { item, selectItem } = props;
  const onClickItem = () => {
    selectItem(item);
  };
  return <li onClick={onClickItem}>{item}</li>;
};
`,
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleAppCode = this.handleAppCode.bind(this);
    this.handleTodoItemCode = this.handleTodoItemCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOptionChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  handleAppCode = (appCode) => {
    this.setState({ appCode });
  }

  handleTodoItemCode = (itemCode) => {
    this.setState({ itemCode });
  }

  handleSubmit = () => {
    const { appCode } = this.state;
    console.log(appCode);
    utils.runCode(appCode);
  }

  render() {
    const {
      selectedOption,
      appCode,
      itemCode,
    } = this.state;

    return (
      <div id="main-window">
        <div id="left-pane">
          <h1>Interactive React Tutorial</h1>
          <FilesBar
            handleOptionChange={this.handleOptionChange}
            selectedOption={selectedOption}
          />
          <CodeEditor
            selectedOption={selectedOption}
            appCode={appCode}
            itemCode={itemCode}
            handleAppCode={this.handleAppCode}
            handleTodoItemCode={this.handleTodoItemCode}
          />
          <div id="code-editor-buttons" className="flex-end">
            <button
              id="compile-button"
              type="submit"
              onClick={this.handleSubmit}
            >
              Compile
            </button>
          </div>
        </div>
        <div id="right-pane">
          <div id="todo-container">
            {'<ToDoApp />'}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
