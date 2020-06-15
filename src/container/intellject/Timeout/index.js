/*
 * @Descripttion: 推理力倒计时
 * @Author: luoguoxiong
 * @Date: 2020-06-09 18:56:41
 * @LastEditTime: 2020-06-10 14:35:38
 */

import React from 'react';
import { useInterval, useImmer } from '@/hooks';
import ModalTimeout from '@/component/ModalTimeout';
import css from './index.less';
import { secondstoMin } from '@/utils';
export default ({ onTimeout = () => {}, onClose = () => {}, times = 0 }) => {
  const [{ seconds, visable }, setState] = useImmer({ seconds: times, visable: false });

  const closeTime = times * 1000;

  useInterval(
    () => {
      if (seconds > 0) {
        setState((state) => {
          state.seconds = state.seconds - 1;
        });
      } else {
        onTimeout();
        setState((state) => {
          state.visable = true;
        });
      }
    },
    1000,
    closeTime,
  );

  return (
    <div className={css.timeout}>
      <img src="/img/iClock.png" alt="" />
      <span>{secondstoMin(seconds)}</span>
      <ModalTimeout visable={visable} onClose={onClose}></ModalTimeout>
    </div>
  );
};
