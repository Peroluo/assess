import React from 'react';
import styles from './index.less';

class Pop extends React.Component {
  render() {
    const { title, popClose, btnText, children } = this.props;
    return (
      <div className={styles.pop_wrap}>
        <div className={styles.content}>
          <div className={styles.title}>{title || ''}</div>
          <div className={styles.words}>{children}</div>
          <div className={styles.btn_wrap}>
            <div onClick={popClose}>{btnText || '关闭'}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Pop;
