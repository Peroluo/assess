/*
 * @Descripttion: 状态按钮
 * @Author: luoguoxiong
 * @Date: 2020-06-15 17:50:34
 * @LastEditTime: 2020-06-15 18:23:28
 */
import React from 'react';
import styles from './index.less';
import classnames from 'classnames';
// 0已完成、1进行中、2待开始、3开始诊断
function StatusButton({ type = 3 }) {
  return (
    <div
      className={classnames(
        {
          [styles.statusButton]: true,
        },
        [styles.complete, styles.running, styles.watting, styles.start][type],
      )}
    >
      {['已完成', '进行中', '待开始', '开始诊断'][type]}
    </div>
  );
}

export default StatusButton;
