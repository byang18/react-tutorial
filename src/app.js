import React, { Component } from 'react';
import CodeEditor from './code_editor';
import FilesBar from './files_bar';
import ErrorBoundary from './error_boundary';
import LevelIndicator from './level_indicator';
import levels from './code_levels/levels';
import { processCode } from './util/code_processing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processedAppCode: '',
      selectedOption: 'app',
      // is this the best way to do this?
      title: levels[0].title,
      levelInstructions: levels[0].instructions,
      appCode: levels[0].appCode,
      itemCode: levels[0].itemCode,
      addBarCode: levels[0].addBarCode,
    };

    this.changeLevel = this.changeLevel.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleAppCode = this.handleAppCode.bind(this);
    this.handleTodoItemCode = this.handleTodoItemCode.bind(this);
    this.handleAddBarCode = this.handleAddBarCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkAppError = this.checkAppError.bind(this);
  }

  changeLevel = (page) => {
    const index = page - 1;
    this.setState({
      processedAppCode: '',
      selectedOption: 'app',
      title: levels[index].title,
      levelInstructions: levels[index].instructions,
      appCode: levels[index].appCode,
      itemCode: levels[index].itemCode,
      addBarCode: levels[index].addBarCode,
    });
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
      title,
      levelInstructions,
      appCode,
      itemCode,
      addBarCode,
      processedAppCode,
    } = this.state;

    return (
      <div id="main-window">
        <div id="header-row">
          <h1>Interactive React Tutorial - {title}</h1>
          <div id="level-section" className="flex-row">
            <button type="button">Contents</button>
            <LevelIndicator changeLevel={this.changeLevel} />
          </div>
        </div>
        <div id="panes">
          <div id="left-pane">
            <div className="instructions">
              {levelInstructions}
            </div>
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
