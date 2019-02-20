/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { runCode } from './util/code_processing';
// import ThemeContext from './util/theme_context';

// this is the higher order component
// const ToDoContainer = (props) => {
//   const { app } = props;
//   const ToDoApp = runCode(app);
//
//   const getPropsFromComponents = (componentName, componentProps) => {
//     console.log(componentName, componentProps);
//   };
//
//   return (
//     <div id="todo-container">
//       <ToDoApp getPropsFromComponents={getPropsFromComponents} />
//     </div>
//   );
// };

// this is the higher order component
class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      ToDoItem: [],
    };
    this.getPropsFromComponents = this.getPropsFromComponents.bind(this);
  }

  getPropsFromComponents(componentName, componentProps) {
    console.log(componentName, componentProps);
    // this.setState((state) => {
    //   const oldList = [...this.state[componentName]];
    //   const updatedList = [...oldList, componentProps];
    //   return {
    //     [componentName]: updatedList,
    //   };
    // });
  }

  render() {
    const { app } = this.props;
    const ToDoApp = runCode(app);

    return (
      <div id="todo-container">
        <ToDoApp getPropsFromComponents={this.getPropsFromComponents} />
      </div>
    );
  }
}

export default ToDoContainer;
