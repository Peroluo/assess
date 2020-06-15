/*
 * @Descripttion: 超时弹窗
 * @Author: luoguoxiong
 * @Date: 2020-06-08 12:19:40
 * @LastEditTime: 2020-06-10 14:37:41
 */
import React from 'react';
import ModalComfirm from '@/component/ModalComfirm';
import { produce } from 'immer';

export default class ModalTimeout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeouts: props.timeouts || 3,
    };
  }
  // 如果初次渲染就展示，开始倒计时
  componentDidMount() {
    if (this.props.visable) {
      this.startTimeout();
    }
  }

  // 当接收到新的viseable
  componentWillReceiveProps(props) {
    if (props.visable) {
      this.setState(
        produce((state) => {
          state.timeouts = props.timeouts || 3;
        }),
        () => {
          this.startTimeout();
        },
      );
    }
  }

  // 关闭弹窗
  onClick = () => {
    const { onClose } = this.props;
    this.timer && clearInterval(this.timer);
    onClose && onClose();
  };

  // 开始计时
  startTimeout = () => {
    this.timer = setInterval(() => {
      if (this.state.timeouts > 0) {
        this.setState(
          produce((state) => {
            state.timeouts = state.timeouts - 1;
          }),
        );
      } else {
        clearInterval(this.timer);
        this.props.onClose && this.props.onClose();
      }
    }, 1000);
  };

  render() {
    const { visable = false, title = '剩余答题时间为 0' } = this.props;
    const { timeouts } = this.state;
    return (
      <ModalComfirm
        visable={visable}
        title={title}
        btnList={[
          {
            text: `自动提交答案 (${timeouts}s)`,
            textColor: '#44B979',
            onClick: this.onClick,
          },
        ]}
      ></ModalComfirm>
    );
  }
}
