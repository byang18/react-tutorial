import React from 'react';
import levels from './code_levels/levels';

const FilesBar = (props) => {
  const { currentLevelIndex, handleOptionChange, selectedOption } = props;

  const handleChange = (event) => {
    handleOptionChange(event.target.value);
  };

  const renderItemOption = () => {
    if (levels[currentLevelIndex].showItemFile) {
      return (
        <div className="files-option">
          <label htmlFor="files">
                todo_item.js
            <input
              type="radio"
              name="files"
              value="todo_item"
              checked={selectedOption === 'todo_item'}
              onChange={handleChange}
            />
          </label>
        </div>
      );
    }
    return <div />;
  };

  const renderAddBarOption = () => {
    if (levels[currentLevelIndex].showAddBarFile) {
      return (
        <div className="files-option">
          <label htmlFor="files">
                    add_bar.js
            <input
              type="radio"
              name="files"
              value="add_bar"
              checked={selectedOption === 'add_bar'}
              onChange={handleChange}
            />
          </label>
        </div>
      );
    }
    return <div />;
  };

  return (
    <form id="files-bar">
      <div className="files-option">
        <label htmlFor="files">
            app.js
          <input
            type="radio"
            name="files"
            value="app"
            checked={selectedOption === 'app'}
            onChange={handleChange}
          />
        </label>
      </div>
      {renderItemOption()}
      {renderAddBarOption()}
    </form>
  );
};

export default FilesBar;
