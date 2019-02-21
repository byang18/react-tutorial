/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import Visualization from './visualization';
import { runCode } from './util/code_processing';

// this is the higher order component

/*
    - do not change the state if the app code is the same
*/

class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevApp: props.app,
      componentPropsState: [],
    };
    this.getPropsFromComponents = this.getPropsFromComponents.bind(this);
  }

  componentDidMount() {
    console.log('mounted in todocontainer');
  }

  // might be redundant/could be simplified
  // examine other errors
  static getDerivedStateFromProps(props, state) {
    // case where the previous app differed from the app passing in (new code)
    if (props.app !== state.prevApp) {
      return {
        prevApp: props.app,
        componentPropsState: [],
      };
    }
    // case where the app hasn't changed, so want to reset the componentPropsState or not let it update?
    return null;
  }

  // this could cause edge case problems

  // the component SHOULD update when componentsPropsState is "full"
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.app !== this.state.prevApp) {
      return true;
    }
    console.log(nextState);
    if (this.state !== nextState) {
      return false;
    }
    return true;
  }

  // there needs to be some sort of if statement here selectively updating the state-- that would also get ride of the shouldComponentUpdate bug
  getPropsFromComponents(componentName, componentProps) {
    console.log(componentName, componentProps);
    this.setState((state) => {
      const newState = [...state.componentPropsState, { componentName, componentProps }];
      return {
        componentPropsState: newState,
      };
    });
  }

  render() {
    // const { app } = this.props;
    const { prevApp, componentPropsState } = this.state;
    const ToDoApp = runCode(prevApp); // only runcode if the app changes

    return (
      <div>
        <div id="todo-container">
          <ToDoApp getPropsFromComponents={this.getPropsFromComponents} />
        </div>
        <div id="visulization-container">
          <Visualization componentPropsState={componentPropsState} />
        </div>
      </div>
    );
  }
}

export default ToDoContainer;
