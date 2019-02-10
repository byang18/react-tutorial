/* eslint-disable no-useless-escape */

import React from 'react';
import AceEditor from 'react-ace';
import ReadOnlyEditor from './readonly_editor';
import {
  IMPORT_APP_TEXT,
  EXPORT_APP_TEXT,
  EXPORT_ITEM_TEXT,
  SHOW_GUTTER,
} from './constants';

const CodeEditor = (props) => {
  const {
    selectedOption,
    appCode,
    itemCode,
    handleAppCode,
    handleTodoItemCode,
  } = props;

  const handleChange = (value) => {
    if (selectedOption === 'app') handleAppCode(value);
    else if (selectedOption === 'todo_item') handleTodoItemCode(value);
  };

  if (selectedOption === 'app') {
    return (
      <div className="editor">
        <ReadOnlyEditor code={IMPORT_APP_TEXT} />
        <AceEditor
          mode="javascript"
          theme="github"
          value={appCode}
          style={{ background: '#f9f7f0' }}
          showGutter={SHOW_GUTTER}
          onChange={handleChange}
          enableBasicAutocompletion
          wrapEnabled
        />
        <ReadOnlyEditor code={EXPORT_APP_TEXT} />
      </div>
    );
  } else if (selectedOption === 'todo_item') {
    return (
      <div className="editor">
        <AceEditor
          mode="javascript"
          theme="github"
          value={itemCode}
          style={{ background: '#f9f7f0' }}
          showGutter={SHOW_GUTTER}
          onChange={handleChange}
          enableBasicAutocompletion
          wrapEnabled
        />
        <ReadOnlyEditor code={EXPORT_ITEM_TEXT} />
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
