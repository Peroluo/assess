// createNumber 生num个成start-end随机数，且不重复
function createNumber(start, end, num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let newNum = start + Math.round(Math.random() * (end - start));
    if (arr.indexOf(newNum) < 0) {
      arr.push(newNum);
    } else {
      i--;
    }
  }
  return arr;
}

// createInput 生成长度为num的{val,id}数组
function createInput(num) {
  let arr = [];
  let time = new Date().getTime();
  for (let i = 0; i < num; i++) {
    arr.push({ val: '', id: time + i });
  }
  return arr;
}

function dateRule(e) {
  return e < 10 ? 0 + '' + e : e;
}

// secondstoMin ms=>22:10
function secondstoMin(seconds) {
  let minute = parseInt(seconds / 60);
  let second = seconds % 60;
  return [minute, second].map(dateRule).join(':');
}

export { createNumber, createInput, secondstoMin };
