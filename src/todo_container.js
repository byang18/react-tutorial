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
      prevApp: props.app,
      componentPropsState: [],
    };
    this.getPropsFromComponents = this.getPropsFromComponents.bind(this);
  }

  // might be redundant/could be simplified
  static getDerivedStateFromProps(props, state) {
    if (props.app !== state.prevApp) {
      return {
        prevApp: props.app,
        componentPropsState: [],
      };
    } else {
      return {
        count: 0,
      };
    }
  }

  // this could cause edge case problems
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.app !== this.state.prevApp) {
      return true;
    }
    if (this.state !== nextState) {
      return false;
    }
    return true;
  }

  getPropsFromComponents(componentName, componentProps) {
    console.log(componentName, componentProps);
    this.setState((state) => {
      const newState = [...state.componentPropsState, { componentName, componentProps }];
      return {
        componentPropsState: newState,
        count: state.count + 1,
      };
    });
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
