import React from 'react';
import CodeEditor from './code_editor';
import ToDoApp from './todo_app';

const App = () => {
  return (
    <div id="main-window">
      <div id="left-pane">
        <h1>Interactive React Tutorial</h1>
        <CodeEditor />
      </div>
      <div id="right-pane">
        <ToDoApp />
      </div>
    </div>
  );
};

export default App;

// import React from 'react';
//
// const App = () => {
//   return (
//     <div id="main-window"> Hello World!</div>
//   );
// };
//
// export default App;
