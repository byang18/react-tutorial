// const babel = require('babel-core').transform('code');

export const add = (x, y) => {
  return x + y;
};

export const mutiply = (x, y) => {
  return x * y;
};


export const runCode = () => {
//   const code = `import React from 'react';
// import ReactDOM from 'react-dom';
//
// const App = () => {
//   return <div>All the React are belong to us!</div>;
// };
//
// ReactDOM.render(<App />, document.getElementById('main'));`;

  const code = "document.getElementById('todo-container').innerHTML = 'hello!'";

  // const jsCode = babel.transform(code);
  eval(code);
};
