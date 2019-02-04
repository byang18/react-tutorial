/* eslint-disable no-useless-escape */

import React, { Component } from 'react';
import AceEditor from 'react-ace';

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:
      `const App = () => {
    return <div>All the React are belong to us!</div>;
};
      `,
      // `// import React from 'react';
      // // import ReactDOM from 'react-dom';
      //
      // const App = () => {
      //   return <div>All the React are belong to us!</div>;
      // };
      //
      // // ReactDOM.render(<App />, document.getElementById('main'));`,
    };
  }

  handleChange = value => this.setState({ value })

  handleSubmit = () => {
    const { value } = this.state;
    const { handleSubmitCode } = this.props;
    handleSubmitCode(value);
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <AceEditor
          mode="javascript"
          value={value}
          onChange={this.handleChange}
          wrapEnabled
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
    );
  }
}

export default CodeEditor;
