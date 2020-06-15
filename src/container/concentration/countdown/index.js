/*
 * @Descripttion:专注力倒计时
 * @Author: luoguoxiong
 * @Date: 2020-06-03 14:12:34
 * @LastEditTime: 2020-06-08 15:07:46
 */

import React from 'react';
import Modal from '@/component/Modal';
import css from './index.less';
class Countdown extends React.Component {
  state = {
    count: 3,
  };
  componentWillReceiveProps(props) {
    if (props.visable) {
      this.run();
    }
  }
  run() {
    let count = 3;
    this.setState({ count });
    const id = setInterval(() => {
      count -= 1;
      if (count > 0) {
        this.setState({
          count,
        });
      } else {
        this.props.onBegin && this.props.onBegin();
        clearInterval(id);
      }
    }, 1000);
  }
  render() {
    const { visable } = this.props;
    const { count } = this.state;
    return (
      <Modal visable={visable}>
        <div className={css.count}>{count}</div>
      </Modal>
    );
  }
}
export default Countdown;
