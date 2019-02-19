import React from 'react';
import AceEditor from 'react-ace';
import ReadOnlyEditor from './readonly_editor';
import 'brace/mode/javascript';
import 'brace/theme/kuroir';
import 'brace/ext/language_tools';
import {
  IMPORT_APP_TEXT,
  EXPORT_APP_TEXT,
  EXPORT_ITEM_TEXT,
  SHOW_GUTTER,
  ACE_EDITOR_THEME,
} from './util/constants';

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
          theme={ACE_EDITOR_THEME}
          value={appCode}
          style={{ background: '#f9f7f0' }}
          showGutter={SHOW_GUTTER}
          onChange={handleChange}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
          }}
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
          theme={ACE_EDITOR_THEME}
          value={itemCode}
          style={{ background: '#f9f7f0' }}
          showGutter={SHOW_GUTTER}
          onChange={handleChange}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
          }}
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

export default CodeEditor;
