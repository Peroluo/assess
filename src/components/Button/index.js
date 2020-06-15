import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
const Button = ({ type = 'primary', size = 'default', children, disabled = false, onClick }) => {
  return (
    <div
      className={classNames({
        [styles.primaryButton]: type === 'primary' ? true : false,
        [styles.planeButton]: type !== 'primary' ? true : false,
        [styles.disabled]: disabled,
        [styles.smallSize]: size === 'sm',
        [styles.largeSize]: size === 'lg',
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
