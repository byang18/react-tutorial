/* eslint-disable react/jsx-one-expression-per-line, prefer-destructuring */

import React from 'react';

const Visualization = (props) => {
  const { componentPropsState } = props;
  const propComponentItems = componentPropsState.map((componentItem, componentIndex) => {
    const componentProps = componentItem.componentProps;
    const componentPropEntries = Object.entries(componentProps).map((propArray, propIndex) => {
      if (propArray.length === 2) {
        let propValue;
        // account for different type of objects that could be passed in as props
        if (typeof (propArray[1]) === 'string') {
          propValue = `"${propArray[1]}"`;
        } else if (propArray[1] instanceof Function) {
          propValue = 'function';
        }
        const propArrayKey = propArray[0] + propValue + propIndex.toString();

        return <div key={propArrayKey}>{propArray[0]}: {propValue}</div>;
      }
      return [];
    });
    const propComponentItemKey = componentItem.componentName + componentIndex.toString();

    return (
      <div key={propComponentItemKey} className="prop-component">
        ComponentName: {componentItem.componentName}
        {componentPropEntries}
      </div>
    );
  });
  return (
    <div>
      { propComponentItems }
    </div>
  );
};

export default Visualization;
