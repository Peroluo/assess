/*
 * @Descripttion: 学习能力诊断
 * @Author: luoguoxiong
 * @Date: 2020-06-15 14:59:55
 * @LastEditTime: 2020-06-15 20:28:19
 */

import React, { useEffect } from 'react';
import { useImmer } from '@/hooks';
import StepProgress from '@/component/StepProgress';

function Learn() {
  const [state, setState] = useImmer({
    stepList: [],
    step: 1, //正在进行的步骤
  });
  useEffect(() => {
    setState((state) => {
      state.stepList = [
        {
          activeIcon: 'iconA7', // 已完成
          defaultIcon: '', // 待开始
          waitIcon: 'iconR7', // 进行中
          stepName: '专注力诊断',
          isRunning: false, // 是否进行中
          stepTime: 3,
        },
        {
          activeIcon: 'iconA5',
          defaultIcon: 'iconW5',
          waitIcon: 'iconR5',
          stepName: '记忆力诊断',
          isRunning: true,
          children: ['自由回忆', '顺序记忆', '空间位置记忆'],
          stepTime: 10,
        },
        {
          activeIcon: 'iconA6',
          defaultIcon: 'iconW6',
          waitIcon: 'iconR6',
          stepName: '自助问答诊断',
          isRunning: false,
          stepTime: 12,
        },
      ];
      state.step = 2;
    });
  }, [setState]);
  const { stepList, step } = state;
  return (
    <StepProgress stepList={stepList} step={step} imgUrl="/img/home/banner2.png"></StepProgress>
  );
}
export default Learn;
