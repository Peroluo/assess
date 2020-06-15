/*
 * @Descripttion:记忆力测评
 * @Author: luoguoxiong
 * @Date: 2020-06-03 19:51:54
 * @LastEditTime: 2020-06-10 16:31:25
 */
import React from 'react';
import Deep from '@/container/memory/deep';
import Free from '@/container/memory/free';
import Sequence from '@/container/memory/sequence';
import { MemoryResultAll } from '@/component/Result';
import { useImmer } from '@/hooks';
export default function Memory() {
  const [{ score, step }, setState] = useImmer({ score: [0, 0, 0], step: 0 });

  const changeStep = (index, val) => {
    setState((state) => {
      state.score[index - 1] = val;
      state.step = index;
    });
  };
  switch (step) {
    case 0:
      return <Free nextStep={changeStep}></Free>;
    case 1:
      return <Sequence nextStep={changeStep}></Sequence>;
    case 2:
      return <Deep nextStep={changeStep}></Deep>;
    default:
      return <MemoryResultAll score={score}></MemoryResultAll>;
  }
}
