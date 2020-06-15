import React from 'react';
import styles from './index.less';
function StatusButton({ status, name }) {
  return (
    <div
      className={status === 1 ? styles.complete : status === -1 ? styles.waiting : styles.running}
    >
      {status === 1 ? '已完成' : status === -1 ? `${name ? name : '开始测评'}` : '进行中'}
    </div>
  );
}
export default StatusButton;
