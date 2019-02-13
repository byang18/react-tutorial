/* eslint-disable no-useless-constructor, react/prefer-stateless-function */
import React, { Component } from 'react';
import { runCode } from './utils';

// this is the higher order component
class ToDoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { app } = this.props;
    const ToDoApp = runCode(app);

    return (
      <div id="todo-container">
        <ToDoApp test="hi" />
      </div>
    );
  }
}

export default ToDoContainer;
