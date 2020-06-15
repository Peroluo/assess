/*
 * @Descripttion: 进度条
 * @Author: luoguoxiong
 * @Date: 2020-06-09 14:20:14
 * @LastEditTime: 2020-06-09 15:18:59
 */

import React from 'react';
import css from './index.less';
export default ({ value, total }) => {
  const percent = ((value / total) * 100).toFixed(2) + '%';
  return (
    <div className={css.progress}>
      <div className={css.progressVal} style={{ width: percent }}></div>
    </div>
  );
};
