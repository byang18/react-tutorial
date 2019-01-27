import React from 'react';

const ToDoItem = (props) => {
  const { item, selectItem } = props;
  const onClickItem = () => {
    selectItem(item);
  };
  return <li onClick={onClickItem}>{item}</li>;
};

export default ToDoItem;
