/*
 * @Descripttion: 推理力正式测评
 * @Author: luoguoxiong
 * @Date: 2020-06-08 19:54:35
 * @LastEditTime: 2020-06-10 14:08:58
 */

import React from 'react';
import { useImmer } from '@/hooks';
import { IntelljectResult } from '@/component/Result';
import GamePlay from '../GamePlay';

export default () => {
  const [state, setState] = useImmer({ step: 1, score: 0 });
  const { step, score } = state;
  if (step === 1) {
    return (
      <GamePlay
        getScore={(score) => {
          setState((state) => {
            state.step = 2;
            state.score = score;
          });
        }}
      />
    );
  } else {
    return (
      <IntelljectResult
        score={score}
        btnText="深度解读"
        toNext={() => {
          // console.log(1);
        }}
      ></IntelljectResult>
    );
  }
};
