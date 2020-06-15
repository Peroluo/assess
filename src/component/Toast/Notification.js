/*
 * @Descripttion: ToastUi
 * @Author: luoguoxiong
 * @Date: 2020-06-08 16:07:28
 * @LastEditTime: 2020-06-09 11:48:25
 */

import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import css from './index.less';
class Notification extends React.Component {
  constructor() {
    super();
    this.transitionTime = 300;
    this.state = { notices: [] };
  }

  getNoticeKey() {
    const { notices } = this.state;
    return `notice-${new Date().getTime()}-${notices.length}`;
  }

  addNotice(notice) {
    const { notices } = this.state;
    notice.key = this.getNoticeKey();
    if (notices.every((item) => item.key !== notice.key)) {
      notices[0] = notice;
      this.setState({ notices });
      if (notice.duration > 0) {
        const id = setTimeout(() => {
          this.removeNotice(notice.key);
          clearTimeout(id);
        }, notice.duration);
      }
    }
    return () => {
      this.removeNotice(notice.key);
    };
  }

  removeNotice(key) {
    this.setState((previousState) => ({
      notices: previousState.notices.filter((notice) => {
        if (notice.key === key) {
          if (notice.onClose) notice.onClose();
          return false;
        }
        return true;
      }),
    }));
  }

  render() {
    const { notices } = this.state;
    return (
      <TransitionGroup>
        {notices.map((notice) => {
          return (
            <CSSTransition key={notice.key} classNames="fade" timeout={this.transitionTime}>
              <div className={css.toast}>{notice.content}</div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }
}
export default Notification;
