import React, { Component } from 'react';
import CodeEditor from './code_editor';
import FilesBar from './files_bar';
import ErrorBoundary from './error_boundary';
import {
  DUMMY_APP_CODE,
  DUMMY_ITEM_CODE,
  DUMMY_ADD_BAR_CODE,
} from './code_levels/defaults';
import { processCode } from './util/code_processing';
// import ToDoApp from './todo_app/todo_app';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processedAppCode: '',
      selectedOption: 'app',
      appCode: DUMMY_APP_CODE,
      itemCode: DUMMY_ITEM_CODE,
      addBarCode: DUMMY_ADD_BAR_CODE,
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleAppCode = this.handleAppCode.bind(this);
    this.handleTodoItemCode = this.handleTodoItemCode.bind(this);
    this.handleAddBarCode = this.handleAddBarCode.bind(this);
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

  handleAddBarCode = (addBarCode) => {
    this.setState({ addBarCode });
  }

  handleSubmit = () => {
    const { appCode, itemCode, addBarCode } = this.state;
    console.log('pressed!');
    const processedAppCode = processCode(appCode, itemCode, addBarCode);
    this.setState({ processedAppCode });
  }

  render() {
    const {
      selectedOption,
      appCode,
      itemCode,
      addBarCode,
      processedAppCode,
    } = this.state;

    return (
      <div id="main-window">
        <h1>Interactive React Tutorial</h1>
        <div id="panes">
          <div id="left-pane">
        Welcome to the React tutorial!
          </div>
          <div id="middle-pane">
            <FilesBar
              handleOptionChange={this.handleOptionChange}
              selectedOption={selectedOption}
            />
            <CodeEditor
              selectedOption={selectedOption}
              appCode={appCode}
              itemCode={itemCode}
              addBarCode={addBarCode}
              handleAppCode={this.handleAppCode}
              handleTodoItemCode={this.handleTodoItemCode}
              handleAddBarCode={this.handleAddBarCode}
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
            <ErrorBoundary processedAppCode={processedAppCode} checkAppError={this.checkAppError} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
