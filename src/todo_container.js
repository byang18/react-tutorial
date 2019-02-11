import React, { Component } from 'react';

class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      prevApp: null,
      errorMsg: '',
    };
  }

  // this is not the recommended method
  static getDerivedStateFromProps(props, state) {
    if (props.app !== state.prevApp) {
      return {
        prevApp: props.app,
        hasError: false,
      };
    }
    return null;
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidUpdate(prevProps, prevState) {
    const { hasError } = this.state;

    if (!hasError) {
      const { checkAppError } = this.props;
      checkAppError(false);
    }
  }

  componentDidCatch(error, info) {
    const { checkAppError } = this.props;
    checkAppError(true);

    // You can also log the error to an error reporting service
    this.setState({ errorMsg: `${error.name}: ${error.message}` });
  }

  render() {
    const { errorMsg, hasError } = this.state;
    const { app } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div className="errorBox">
          <div>
            {errorMsg}
          </div>
        </div>
      );
    }

    return (
      <div id="todo-container">
        {app}
      </div>
    );
  }
}

export default ToDoContainer;
