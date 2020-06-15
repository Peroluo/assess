import React from 'react';
import styles from './index.less';
class ScoreLine extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.score = props.score;
    this.color = ['#FF3636', '#FA7501', '#FEB20F', '#A4D820', '#5EC73D', '#0EB575', '#00A677'];
    this.limit = props.limit;
  }
  componentDidMount() {
    const { everyStagLenList, activeIndex, activeWidth } = this.getEvenyTag(
      this.limit,
      2,
      459,
      this.score,
    );
    let ctx = this.canvas.current.getContext('2d');
    ctx.lineWidth = 20;
    ctx.font = '22px PingFang-SC-Regular';
    let start = 0;
    let end = 0;
    let colorIndex = 0;
    let numIndex = 0;
    for (let i = 0; i < everyStagLenList.length; i++) {
      const len = everyStagLenList[i];
      end = start + len;
      if (i % 2 !== 0) {
        ctx.beginPath();
        ctx.strokeStyle = '#ffffff';
        ctx.moveTo(start, 68);
        ctx.lineTo(end, 68);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = '#CCCCCC';
        ctx.font = '22px PingFang-SC-Regular';
        ctx.fillText(this.limit[numIndex], end - 24, 108);
        numIndex++;
      } else {
        if (i === 0) {
          // 画弧
          ctx.beginPath();
          ctx.fillStyle = this.color[colorIndex];
          ctx.arc(10, 68, 10, 0.5 * Math.PI, 1.5 * Math.PI);
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = '#CCCCCC';
          ctx.fillText(this.limit[numIndex], 0, 108);
          // 划线
          ctx.beginPath();
          ctx.strokeStyle = this.color[colorIndex];
          ctx.moveTo(start + 10, 68);
          ctx.lineTo(end, 68);
          ctx.stroke();
          numIndex++;
        } else if (i === everyStagLenList.length - 1) {
          // 划线
          ctx.beginPath();
          ctx.strokeStyle = this.color[colorIndex];
          ctx.moveTo(start, 68);
          ctx.lineTo(end - 10, 68);
          ctx.stroke();
          // 画弧
          ctx.beginPath();
          ctx.fillStyle = this.color[colorIndex];
          ctx.arc(end - 10, 68, 10, 1.5 * Math.PI, 2.5 * Math.PI);
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = '#CCCCCC';
          ctx.font = '22px PingFang-SC-Regular';
          ctx.fillText(this.limit[numIndex], end - 42, 108);
        } else {
          // 划线
          ctx.beginPath();
          ctx.strokeStyle = this.color[colorIndex];
          ctx.moveTo(start, 68);
          ctx.lineTo(end, 68);
          ctx.stroke();
        }
        colorIndex++;
      }
      start = end;
    }
    this.runAnimate(ctx, this.color[activeIndex], activeWidth, this.score);
  }

  // 画分数
  runAnimate(ctx, color, left, score) {
    left = left > 440 ? 440 : left;
    ctx.beginPath();
    ctx.moveTo(left, 58);
    ctx.lineTo(left + 8, 42);
    ctx.lineTo(left + 16, 58);
    ctx.fillStyle = color;
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.font = '30px PingFang-SC-Regular';
    // 数值容错处理
    const length = score.length;
    const hasCir = score.includes('.');
    let leftPix = 0;
    if (hasCir) {
      leftPix = (length * 15 + 2) / 2;
    } else {
      leftPix = (length * 15 + 12) / 2;
    }
    let scoreX = 0;
    let scoreStrX = 0;
    if (left - leftPix > 0) {
      if (left + leftPix > 440) {
        scoreX = 459 - leftPix * 2 - 24;
        scoreStrX = 459 - 24;
      } else {
        scoreX = left - leftPix;
        scoreStrX = left + leftPix;
      }
    } else {
      scoreX = 0;
      scoreStrX = left + leftPix * 2 - (hasCir ? 2 : 12);
    }
    ctx.fillText(score, scoreX, 30);
    ctx.font = '24px PingFang-SC-Regular';
    ctx.fillText('分', scoreStrX, 30);
  }

  /*
   * 通过分数段、间隙长度、总长度、得分分数
   * 获取画布的组成长度、对应的分数颜色下标、分数值该挪的位置
   */
  getEvenyTag(limit, stageWidth, len, score) {
    const realLen = len - stageWidth * (limit.length - 2);
    const everyStagLenList = [];
    let isHasGetIndex = false;
    let activeIndex = null;
    let activeWidth = 0;
    for (let i = 0; i < limit.length; i++) {
      if (i + 1 < limit.length) {
        const width = ((limit[i + 1] - limit[i]) / (limit[limit.length - 1] - limit[0])) * realLen;
        everyStagLenList.push(width);
        everyStagLenList.push(stageWidth);
        if (!isHasGetIndex) {
          activeWidth += width;
        }
        if (!isHasGetIndex && score >= limit[i] && score < limit[i + 1]) {
          activeIndex = i;
          activeWidth = activeWidth - width / 2;
          isHasGetIndex = true;
        }
      }
      if (i === limit.length - 1) {
        everyStagLenList.pop();
        if (!isHasGetIndex) {
          activeIndex = limit.length - 2;
        }
      }
    }
    return {
      everyStagLenList,
      activeIndex,
      activeWidth: activeWidth - 8 + activeIndex * stageWidth,
    };
  }
  render() {
    return <canvas className={styles.can} ref={this.canvas} width="459" height="118"></canvas>;
  }
}

export default ScoreLine;
