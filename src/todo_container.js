import React from 'react';
import { runCode } from './util/code_processing';
// import ThemeContext from './util/theme_context';

// this is the higher order component
const ToDoContainer = (props) => {
  const { app } = props;
  const ToDoApp = runCode(app);

  return (
    <div id="todo-container">
      <ToDoApp hello="hi" />
    </div>
  );
};

// this is the higher order component
// class ToDoContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       myProps: [],
//     };
//   }
//
//   getAppStateAndProps(myProps) {
//     console.log(myProps);
//     this.setState({ myProps });
//   }
//
//   render() {
//     const { app } = this.props;
//     const ToDoApp = runCode(app);
//
//     return (
//       <div id="todo-container">
//         <ToDoApp hello="hi" />
//       </div>
//     );
//   }
// }

export default ToDoContainer;
