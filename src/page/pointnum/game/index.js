import React, { Component } from 'react';
import { connect } from 'dva';
import { Toast } from 'antd-mobile';
import classNames from 'classnames';
import router from 'umi/router';
import { saveUserScores } from '@/services/api';
import styles from './index.less';
import { Prompt } from '@/components/index';
@connect(({ globalStat }) => ({ globalStat }))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrData: [],
      curNum: 1,
      countTime: 0,
      showDownTime: false,
      pageType: '',
      downTime: 3,
      showClickPop: false,
      currentGame: 1,
      timeArr: [],
      showCurrentNum: false,
      when: false,
      stopSubmit: false,
      showActive: false,
    };
  }
  componentDidMount() {
    const { query } = this.props.location;
    const { type } = query;
    const arrData = this.mixData(25);
    this.setState(
      {
        arrData,
        timeArr: [],
        currentGame: 1,
        pageType: type,
      },
      () => {
        // if(type==='practice'){
        //   this.startDownTime()
        // }
        // else if(type==='test'){
        //   this.setState({
        //     showClickPop:true
        //   })
        // }
        this.setState({
          showClickPop: true,
        });
      },
    );
  }
  closeClickPop = () => {
    this.setState(
      {
        showClickPop: false,
      },
      () => {
        this.startDownTime();
      },
    );
  };
  startDownTime = () => {
    this.setState(
      {
        showDownTime: true,
      },
      () => {
        this.timerDown = setInterval(() => {
          const { downTime } = this.state;
          if (downTime > 1) {
            this.setState({
              downTime: downTime - 1,
            });
          } else {
            clearInterval(this.timerDown);
            const arrData = this.mixData(25);
            this.setState({
              arrData,
              showDownTime: false,
              downTime: 3,
            });
            this.startGame();
          }
        }, 1000);
      },
    );
  };
  startGame = () => {
    const date = +new Date();
    this.timer = setInterval(() => {
      this.setState({
        countTime: +new Date() - date,
      });
    }, 60);
  };
  renderSmallBox = () => {
    const { arrData, curNum, showActive } = this.state;
    return arrData.map((item, index) => {
      return (
        <button
          key={item}
          className={classNames(
            styles.box_item,
            { [styles.no_border_bottom]: index > 19 },
            { [curNum === Number(item) ? styles.right : styles.error]: true },
            { [styles.isCurrent]: curNum === Number(item) && showActive },
          )}
          onTouchStart={this.touchStartItem.bind(this, item)}
          onTouchEnd={this.clickNum.bind(this, item)}
        >
          {item}
        </button>
      );
    });
  };
  touchStartItem = item => {
    const { curNum } = this.state;
    if (curNum === Number(item)) {
      this.setState({
        showActive: true,
      });
    }
  };
  async clickNum(num) {
    const value = Number(num);
    const { curNum, countTime, currentGame, pageType, timeArr, stopSubmit } = this.state;
    this.setState({
      showActive: false,
    });
    if (stopSubmit === false) {
      if (value === curNum) {
        if (this.showCurrentNumTimer) {
          this.setState({
            showCurrentNum: false,
          });
        }
        if (value === 25) {
          clearInterval(this.timer);
          // alert(`用时${(countTime/1000).toFixed(2)}秒，你个小菜鸡`)
          let time = (countTime / 1000).toFixed(2);
          if (pageType === 'practice') {
            this.setState(
              {
                when: true,
              },
              () => {
                const state = localStorage.getItem('state');
                router.push('/pointnum/result?type=practice&time=' + time + `&${state}`);
              },
            );
          } else if (pageType === 'test') {
            // 防止用户连续点击
            if (timeArr.length < 3) {
              timeArr.push(time);
            }

            if (currentGame === 3) {
              time = timeArr.join(',');
              //todo 分数需要计算
              this.setState(
                {
                  stopSubmit: true,
                  timeArr,
                },
                () => {
                  this.submit();
                },
              );
            } else if (currentGame < 3) {
              this.setState(
                {
                  currentGame: currentGame + 1,
                  curNum: 1,
                  countTime: 0,
                  timeArr,
                },
                () => {
                  this.setState({
                    showClickPop: true,
                  });
                },
              );
            }
          }
        } else {
          this.setState({
            curNum: value + 1,
          });
        }
      } else {
        this.setState(
          {
            showCurrentNum: true,
          },
          () => {
            this.showCurrentNumTimer = setTimeout(() => {
              this.setState({
                showCurrentNum: false,
              });
            }, 500);
          },
        );
      }
    }
  }

  async submit() {
    const { countTime, timeArr } = this.state;
    let time = (countTime / 1000).toFixed(2);
    time = timeArr.join(',');
    const { ceType } = this.props.globalStat;
    const result = await saveUserScores({
      userId: this.props.globalStat.userInfo.id,
      platform: 0, //平台，直接写0
      channel: 0, //渠道 0--公众号 1--小程序
      version: ceType, //版本 0--5min版本  1--30min版本
      stage: 1, //评测阶段， 0--无阶段，1--专注力，2--记忆力，3--自助诊断，4--辅助诊断
      childStage: 0, //子阶段 0--无子阶段，1--记忆力自由回忆,  2--记忆力顺序记忆,  3--记忆力空间位置记忆'
      extraInfoTime: Math.min(Number(timeArr[0]), Number(timeArr[1]), Number(timeArr[2])), //最佳时间
      extraInfo: time, //当前阶段花费的时间（秒）
    });
    if (result.code === 0) {
      this.setState(
        {
          when: true,
        },
        () => {
          const state = localStorage.getItem('state');
          router.push('/pointnum/result?type=test&time=' + time + `&${state}`);
        },
      );
    } else {
      this.setState({
        stopSubmit: true,
      });
      Toast.info(result.message || '系统繁忙，请稍后再试', 1);
    }
  }
  mixData = len => {
    var arr = [];
    for (var i = 0; i < len; i++) {
      arr[i] = i + 1;
    }
    arr.sort(function() {
      return 0.5 - Math.random();
    });
    return arr.join().split(',');
  };
  render() {
    const {
      curNum,
      countTime,
      downTime,
      showDownTime,
      showClickPop,
      currentGame,
      showCurrentNum,
      pageType,
      when,
      timeArr,
    } = this.state;
    return (
      <div className={styles.wrap}>
        <div className={styles.ex_box}>
          <div className={styles.words}>用最快速度从 1 选到 25</div>
          <div className={styles.timer}>
            <span className={styles.num}>{(countTime / 1000).toFixed(0)}</span>
            <span>s</span>
          </div>
        </div>
        <div className={styles.box_wrap}>
          {showCurrentNum && <div className={styles.cur_num}>{curNum}</div>}
          <div className={styles.box}>{this.renderSmallBox()}</div>
        </div>
        {showDownTime && (
          <div className={styles.down_time}>
            <span>{downTime}</span>
          </div>
        )}
        {showClickPop && (
          <div className={styles.click_pop}>
            <div className={styles.click_icon} onClick={this.closeClickPop}>
              {pageType === 'test' && (
                <>
                  <div className={styles.top}>
                    {currentGame === 1 && (
                      <>
                        <div className={styles.cur_num}>
                          这是第<span>{currentGame}</span>次挑战
                        </div>
                        <div className={styles.count_num}>
                          共<span>3</span>次挑战
                        </div>
                      </>
                    )}
                    {(currentGame === 2 || currentGame === 3) && (
                      <>
                        <div className={styles.tips}>
                          共<span>3</span>次,已完成第
                          <span className={styles.yellow}>{currentGame - 1}</span>次
                        </div>
                        <div className={styles.last_time}>
                          {Number(timeArr[currentGame - 2]).toFixed(2)}
                          <span>s</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className={styles.bottom}>
                    点击开始第<span>{currentGame}</span>次挑战
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        <Prompt when={when} />
      </div>
    );
  }
}
export default Index;
