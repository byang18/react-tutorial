export const ACE_EDITOR_THEME = 'kuroir';

export const IMPORT_REACT_TEXT = 'import React from \'react\';\n';
export const IMPORT_ITEM_TEXT = 'import ToDoItem from \'./todo_item\';\n';
export const IMPORT_ADD_BAR_TEXT = 'import AddBar from \'./add_bar\';\n';

export const EXPORT_APP_TEXT = 'export default App;';
export const EXPORT_ITEM_TEXT = 'export default ToDoItem;';
export const EXPORT_ADD_BAR_TEXT = 'export default AddBar;';

export const ACE_EDITOR_OPTIONS = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
};

export const COMPONENT_NODE_SHAPE = {
  shape: 'circle',
  shapeProps: {
    r: 10,
    fill: 'black',
  },
};

export const PROP_NODE_SHAPE = {
  shape: 'rect',
  shapeProps: {
    width: 0,
    height: 0,
    x: -10,
    y: -10,
    fill: 'none',
  },
};

export const SHOW_GUTTER = false;

export const EMPTY_APP_CODE = `
const App = () => {
    return <div></div>;
  };
`;

export const EMPTY_ITEM_CODE = `
const ToDoItem = () => {
    return <div></div>;
};`;

export const EMPTY_ADD_BAR_CODE = `
const AddBar = () => {
    return <div></div>;
};
`;

export const WRAPPED_COMPONENT_CODE = `
const wrappedComponent = (WrappedComponent, componentName) => {
        return class extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    wrappedComponentNumber: wrappedComponentCount
                }

                wrappedComponentCount += 1;

            }

            componentDidMount() {
                const { getPropsFromComponents } = this.props;
                const { wrappedComponentNumber } = this.state;
                console.log(wrappedComponentNumber);
                const cleanProps = Object.assign({}, this.props);
                delete cleanProps.getPropsFromComponents;
                getPropsFromComponents(componentName, cleanProps);
            }

            componentWillUnmount() {
                console.log("unmounted");
            }

            // processStateComponents = (ref) => {
            //     if (ref) {
            //         const { getStateFromComponents } = this.props;
            //         getStateFromComponents(componentName, ref.state);
            //     }
            // }

            render() {
                // return <WrappedComponent ref={this.processStateComponents} {...this.props} />
                return <WrappedComponent {...this.props} />
            }
        };
}
`;

export const WRAPPED_APP_CODE = `
const wrappedApp = (WrappedApp) => {
    const DummyApp = (props) => {
        return <WrappedApp {...props} />;
    };
    return DummyApp;
}
`;
