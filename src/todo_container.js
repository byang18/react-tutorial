/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import Visualization from './visualization';
import { runCode } from './util/code_processing';

// this is the higher order component

/*
    PROBLEMS
    (1) Recursive problem
        -- getPropsFromComponents changes state which triggers a re-wrapComponentsInAppCodeString
        -- current solution is to use shouldComponentUpdate

    (2) Appending problem
        -- Pressing compile will continualy append instead of wiping out
        -- current solution is to use getDerivedStateFromProps to check the state
        -- partial solution is to only run in component will mount. However this is re-run when runCode is executed in render, so moot point

    (3) Update the visualization after the state parses
        -- how to resolve: need to find some sort of condition that checks whether "parsing finishes"

    - do not change the state if the app code is the same
*/

class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    const { processedAppCode } = props;
    const ToDoApp = runCode(processedAppCode);
    this.state = {
      ToDoApp,
      prevAppCode: processedAppCode,
      componentPropsState: [],
    };
  }

  // might be redundant/could be simplified
  // examine other errors
  static getDerivedStateFromProps(props, state) {
    // case where the previous app differed from the app passing in (new code)
    if (props.processedAppCode !== state.prevAppCode) {
      const { processedAppCode } = props;
      const ToDoApp = runCode(processedAppCode);
      return {
        ToDoApp,
        prevAppCode: processedAppCode,
        componentPropsState: [],
      };
    }
    // case where the app hasn't changed, so want to reset the componentPropsState or not let it update?
    return null;
  }

  // this could cause edge case problems

  // the component SHOULD update when componentsPropsState is "full"

  // currently only updates if the next app is different!
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.app !== this.state.prevAppCode) {
  //     return true;
  //   }
  //   return false;
  //   // console.log(nextState);
  //   // if (this.state !== nextState) {
  //   //   return false;
  //   // }
  //   // return false;
  // }

  // there needs to be some sort of if statement here selectively updating the state-- that would also get ride of the shouldComponentUpdate bug
  getPropsFromComponents = (componentName, componentProps) => {
    console.log(componentName, componentProps);
    this.setState((state) => {
      const newState = [...state.componentPropsState, { componentName, componentProps }];
      return {
        componentPropsState: newState,
      };
    });
  }

  renderVisualization = () => {
    const { componentPropsState } = this.state;
    if (componentPropsState.length === 0) {
      return <div />;
    }
    return (
      <div id="visualization-container">
        <h3 className="no-margin">Visualization of Props</h3>
        <div className="tree-flavor-text">Items under each node are PROPS received by the component.</div>
        <Visualization componentPropsState={componentPropsState} />
      </div>
    );
  }

  render() {
    // const { app } = this.props;
    console.log('rendered in todoapp');
    const { ToDoApp } = this.state;
    // const ToDoApp = runCode(prevAppCode); // only runcode if the app changes

    return (
      <div>
        <div id="todo-container">
          <ToDoApp getPropsFromComponents={this.getPropsFromComponents} />
        </div>

        {this.renderVisualization()}

      </div>
    );
  }
}

export default ToDoContainer;
