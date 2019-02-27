/* eslint-disable react/jsx-one-expression-per-line, prefer-destructuring */

import React from 'react';
import Tree from 'react-d3-tree';
import { PROP_NODE_SHAPE, COMPONENT_NODE_SHAPE } from './util/constants';

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
    return (
      {
        // name: "componentItem.componentName",
        name: 'Props',
        attributes: cleanedComponentProps,
        nodeSvgShape: PROP_NODE_SHAPE,
        children: [
          {
            name: componentItem.componentName,
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
