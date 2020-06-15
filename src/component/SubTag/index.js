import React from 'react';
import css from './index.less';
function SubTag({ children, color }) {
  return (
    <div className={css.subTag}>
      <span style={{ color: color || '#333' }}>{children}</span>
    </div>
  );
}

export default SubTag;
