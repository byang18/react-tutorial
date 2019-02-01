import React from 'react';
import CodeEditor from './code_editor';
import ToDoApp from './todo_app';

const App = () => {
  return (
    <div id="main-window">
      <div id="left-pane">
        <h1>Interactive React Tutorial</h1>
        <CodeEditor />
        <div id="code-editor-buttons" className="flex-end">
          <button
            id="compile-button"
            type="submit"
          >
          Compile
          </button>
        </div>
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
