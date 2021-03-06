import React, { Component } from 'react';
import ToDoContainer from './todo_container';

class ErrorBoundary extends Component {
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
    if (props.processedAppCode !== state.prevApp) {
      return {
        prevApp: props.processedAppCode,
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
    const { processedAppCode } = this.props;

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
      <ToDoContainer processedAppCode={processedAppCode} />
    );
  }
}

export default ErrorBoundary;
