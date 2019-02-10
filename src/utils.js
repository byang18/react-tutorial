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

const babelOptions = {
  presets: ['react', 'es2017'],
};

const emptyAppCode = `
const App = () => {
    return <div></div>;
  };
`;

const emptyItemCode = `const ToDoItem = () => {
    return <div></div>;
};`;

export const runCode = (appCode, itemCode) => {
  // const component = `
  // const App = () => {
  //     return <div>All the React are belong to us!</div>;
  //   };
  // `;

  // const component = `
  // class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       code: 'Hi',
  //     };
  //   }
  //
  //   render() {
  //     return (
  //         <div>
  //             <div>All the React Belong to Us!</div>
  //             <div>{this.state.code}</div>
  //         </div>
  //     );
  //   }
  // }
  // `;

  const appComponent = appCode === '' ? emptyAppCode : appCode;
  const itemComponent = itemCode === '' ? emptyItemCode : itemCode;

  try {
    const appBabelCode = babel.transform(appComponent, babelOptions).code;
    const appBabelCodeCleaned = appBabelCode.replace('"use strict";', '').trim();

    const itemBabelCode = babel.transform(itemComponent, babelOptions).code;
    const itemBabelCodeCleaned = itemBabelCode.replace('"use strict";', '').trim();

    const codeString = `
    ${itemBabelCodeCleaned}\n
    ${appBabelCodeCleaned}\n
    return App;`;

    const func = new Function('React', codeString);
    const ToDoApp = func(React);
    console.log(ToDoApp);
    return <ToDoApp />;
    // render(<TodoApp />, document.getElementById('todo-container'));
  } catch (err) {
    console.log(err);
    const errorBox = (
      <div className="errorBox">
        <div>
          {err.name}
        </div>
        <div>
          {err.message}
        </div>
      </div>
    );

    return errorBox;
  }
};
