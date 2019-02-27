/* eslint-disable react/jsx-one-expression-per-line, prefer-destructuring */

import React from 'react';
import Tree from 'react-d3-tree';

const Visualization = (props) => {
  const { componentPropsState } = props;
  const children = componentPropsState.map((componentItem, componentIndex) => {
    const componentProps = componentItem.componentProps;

    const cleanedComponentProps = {};
    const componentPropEntries = Object.entries(componentProps);

    for (const [key, value] of componentPropEntries) {
      let propValue;
      // account for different type of objects that could be passed in as props
      if (typeof (value) === 'string') {
        propValue = `"${value}"`;
      } else if (value instanceof Function) {
        propValue = 'function';
      }
      cleanedComponentProps[key] = propValue;
    }

    // const componentPropEntries = Object.entries(componentProps).map((propArray, propIndex) => {
    //   if (propArray.length === 2) {
    //     let propValue;
    //     // account for different type of objects that could be passed in as props
    //     if (typeof (propArray[1]) === 'string') {
    //       propValue = `"${propArray[1]}"`;
    //     } else if (propArray[1] instanceof Function) {
    //       propValue = 'function';
    //     }
    //     // const propArrayKey = propArray[0] + propValue + propIndex.toString();
    //
    //     // return <div key={propArrayKey}>{propArray[0]}: {propValue}</div>;
    //   }
    //   return [];
    // });
    // const propComponentItemKey = componentItem.componentName + componentIndex.toString();

    return (
      {
        name: componentItem.componentName,
        attributes: cleanedComponentProps,
      }
      // <div key={propComponentItemKey} className="prop-component">
      //   ComponentName: {componentItem.componentName}
      //   {componentPropEntries}
      // </div>
    );
  });

  // return (
  //   <div>
  //     { propComponentItems }
  //   </div>
  // );

  const sampleTreeData = [
    {
      name: 'Top Level',
      attributes: {
        keyA: 'val A',
        keyB: 'val B',
        keyC: 'val C',
      },
      children: [
        {
          name: 'Level 2: A',
          attributes: {
            keyA: 'val A',
            keyB: 'val B',
            keyC: 'val C',
          },
        },
        {
          name: 'Level 2: B',
        },
      ],
    },
  ];

  const myTreeData = [
    {
      name: 'App',
      attributes: {},
      children,
    },
  ];

  const options = {
    textAnchor: 'start', x: 10, y: 40, transform: undefined,
  };

  return (
    <div id="tree-wrapper">
      <Tree
        textAnchor={options}
        collapsible={false}
        orientation="vertical"
        data={myTreeData}
      />
    </div>
  );
};

export default Visualization;
