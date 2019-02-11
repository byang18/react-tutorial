/* eslint-disable react/prefer-stateless-function */

const wrappedComponent = (WrappedComponent) => {
  console.log('get here');
  const Foo = (props) => {
    console.log(props);
    return props;
  };
  return Foo;
};

export default wrappedComponent;
