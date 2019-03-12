import React from 'react';

const ToDoItem = (props) => {
  const { item, selectItem } = props;
  const onClickItem = () => {
    selectItem(item);
  };
  return (
    <div className="todo-flex-row">
      <li onClick={onClickItem}>{item}</li>
    </div>
  );
};

export default ToDoItem;
