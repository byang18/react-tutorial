/* eslint-disable no-unused-vars */
import React from 'react';
import * as babel from 'babel-standalone';
import {
  EMPTY_APP_CODE,
  EMPTY_ITEM_CODE,
  WRAPPED_COMPONENT_CODE,
} from './constants';

const babelOptions = {
  presets: ['react', 'es2017'],
};

const transformCode = (code) => {
  const babelCode = babel.transform(code, babelOptions).code;
  return babelCode.replace('"use strict";', '').trim();
};

const createErrorCode = (errorMsg) => {
  return `const App = () => {
          return(
              <div className="errorBox">
                <div>
                    ${errorMsg}
                </div>
            </div>
          );
      };`;
};

const createDummyApp = (code) => {
  const func = new Function('React', code);
  const App = func(React);
  return App;
};

export const processCode = (appCode, itemCode) => {
  try {
    const appComponent = appCode === '' ? EMPTY_APP_CODE : appCode;
    const itemComponent = itemCode === '' ? EMPTY_ITEM_CODE : itemCode;


    const appCodeCleaned = transformCode(appComponent);
    const itemCodeCleaned = transformCode(itemComponent);
    const wrappedComponentCleaned = transformCode(WRAPPED_COMPONENT_CODE);

    return `
          ${wrappedComponentCleaned}\n
          ${itemCodeCleaned}\n
          ${appCodeCleaned}\n
          return App;`;
  } catch (err) {
    return createErrorCode(`${err.name}: ${err.message}`);
  }


  // const func = new Function('React', codeString);
  // const ToDoApp = func(React);
  //
  // console.log(<ToDoApp />);
  // return ToDoApp;
  // render(<TodoApp />, document.getElementById('todo-container'));

  // might be obsolete if this fails
};

// const App = () => {
//     return <div></div>;
//   };


export const runCode = (codeString) => {
  // try {
  let code = codeString;

  if (codeString === '') {
    code = processCode(EMPTY_APP_CODE, EMPTY_ITEM_CODE);
  }

  return createDummyApp(code);
  // } catch (err) {
  //   const errorAppCode = createErrorCode(`${err.name}: ${err.message}`);
  //   const code = processCode(errorAppCode, '');
  //   return createDummyApp(code);
  // }
};

// export const runCode = (codeString) => {
//   try {
//     if (codeString === '') {
//       return <div />;
//     }
//
//     const func = new Function('React', codeString);
//     const ToDoApp = func(React);
//     return ToDoApp;
//   } catch (err) {
//     console.log(err);
//     const errMsg = `${err.name}: ${err.message}`;
//     return (
//       <div className="errorBox">
//         <div>
//           {errMsg}
//         </div>
//       </div>
//     );
//   }
// };
