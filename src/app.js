import React, { Component } from 'react';
import CodeEditor from './code_editor';
import FilesBar from './files_bar';
import ErrorBoundary from './error_boundary';
import { DUMMY_APP_CODE, DUMMY_ITEM_CODE } from './constants';
import { processCode } from './utils';
// import ToDoApp from './todo_app/todo_app';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      app: '',
      selectedOption: 'app',
      appCode: DUMMY_APP_CODE,
      itemCode: DUMMY_ITEM_CODE,
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleAppCode = this.handleAppCode.bind(this);
    this.handleTodoItemCode = this.handleTodoItemCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkAppError = this.checkAppError.bind(this);
  }

  checkAppError = (appError) => {
    if (!appError) {
      console.log('render the tree');
    }
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
    const { appCode, itemCode } = this.state;
    console.log('pressed!');
    const app = processCode(appCode, itemCode);
    this.setState({ app });
  }

  render() {
    const {
      selectedOption,
      appCode,
      itemCode,
      app,
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
          <ErrorBoundary app={app} checkAppError={this.checkAppError} />
        </div>
      </div>
    );
  }
}

export default App;
