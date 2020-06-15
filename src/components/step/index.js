import React from 'react';
import styles from './index.less';
class Step extends React.Component {
  render() {
    let step = this.props.step;
    return (
      <div id={styles.step}>
        <div className={step > 0 ? styles.stepItemActive : styles.stepItem}>1.自由记忆</div>
        <div className={styles.stepline}>······</div>
        <div className={step > 1 ? styles.stepItemActive : styles.stepItem}>2.顺序记忆</div>
        <div className={styles.stepline}>······</div>
        <div className={step > 2 ? styles.stepItemActive : styles.stepItem}>3.空间位置记忆</div>
      </div>
    );
  }
}
export default Step;
