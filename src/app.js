/* eslint-disable react/no-unused-state , no-unused-vars */

import React, { Component } from 'react';
import CodeEditor from './code_editor';
import * as utils from './utils';
// import ToDoApp from './todo_app';

// evaluate whether we need a class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };

    this.handleSubmitCode = this.handleSubmitCode.bind(this);
  }

  handleSubmitCode = (code) => {
    this.setState({ code });
    utils.runCode(code);
  }

  render() {
    return (
      <div id="main-window">
        <div id="left-pane">
          <h1>Interactive React Tutorial</h1>
          <CodeEditor handleSubmitCode={this.handleSubmitCode} />
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

// import React from 'react';
//
// const App = () => {
//   return (
//     <div id="main-window"> Hello World!</div>
//   );
// };
//
// export default App;
