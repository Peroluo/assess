import React from 'react';
import styles from './index.less';
class Poster extends React.Component {
  render() {
    const { type, onClose } = this.props;
    return (
      <div>
        <div className={type === '2' ? styles.poster1 : styles.poster2}></div>
        <div className={styles.btnWrap}>
          <div className={styles.fix}>
            <div
              onClick={() => {
                onClose();
              }}
            >
              开始全面诊断
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Poster;
