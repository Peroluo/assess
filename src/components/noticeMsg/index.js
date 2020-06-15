import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
class NoticeMsg extends React.Component {
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.title}>规则提醒：</div>
        <div className={styles.body}>
          {this.props.msgList.map(item => {
            return (
              <div className={styles.item} key={item}>
                <div className={styles.circle}></div>
                <div className={styles.msg}>{item}</div>
              </div>
            );
          })}

          <div className={styles.foot}>
            {!(this.props.onlyStartBtn === true) && (
              <div
                className={styles.leftBtn}
                onClick={() => {
                  this.props.toTest();
                }}
              >
                练习
              </div>
            )}

            <div
              className={classNames(styles.rightBtn, {
                [styles.only]: this.props.onlyStartBtn === true,
              })}
              onClick={() => {
                this.props.toPlay();
              }}
            >
              {this.props.isTest ? '开始测评' : '开始诊断'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NoticeMsg;
