import { getStage } from '@/services/api';

// 上报后调用次方法，stage当前id
export default async stage => {
  const user_info = JSON.parse(localStorage.getItem('learningTestUserInfo')) || {};
  const userId = user_info.id;
  let { code, data } = await getStage({ userId });
  // const stageObj = {1:"专注力测试",2:"记忆里测试",3:"推理力测试",4:"自助测试",5:"辅助测试"}
  const urlObj = {
    1: '/pointnum/index',
    2: '/memory',
    3: '/intellect',
    4: '/questionaire/index?role=student',
    empty: '',
  };

  if (code === 0) {
    const next = nextNum(stage, data);
    return urlObj[next];
  }
};
function nextNum(current, data) {
  let dataArr = data.split(',');
  dataArr = dataArr.filter(item => item !== '5');
  dataArr = dataArr.map(item => Number(item));
  dataArr.sort();
  // 如果data里面不包括current就报错
  if (!dataArr.includes(current)) {
    console.log('data中应该包含current');
  }
  // 已经做完
  if (dataArr.length === 6) {
    console.log('empty');
    return 'empty';
  }

  // 如果记忆里都已经完成
  if (dataArr.includes(6) && dataArr.includes(7) && dataArr.includes(8)) {
    dataArr.splice(-3, 3);
    dataArr.push(2);
    dataArr.sort();
  } else {
    if ([6, 7, 8].includes(current)) {
      console.log(2);
      return '2';
    }
    // 把6，7，8都给删掉
    for (let key of [6, 7, 8]) {
      if (dataArr.indexOf(Number(key)) > -1) {
        dataArr.splice(dataArr.indexOf(Number(key)), 1);
      }
    }
  }

  // 如果只完成了一项测试，直接判断返回,如果只有6，7，8
  if (dataArr.length === 1) {
    const stage = dataArr[0];
    if (stage !== 4 && stage !== 0) {
      console.log('444', dataArr[0] + 1);
      return dataArr[0] + 1;
    } else {
      console.log(1);
      return 1;
    }
  }
  dataArr = [...dataArr, ...dataArr];
  let next = 0;
  for (let i in dataArr) {
    if (Number(i) >= dataArr.indexOf(current)) {
      if (
        dataArr[Number(i) + 1] - dataArr[i] > 1 ||
        (dataArr[Number(i) + 1] - dataArr[i] <= 0 && dataArr[Number(i) + 1] - dataArr[i] !== -3)
      ) {
        next = dataArr[i] + 1;
        if (next > 4) {
          next = 1;
        }
        // 如果跳转到记忆力
        if (next === 2) {
        }
        console.log('???');
        console.log(next);
        return next;
      }
    }
  }
}
