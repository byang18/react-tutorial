import React from 'react';

const FilesBar = (props) => {
  const { handleOptionChange, selectedOption } = props;

  const handleChange = (event) => {
    handleOptionChange(event.target.value);
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
    </form>
  );
};

export default FilesBar;
