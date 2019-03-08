/* eslint-disable no-unused-vars */
import React from 'react';
import * as babel from 'babel-standalone';
import {
  pipe,
  beginsWith,
} from './helpers';
import {
  EMPTY_APP_CODE,
  EMPTY_ITEM_CODE,
  EMPTY_ADD_BAR_CODE,
  WRAPPED_COMPONENT_CODE,
  WRAPPED_APP_CODE,
} from './constants';


const babelOptions = {
  presets: ['react', 'es2017'],
  plugins: ['transform-class-properties'],
};

const transformCode = (code) => {
  const babelCode = babel.transform(code, babelOptions).code;
  return babelCode.replace('"use strict";', '').trim();
};

const createDummyApp = (code) => {
  const func = new Function('React', code);
  const App = func(React);
  return App;
};

// check if app is functional or class component!!
// can remedy by checking if React.Component exists in the string
// check vulnerabilities with user input (how many edge cases this could produce)
const wrapComponentsInAppCodeString = (appCode) => {
  // look for bugs associated with this
  const appCodeWithWrappedComponents = appCode
    .replace(/\w*(?<!const )ToDoItem/g, 'ToDoItemWrapped getPropsFromComponents={this.props.getPropsFromComponents}')
    .replace(/\w*(?<!const )AddBar/g, 'AddBarWrapped getPropsFromComponents={this.props.getPropsFromComponents} getStateFromComponents={this.props.getStateFromComponents}');

  return appCodeWithWrappedComponents;
};

const appendWrappedComponentToString = (componentCode, componentName) => {
  const addition = `\nconst ${componentName}Wrapped = wrappedComponent(${componentName}, '${componentName}')`;
  return componentCode + addition;
};

const appendWrappedAppToString = (appCode) => {
  const addition = `${WRAPPED_APP_CODE}\nconst WrappedApp = wrappedApp(App)`;
  return appCode + addition;
};

export const processCode = (appCode, itemCode, addBarCode) => {
  try {
    // test for empty strings
    const addBarComponent = addBarCode === '' ? EMPTY_ADD_BAR_CODE : addBarCode;
    const itemComponent = itemCode === '' ? EMPTY_ITEM_CODE : itemCode;
    const appComponent = appCode === '' ? EMPTY_APP_CODE : appCode;

    // adjust strings for wrapping
    const appCodeCleaned = pipe(
      wrapComponentsInAppCodeString,
      appendWrappedAppToString,
      transformCode,
    )(appComponent);

    const itemCodeCleaned = pipe(
      appendWrappedComponentToString,
      transformCode,
    )(itemComponent, 'ToDoItem');

    const addBarCodeCleaned = pipe(
      appendWrappedComponentToString,
      transformCode,
    )(addBarComponent, 'AddBar');

    // const themeContextCodeCleaned = transformCode(DEFINE_THEME_CONTEXT);

    const wrappedComponentCleaned = transformCode(WRAPPED_COMPONENT_CODE);

    const cleanedCode = `
          let wrappedComponentCount = 0;
          ${wrappedComponentCleaned}\n
          ${itemCodeCleaned}\n
          ${addBarCodeCleaned}\n
          ${appCodeCleaned}\n
          return WrappedApp;`;
    console.log(cleanedCode);

    return cleanedCode;
  } catch (err) {
    return `${err.name}: ${err.message}`;
  }
};

export const runCode = (codeString) => {
  let code = codeString;
  // console.log('run code');

  if (codeString === '') {
    code = processCode(EMPTY_APP_CODE, EMPTY_ITEM_CODE, EMPTY_ADD_BAR_CODE);

    // might not be the cleanest way to do this
  } else if (beginsWith('SyntaxError', code)) {
    throw new Error(code);
  }

  return createDummyApp(code);
};
