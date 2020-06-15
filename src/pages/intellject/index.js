/*
 * @Descripttion: 推理力测评
 * @Author: luoguoxiong
 * @Date: 2020-06-08 16:15:54
 * @LastEditTime: 2020-06-10 13:05:11
 */

import React, { Fragment } from 'react';
import { useImmer } from '@/hooks';
import ModalNotice from '@/component/ModalNotice';
import TestPlay from '@/container/intellject/Testplay';
import StartPlay from '@/container/intellject/StartPlay';

export default () => {
  const [state, setState] = useImmer({ visable: true, step: 1 });
  const { visable, step } = state;
  const renderContoller = () => {
    switch (step) {
      case 1:
        return (
          <TestPlay
            onPlay={() => {
              setState((state) => {
                state.step = 2;
              });
            }}
          />
        );
      case 2:
        return <StartPlay />;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      {renderContoller()}
      <ModalNotice
        visable={visable}
        title="推理力诊断"
        warningText="可先练习再开始测评"
        contentMsg={[
          {
            title: '诊断介绍：',
            text: [
              '推理力测评一共有72个题目构成。按照题目难度逐渐增加的顺序分为A、AB、B、C、D、E六组，前三组为彩色题目，后三组为黑白题目。',
              '推理力测评主要测评的是一个人的观察力、清晰思维的能力和作出理性判断的能力，即推理能力。',
            ],
          },
          {
            title: '诊断介绍：',
            text: [
              '请在40分钟内，根据以下每道题中大图案的规律选择哪一个小图放在大图缺少部分最合适。',
            ],
          },
        ]}
        onPlay={() => {
          setState((state) => {
            state.step = 2;
            state.visable = false;
          });
        }}
        onTest={() => {
          setState((state) => {
            state.step = 1;
            state.visable = false;
          });
        }}
      />
    </Fragment>
  );
};
