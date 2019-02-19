import React from 'react';
import AceEditor from 'react-ace';
import { SHOW_GUTTER, ACE_EDITOR_THEME } from './util/constants';

const ReadOnlyEditor = (props) => {
  const { code } = props;

  return (
    <div>
      <AceEditor
        mode="javascript"
        theme={ACE_EDITOR_THEME}
        value={code}
        highlightActiveLine={false}
        showGutter={SHOW_GUTTER}
        showLineNumbers={false}
        maxLines={4}
        style={{ color: 'gray', background: '#f9f7f0' }}
        className="readonly-editor"
        readOnly
      />
    </div>
  );
};

export default ReadOnlyEditor;
