/*
 * @Descripttion:计时器
 * @Author: luoguoxiong
 * @Date: 2020-06-04 10:38:44
 * @LastEditTime: 2020-06-08 15:07:21
 */

import React from 'react';
import styles from './index.less';
import { secondstoMin } from '@/utils';
class Timeout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.seconds,
    };
  }
  componentDidMount() {
    this.run();
  }
  run() {
    this.timeoutid = setInterval(() => {
      var realTime = this.state.seconds - 1;
      if (realTime >= 0) {
        this.setState({ seconds: realTime });
      } else {
        this.props.onOver();
        this.timeoutid && clearInterval(this.timeoutid);
      }
    }, 1000);
  }
  componentWillUnmount() {
    this.timeoutid && clearInterval(this.timeoutid);
  }
  render() {
    return (
      <div className={styles.timeout}>
        <span className={styles.timeoutName}>{this.props.name}</span>
        <span className={styles.realTime}>{secondstoMin(this.state.seconds)}</span>
      </div>
    );
  }
}
export default Timeout;
