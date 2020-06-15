/*
 * @Descripttion:useInterval //计时器 hooks
 * @Author: luoguoxiong
 * @Date: 2020-06-09 20:07:42
 * @LastEditTime: 2020-06-10 14:18:31
 */
import { useEffect, useRef } from 'react';

/**
 * @name: luoguoxiong
 * @msg: 计时器
 * @param {callback} setInterval 执行函数
 * @param {delay} setInterval 执行周期
 * @return:
 */
const useInterval = (callback, delay, closeTime) => {
  const savedCallback = useRef(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      savedCallback.current();
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      const id = setTimeout(() => {
        clearInterval(interval);
        clearTimeout(id);
      }, closeTime);
      return () => {
        clearInterval(interval);
        setTimeout(id);
      };
    }
    return undefined;
  }, [closeTime, delay]);
};

export default useInterval;
