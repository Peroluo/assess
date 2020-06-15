/*
 * @Descripttion: 推理力练习
 * @Author: luoguoxiong
 * @Date: 2020-06-08 19:55:52
 * @LastEditTime: 2020-06-10 15:32:39
 */
import React from 'react';
import ResultTest from '@/component/ResultTest';
import SubTag from '@/component/SubTag';
import GamePlay from '../GamePlay';
import { useImmer } from '@/hooks';
import css from './index.less';

export default function Testplay({ onPlay }) {
  const [{ step, isRight }, setState] = useImmer({ step: 1, isRight: false });
  if (step === 1) {
    return (
      <GamePlay
        isTest
        getScore={(val) => {
          setState((state) => {
            state.step = 2;
            state.isRight = val;
          });
        }}
      />
    );
  } else {
    return (
      <ResultTest
        isRight={isRight}
        title={isRight ? '推理正确' : '推理错误'}
        btnText="开始诊断"
        onPlay={onPlay}
      >
        <div className={css.testRightResult}>
          <div className={css.tagWrap}>
            <SubTag color="#44B979">正确答案</SubTag>
          </div>
          <img src="/img/rightInter.png" alt="" />
        </div>
      </ResultTest>
    );
  }
}
