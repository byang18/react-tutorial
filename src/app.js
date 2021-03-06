import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeEditor from './code_editor';
import FilesBar from './files_bar';
import ErrorBoundary from './error_boundary';
import LevelIndicator from './level_indicator';
import ToDoApp from './todo_app/todo_app';
import levels from './code_levels/levels';
import { processCode } from './util/code_processing';

class App extends Component {
  constructor(props) {
    super(props);
    const testLevel = levels.length - 1;

    this.state = {
      processedAppCode: '',
      selectedOption: 'app',
      // isHome: true,
      // currentLevelIndex: 0,
      // appCode: levels[0].appCode,
      // itemCode: levels[0].itemCode,
      // addBarCode: levels[0].addBarCode,

      isHome: false,
      currentLevelIndex: testLevel,
      appCode: levels[testLevel].appCode,
      itemCode: levels[testLevel].itemCode,
      addBarCode: levels[testLevel].addBarCode,
    };
  }

  changeLevel = (page) => {
    const index = page - 1;
    if (index === 0) {
      this.handleHomeChange();
    } else {
      this.setState({
        isHome: false,
        processedAppCode: '',
        selectedOption: 'app',
        currentLevelIndex: index,
        appCode: levels[index].appCode,
        itemCode: levels[index].itemCode,
        addBarCode: levels[index].addBarCode,
      });
    }
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

  handleHomeChange = () => {
    this.setState({ isHome: true, currentLevelIndex: 0 });
  }

  handleSubmit = () => {
    const { appCode, itemCode, addBarCode } = this.state;
    // console.log('pressed!');
    const processedAppCode = processCode(appCode, itemCode, addBarCode);
    this.setState({ processedAppCode });
  }

  renderPanes = () => {
    const { isHome } = this.state;
    if (!isHome) {
      const {
        selectedOption,
        currentLevelIndex,
        appCode,
        itemCode,
        addBarCode,
        processedAppCode,
      } = this.state;
      return (
        <div className="flex-row">
          <div className="middle-pane">
            <FilesBar
              currentLevelIndex={currentLevelIndex}
              selectedOption={selectedOption}
              handleOptionChange={this.handleOptionChange}
            />
            <CodeEditor
              currentLevelIndex={currentLevelIndex}
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
          <div className="right-pane">
            <ErrorBoundary processedAppCode={processedAppCode} checkAppError={this.checkAppError} />
          </div>
        </div>
      );
    }

    const levelsList = levels
      .map((item, index) => {
        const indexString = (index + 1).toString();
        const itemKey = item.title + indexString;
        return (
          <li className="levels-list-item" key={itemKey} onClick={() => this.changeLevel(index + 1)}> {indexString} - {item.title} </li>
        );
      })
      .filter((_, index) => {
        return index !== 0;
      });

    // importing todoApp VIOLATES DRY
    return (
      <div className="flex-row">
        <div className="middle-pane toc">
          <h3>Table of Contents</h3>
          <div id="levels-list">
            {levelsList}
          </div>
        </div>
        <div className="right-pane no-margin-top">
          <h3>Completed To Do App</h3>
          <ToDoApp />
        </div>
      </div>
    );
  }

  renderChallenge = (currentLevelIndex) => {
    if (Object.prototype.hasOwnProperty.call(levels[currentLevelIndex], 'challenge')) {
      return (
        <div className="instructions-challenge">
          <h3>Test Your Knowledge</h3>
          <ReactMarkdown source={levels[currentLevelIndex].challenge} />
        </div>
      );
    }
    return <div />;
  }

  render() {
    const {
      isHome,
      currentLevelIndex,
    } = this.state;

    const pageTitle = isHome ? 'Interactive React Tutorial' : `Interactive React Tutorial - ${levels[currentLevelIndex].title}`;
    return (
      <div id="main-window">
        <div id="header-row">
          <h1>{pageTitle}</h1>
          <div id="level-section" className="flex-row">
            <button type="button" onClick={this.handleHomeChange}>Home</button>
            <LevelIndicator currentLevel={currentLevelIndex + 1} changeLevel={this.changeLevel} />
          </div>
        </div>
        <div id="panes">
          <div id="left-pane">
            <div className="instructions">
              <ReactMarkdown source={levels[currentLevelIndex].instructions} />
              {this.renderChallenge(currentLevelIndex)}
            </div>
          </div>
          {this.renderPanes()}
        </div>
      </div>
    );
  }
}

export default App;
