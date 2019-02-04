/* eslint-disable no-unused-vars */

import * as babel from 'babel-standalone';
import React from 'react';
import { render } from 'react-dom';
// import * as babel from '@babel/core';

export const add = (x, y) => {
  return x + y;
};

export const mutiply = (x, y) => {
  return x * y;
};

export const runCode = (editorCode) => {
  // const component = `
  // const App = () => {
  //     return <div>All the React are belong to us!</div>;
  //   };
  // `;

  const component = `
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        code: 'Hi',
      };
    }

    render() {
      return (
          <div>
              <div>All the React Belong to Us!</div>
              <div>{this.state.code}</div>
          </div>
      );
    }
  }
  `;

  // const component = editorCode;
  const babelCode = babel.transform(component, {
    presets: ['react', 'es2017'],
  }).code;
  const code = babelCode.replace('"use strict";', '').trim();
  console.log(code);

  const func = new Function('React', `${code}\nreturn App;`);

  console.log(func);

  const App = func(React);
  render(<App />, document.getElementById('todo-container'));

  // const code = "document.getElementById('todo-container').innerHTML = 'hello!'";

  // const jsCode = babel.transform(code);
};
