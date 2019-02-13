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

export const runCode = (appCode, itemCode) => {
  const appComponent = appCode === '' ? EMPTY_APP_CODE : appCode;
  const itemComponent = itemCode === '' ? EMPTY_ITEM_CODE : itemCode;

  try {
    const appCodeCleaned = transformCode(appComponent);
    const itemCodeCleaned = transformCode(itemComponent);
    const wrappedComponentCleaned = transformCode(WRAPPED_COMPONENT_CODE);

    const codeString = `
    ${wrappedComponentCleaned}\n
    ${itemCodeCleaned}\n
    ${appCodeCleaned}\n
    return App;`;

    const func = new Function('React', codeString);
    const ToDoApp = func(React);
    return <ToDoApp />;
    // render(<TodoApp />, document.getElementById('todo-container'));
  } catch (err) {
    console.log(err);
    const errMsg = `${err.name}: ${err.message}`;
    const errorBox = (
      <div className="errorBox">
        <div>
          {errMsg}
        </div>
      </div>
    );

    return errorBox;
  }
};

export default runCode;
