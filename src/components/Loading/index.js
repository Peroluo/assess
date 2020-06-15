import React from 'react';
import styles from './index.less';
function Loading() {
  return (
    <div className={styles.loadingWrap}>
      <img src="/images/loading.gif" alt="" />
    </div>
  );
}
export default Loading;
