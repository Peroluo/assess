import React from 'react';
import styles from './index.less';
function More({ isGrey }) {
  if (isGrey) {
    return (
      <div className={styles.moreDetail} style={{ color: '#999' }}>
        详情
        <img src="/images/report/more2.png" alt="" />
      </div>
    );
  }
  return (
    <div className={styles.moreDetail}>
      详情
      <img src="/images/report/more.png" alt="" />
    </div>
  );
}

export default More;
