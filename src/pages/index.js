/*
 * @Descripttion: 首页
 * @Author: luoguoxiong
 * @Date: 2020-06-15 14:59:55
 * @LastEditTime: 2020-06-15 20:28:04
 */

import React, { useEffect } from 'react';
import { useImmer } from '@/hooks';
import StepProgress from '@/component/StepProgress';
function Home() {
  const [state, setState] = useImmer({
    stepList: [],
    step: 1, //正在进行的步骤
  });
  useEffect(() => {
    setState((state) => {
      state.stepList = [
        {
          activeIcon: 'iconA1', // 已完成
          defaultIcon: '', // 待开始
          waitIcon: 'iconR1', // 进行中
          stepName: '个人信息',
          isRunning: false, // 是否进行中
          stepTime: 11,
        },
        {
          activeIcon: 'iconA2',
          defaultIcon: 'iconW2',
          waitIcon: 'iconR2',
          stepName: '学习动力',
          isRunning: true,
          stepTime: 10,
        },
        {
          activeIcon: 'iconA3',
          defaultIcon: 'iconW3',
          waitIcon: 'iconR3',
          stepName: '学习执行力',
          isRunning: false,
          stepTime: 12,
        },
        {
          activeIcon: 'iconA4',
          defaultIcon: 'iconW4',
          waitIcon: 'iconR4',
          stepName: '学习能力',
          isRunning: false,
          stepTime: 18,
        },
        {
          activeIcon: 'iconA3',
          defaultIcon: 'iconW3',
          waitIcon: 'iconR3',
          stepName: '环境影响',
          isRunning: false,
          stepTime: 18,
        },
      ];
      state.step = 2;
    });
  }, [setState]);
  const { stepList, step } = state;
  return (
    <StepProgress stepList={stepList} step={step} imgUrl="/img/home/banner.png"></StepProgress>
  );
}
export default Home;
