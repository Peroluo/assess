/*
 * @Descripttion: 按鈕組件
 * @Author: luoguoxiong
 * @Date: 2020-06-05 15:18:21
 * @LastEditTime: 2020-06-09 10:54:45
 */

import React from 'react';
import css from './index.less';
import classnames from 'classnames';
// size:500px;xs:610px;x:550px;m:390px;xm:265px
// type:gloast/default
// height:80/90
export default function Button({
  type = 'btn',
  size = 'default',
  isDisabled = false,
  children = '',
  height = '90px',
  onClick = () => {},
}) {
  const sizes = size === 'default' ? '' : css[size];
  const types = type === 'btn' ? css.btn : css.ghost;
  const className = classnames(types, sizes, {
    [css.disabled]: isDisabled,
    [css.minHe]: height === '80px',
  });
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className={className} onClick={onClick}>
      {children}
    </a>
  );
}
