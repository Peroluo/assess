/*
 * @Descripttion: 轻提示
 * @Author: luoguoxiong
 * @Date: 2020-06-08 16:01:19
 * @LastEditTime: 2020-06-08 19:10:19
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Notification from './Notification';

function createNotification() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const notification = ReactDOM.render(<Notification />, div);
  return {
    addNotice(notice) {
      return notification.addNotice(notice);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  };
}

let notification;
const notice = (type, content, duration = 2000, onClose) => {
  if (!notification) notification = createNotification();
  return notification.addNotice({ type, content, duration, onClose });
};

export default {
  info(content, duration, onClose) {
    return notice('info', content, duration, onClose);
  },
};
