/* eslint-disable no-useless-escape */

import React from 'react';
import AceEditor from 'react-ace';

const CodeEditor = (props) => {
  const { appVisible, appCode, handleAppCode } = props;

  const handleChange = (value) => {
    handleAppCode(value);
  };

  if (appVisible) {
    return (
      <div>
        <AceEditor
          mode="javascript"
          value={appCode}
          onChange={handleChange}
          wrapEnabled
        />
      </div>
    );
  }
  return (
    <div>error</div>
  );
};

// class AppCodeEditor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value:
//       `const App = () => {
//     return <div>All the React are belong to us!</div>;
// };
//       `,
//       // `// import React from 'react';
//       // // import ReactDOM from 'react-dom';
//       //
//       // const App = () => {
//       //   return <div>All the React are belong to us!</div>;
//       // };
//       //
//       // // ReactDOM.render(<App />, document.getElementById('main'));`,
//     };
//   }
//
//   handleChange = (value) => {
//     this.setState({ value });
//     const { handleAppCode } = this.props;
//     handleAppCode(value);
//   }
//
//   render() {
//     const { value } = this.state;
//     return (
//       <div>
//         <AceEditor
//           mode="javascript"
//           value={value}
//           onChange={this.handleChange}
//           wrapEnabled
//         />
//       </div>
//     );
//   }
// }

export default CodeEditor;
