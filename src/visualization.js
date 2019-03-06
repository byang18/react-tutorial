/* eslint-disable react/jsx-one-expression-per-line, prefer-destructuring */

import React from 'react';
import Tree from 'react-d3-tree';
import { PROP_NODE_SHAPE, COMPONENT_NODE_SHAPE } from './util/constants';

const Visualization = (props) => {
  const { componentPropsState } = props;

  // builds the children of the head node
  const children = componentPropsState.map((componentItem, componentIndex) => {
    const componentProps = componentItem.componentProps;

    const cleanedComponentProps = {};
    const componentPropEntries = Object.entries(componentProps);

    for (const [key, value] of componentPropEntries) {
      let propValue;
      // account for different type of objects that could be passed in as props
      // string, object, array,
      if (typeof (value) === 'string') {
        propValue = `"${value}"`;
      } else if (value instanceof Function) {
        propValue = 'function';
      }
      cleanedComponentProps[key] = propValue;
    }

    const cleanedComponentState = {};
    if (Object.prototype.hasOwnProperty.call(componentItem, 'componentState')) {
      const componentState = componentItem.componentState;
      const componentStateEntries = Object.entries(componentState);

      for (const [key, value] of componentStateEntries) {
        let propValue;
        if (typeof (value) === 'string') {
          propValue = `"${value}"`;
        }
        cleanedComponentState[key] = propValue;
      }
    }

    return (
      {
        name: 'Props',
        attributes: cleanedComponentProps,
        nodeSvgShape: PROP_NODE_SHAPE,
        children: [
          {
            name: componentItem.componentName,
            attributes: cleanedComponentState,
            nodeSvgShape: COMPONENT_NODE_SHAPE,
          },
        ],
      }
    );
  });

  const myTreeData = [
    {
      name: 'App',
      nodeSvgShape: COMPONENT_NODE_SHAPE,
      children,
    },
  ];

  return (
    <div id="tree-wrapper">
      <Tree
        collapsible={false}
        orientation="vertical"
        data={myTreeData}
      />
    </div>
  );
};

export default Visualization;
