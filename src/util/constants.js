export const ACE_EDITOR_THEME = 'kuroir';
export const IMPORT_APP_TEXT = 'import React from `react`;\nimport ToDoItem from \'./todo_item\';\nimport AddBar from \'./add_bar\';\n';
export const EXPORT_APP_TEXT = 'export default App;';
export const EXPORT_ITEM_TEXT = 'export default ToDoItem;';
export const EXPORT_ADD_BAR_TEXT = 'export default AddBar;';
export const ACE_EDITOR_OPTIONS = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
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
            }

            componentDidMount() {
                console.log("mounted");
                const { getPropsFromComponents } = this.props;
                const cleanProps = Object.assign({}, this.props);
                delete cleanProps.getPropsFromComponents;
                getPropsFromComponents(componentName, cleanProps);
            }

            componentWillUnmount() {
                console.log("unmounted");
            }

            render() {
                return <WrappedComponent {...this.props} />
            }
        };
}
`;

export const WRAPPED_APP_CODE = `
const wrappedApp = (WrappedApp) => {
    const DummyApp = (props) => {
        console.log('dummy app');
        console.log(props);
        return <WrappedApp {...props} />;
    };
    return DummyApp;
}
`;
