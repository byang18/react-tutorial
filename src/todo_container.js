import React, { Component } from 'react';
import Visualization from './visualization';
import { runCode } from './util/code_processing';

// this is the higher order component
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

  // there needs to be some sort of if statement here selectively updating the state-- that would also get ride of the shouldComponentUpdate bug
  getPropsFromComponents = (componentName, componentProps) => {
    // console.log(componentName, componentProps);
    this.setState((state) => {
      const { componentPropsState } = state;
      const newState = [...componentPropsState, { componentName, componentProps }];
      return {
        componentPropsState: newState,
      };
    });
  }

  getStateFromComponents = (componentName, componentState) => {
    console.log('getStateFromComponents');
    console.log(componentName, componentState);
  }

  renderVisualization = () => {
    const { componentPropsState } = this.state;
    console.log('componentPropsState', componentPropsState);
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
    const { ToDoApp } = this.state;
    return (
      <div>
        <div id="todo-container">
          <ToDoApp
            getPropsFromComponents={this.getPropsFromComponents}
            getStateFromComponents={this.getStateFromComponents}
          />
        </div>
        {this.renderVisualization()}
      </div>
    );
  }
}

export default ToDoContainer;
