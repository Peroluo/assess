/*
 * @Descripttion:公共弹窗
 * @Author: luoguoxiong
 * @Date: 2020-06-03 14:15:22
 * @LastEditTime: 2020-06-10 14:19:52
 */

import React from 'react';
import css from './index.less';
import { Transition } from 'react-transition-group';
const transitionStyles = {
  entering: { opacity: 0, zIndex: 1 },
  entered: { opacity: 1, zIndex: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
function ModalNotice({ visable = false, children }) {
  return (
    <Transition
      in={visable}
      unmountOnExit
      timeout={{
        enter: 100,
        exit: 200,
      }}
    >
      {(state) => (
        <div
          className={css.ModalWrap}
          style={{
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
export default ModalNotice;
