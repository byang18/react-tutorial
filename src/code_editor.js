import React from 'react';
import AceEditor from 'react-ace';
import ReadOnlyEditor from './readonly_editor';
import 'brace/mode/javascript';
import 'brace/theme/kuroir';
import 'brace/ext/language_tools';
import { ACE_EDITOR_STYLE } from './styles/style_constants';
import {
  IMPORT_APP_TEXT,
  EXPORT_APP_TEXT,
  EXPORT_ITEM_TEXT,
  EXPORT_ADD_BAR_TEXT,
  SHOW_GUTTER,
  ACE_EDITOR_THEME,
  ACE_EDITOR_OPTIONS,
} from './util/constants';

const CodeEditor = (props) => {
  const {
    selectedOption,
    appCode,
    itemCode,
    addBarCode,
    handleAppCode,
    handleTodoItemCode,
    handleAddBarCode,
  } = props;

  const handleChange = (value) => {
    if (selectedOption === 'app') handleAppCode(value);
    else if (selectedOption === 'todo_item') handleTodoItemCode(value);
    else if (selectedOption === 'add_bar') handleAddBarCode(value);
  };

  if (selectedOption === 'app') {
    return (
      <div className="editor">
        <ReadOnlyEditor code={IMPORT_APP_TEXT} />
        <AceEditor
          mode="javascript"
          theme={ACE_EDITOR_THEME}
          value={appCode}
          style={ACE_EDITOR_STYLE}
          showGutter={SHOW_GUTTER}
          onChange={handleChange}
          setOptions={ACE_EDITOR_OPTIONS}
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
          style={ACE_EDITOR_STYLE}
          showGutter={SHOW_GUTTER}
          onChange={handleChange}
          setOptions={ACE_EDITOR_OPTIONS}
          wrapEnabled
        />
        <ReadOnlyEditor code={EXPORT_ITEM_TEXT} />
      </div>
    );
  } else if (selectedOption === 'add_bar') {
    return (
      <div className="editor">
        <AceEditor
          mode="javascript"
          theme={ACE_EDITOR_THEME}
          value={addBarCode}
          style={ACE_EDITOR_STYLE}
          showGutter={SHOW_GUTTER}
          onChange={handleChange}
          setOptions={ACE_EDITOR_OPTIONS}
          wrapEnabled
        />
        <ReadOnlyEditor code={EXPORT_ADD_BAR_TEXT} />
      </div>
    );
  }
  return (
    <div>error</div>
  );
};

export default CodeEditor;
