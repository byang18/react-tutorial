/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import AppCodeEditor from './appcode_editor';
import * as utils from './utils';
// import ToDoApp from './todo_app';

// evaluate whether we need a class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appCode:
        `const App = () => {
      return <div>All the React are belong to us!</div>;
  };
        `,
    };

    this.handleAppCode = this.handleAppCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAppCode = (appCode) => {
    this.setState({ appCode });
  }

  handleSubmit = () => {
    const { appCode } = this.state;
    console.log(appCode);
    utils.runCode(appCode);
  }

  render() {
    const { appCode } = this.state;
    return (
      <div id="main-window">
        <div id="left-pane">
          <h1>Interactive React Tutorial</h1>
          <AppCodeEditor
            appCode={appCode}
            handleAppCode={this.handleAppCode}
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
