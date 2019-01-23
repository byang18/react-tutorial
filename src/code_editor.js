/* eslint-disable no-useless-escape */

import React, { Component } from 'react';
import AceEditor from 'react-ace';

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:
`import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>All the React are belong to us!</div>;
};

ReactDOM.render(<App />, document.getElementById('main'));`,
    };
  }

  handleChange = value => this.setState({ value })

  render() {
    const { value } = this.state;
    return (
      <AceEditor
        mode="javascript"
        value={value}
        onChange={this.handleChange}
        wrapEnabled
      />
    );
  }
}

export default CodeEditor;
