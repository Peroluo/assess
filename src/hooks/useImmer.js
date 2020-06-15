/*
 * @Descripttion: useImmer
 * @Author: luoguoxiong
 * @Date: 2020-06-10 11:48:36
 * @LastEditTime: 2020-06-10 13:07:15
 */

import { produce } from 'immer';
import { useCallback, useState } from 'react';

export default function useImmer(initialValue) {
  const [state, updateValue] = useState(initialValue);
  const setState = useCallback((updater) => {
    updateValue(produce(updater));
  }, []);
  return [state, setState];
}
