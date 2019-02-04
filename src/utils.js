/* eslint-disable no-unused-vars */

import * as babel from 'babel-standalone';
import React from 'react';
import { render } from 'react-dom';

export const add = (x, y) => {
  return x + y;
};

export const mutiply = (x, y) => {
  return x * y;
};


export const runCode = () => {
  const component = `
  const App = () => {
      return <div>All the React are belong to us!</div>;
    };`;

  const babelCode = babel.transform(component, { presets: ['react', 'es2017'] }).code;
  const code = babelCode.replace('"use strict";', '').trim();
  const newCode = `${code} \n return App;`;
  console.log(newCode);
  const func = new Function('React', `${code}\nreturn App;`);

  // const App = () => {
  //   return React.createElement(
  //     'div',
  //     null,
  //     'All the React are belong to us!',
  //   );
  // };

  // return function App() {
  //   return React.createElement(
  //     'div',
  //     null,
  //     'All the React are belong to us!',
  //   );
  // };

  const App = func(React);
  render(<App />, document.getElementById('todo-container'));

  // const code = "document.getElementById('todo-container').innerHTML = 'hello!'";

  // const jsCode = babel.transform(code);
};
