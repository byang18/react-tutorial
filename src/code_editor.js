import React from 'react';
import AceEditor from 'react-ace';
import ReadOnlyEditor from './readonly_editor';
import 'brace/mode/javascript';
import 'brace/theme/kuroir';
import 'brace/ext/language_tools';
import levels from './code_levels/levels';
import { ACE_EDITOR_STYLE } from './styles/style_constants';
import {
  IMPORT_REACT_TEXT,
  IMPORT_ITEM_TEXT,
  IMPORT_ADD_BAR_TEXT,
  EXPORT_APP_TEXT,
  EXPORT_ITEM_TEXT,
  EXPORT_ADD_BAR_TEXT,
  SHOW_GUTTER,
  ACE_EDITOR_THEME,
  ACE_EDITOR_OPTIONS,
} from './util/constants';

const CodeEditor = (props) => {
  const {
    currentLevelIndex,
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

  let appImportText = '';
  if (levels[currentLevelIndex].showImportReact) appImportText += IMPORT_REACT_TEXT;
  if (levels[currentLevelIndex].showItemFile) appImportText += IMPORT_ITEM_TEXT;
  if (levels[currentLevelIndex].showAddBarFile) appImportText += IMPORT_ADD_BAR_TEXT;

  if (selectedOption === 'app') {
    return (
      <div className="editor">
        {appImportText !== '' ? (<ReadOnlyEditor code={appImportText} />) : <div />}
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
        <ReadOnlyEditor code={IMPORT_REACT_TEXT} />
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
        <ReadOnlyEditor code={IMPORT_REACT_TEXT} />
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
