/*
 * @Descripttion:记忆力公共框
 * @Author: luoguoxiong
 * @Date: 2020-06-04 09:59:31
 * @LastEditTime: 2020-06-08 15:07:31
 */

import React from 'react';
import css from './index.less';

function Wrap({ title, children }) {
  return (
    <div className={css.wrap}>
      <div className={css.title}>{title}</div>
      <div className={css.content}>{children}</div>
    </div>
  );
}
export default Wrap;
