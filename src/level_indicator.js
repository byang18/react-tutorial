// adapted from boomsync.me

import React from 'react';
import { Pagination } from 'antd';
import levels from './code_levels/levels';

const LevelIndicator = (props) => {
  const total = levels.length * 10;
  const handleChange = (page, pageSize) => {
    props.changeLevel(page);
  };

  const { currentLevel } = props;

  return (
    <Pagination simple current={currentLevel} onChange={handleChange} total={total} />
  );
};

export default LevelIndicator;
