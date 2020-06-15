import React from 'react';
import styles from './index.less';
function DdWrap({ children }) {
  return (
    <div className={styles.ddWrap}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default DdWrap;
