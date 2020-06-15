/*
 * @Descripttion: 专注力测评
 * @Author: luoguoxiong
 * @Date: 2020-06-02 18:04:08
 * @LastEditTime: 2020-06-10 16:27:09
 */

import React, { Fragment } from 'react';
import css from './index.less';
import ModalNotice from '@/component/ModalNotice';
import ResultModal from '@/container/concentration/resultModal';
import Countdown from '@/container/concentration/countdown';
import { ConcentrationResult } from '@/component/Result';
import { produce } from 'immer';

class Concentration extends React.Component {
  state = {
    playData: [],
    nextIndex: 1, // 下一次应该点的数字
    rightIndex: 0, // 当前点击，正确的数字
    warnIndex: 0, // 当前点击，错误的数字
    realTime: 0, // 使用时间
    useTime: 0, // 结果显示使用时间
    playTimes: 1, // 当前测试次数
    playUseTime: [], // 记录每次练习使用时间
    isTest: true, // 是否是练习模式
    visable: true, // 介绍弹窗
    resultVisable: false, // 结果弹窗
    showResult: false, // 结果页
    showCountDowm: false, // 倒计时弹窗
  };

  // 随机生成数字
  createPlayData = () => {
    let arr = [];
    for (let i = 0; i < 25; i++) {
      arr[i] = i + 1;
    }
    return arr.sort(function () {
      return 0.5 - Math.random();
    });
  };

  // 点击某一项数字
  clickItem = (item) => {
    if (this.state.nextIndex + 1 <= 26) {
      if (item !== this.state.nextIndex) {
        clearTimeout(this.timeoutId2);
        this.setState(
          produce((state) => {
            state.warnIndex = item;
          }),
          () => {
            this.timeoutId2 = setTimeout(() => {
              this.setState(
                produce((state) => {
                  state.warnIndex = 0;
                }),
              );
              clearTimeout(this.timeoutId2);
            }, 500);
          },
        );
      } else {
        clearTimeout(this.timeoutId);
        this.setState(
          produce((state) => {
            state.rightIndex = item;
            state.nextIndex = state.nextIndex + 1;
          }),
          () => {
            if (this.state.nextIndex === 26) {
              this.complete();
              clearInterval(this.startTimer);
            }
            this.timeoutId = setTimeout(() => {
              this.setState(
                produce((state) => {
                  state.rightIndex = 0;
                }),
              );
              clearTimeout(this.timeoutId);
            }, 500);
          },
        );
      }
    }
  };

  // 开始练习/测评
  onPlay = (isTest) => {
    this.setState(
      produce(
        (state) => {
          state.isTest = isTest;
          state.visable = false;
          state.realTime = 0;
        },
        () => {
          const id = setTimeout(() => {
            this.setState(
              produce((state) => {
                state.showCountDowm = true;
              }),
            );
            clearTimeout(id);
          }, 300);
        },
      ),
    );
  };

  // 开始计时
  startGame = () => {
    this.startTimer = setInterval(() => {
      this.setState(
        produce((state) => {
          state.realTime = state.realTime + 10;
        }),
      );
    }, 10);
  };

  // 成绩弹窗点击开始测评或者下一次测评
  clickResultModal = () => {
    if (this.state.isTest) {
      this.setState(
        produce((state) => {
          state.isTest = false;
          state.resultVisable = false;
          state.nextIndex = 1;
          state.realTime = 0;
          state.showCountDowm = true;
          state.playData = [];
        }),
      );
    } else {
      if (this.state.playTimes < 3) {
        this.setState(
          produce((state) => {
            state.resultVisable = false;
            state.nextIndex = 1;
            state.realTime = 0;
            state.playData = [];
          }),
          () => {
            const id = setTimeout(() => {
              this.setState(
                produce((state) => {
                  state.showCountDowm = true;
                  state.playTimes = state.playTimes + 1;
                }),
              );
              clearTimeout(id);
            }, 300);
          },
        );
      } else {
        this.setState(
          produce((state) => {
            state.resultVisable = false;
            state.showResult = true;
          }),
        );
      }
    }
  };

  // 完成题目
  complete() {
    clearInterval(this.startTimer);
    if (this.state.isTest) {
      this.setState(
        produce((state) => {
          state.resultVisable = true;
          state.useTime = state.realTime;
        }),
      );
    } else {
      this.setState(
        produce((state) => {
          state.playUseTime.push(state.realTime);
          state.resultVisable = true;
          state.useTime = state.realTime;
        }),
      );
    }
  }

  // render数字模块
  renderPlayBox = () => {
    const { playData, rightIndex, warnIndex } = this.state;
    return (
      <div className={css.playBox}>
        {playData.map((item) => {
          const classs = [css.numberContent];
          if (item === rightIndex) {
            classs.push(css.isRight);
          }
          if (item === warnIndex) {
            classs.push(css.isWran);
          }
          return (
            <div
              className={css.numberBox}
              key={item}
              onClick={() => {
                this.clickItem(item);
              }}
            >
              <div className={css.bgWhite}>
                <div className={classs.join(' ')}>{item}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // render游戏
  renderGame = () => {
    const { isTest, playTimes, realTime } = this.state;
    return (
      <div className={css.page}>
        <div className={css.playTitleWrap}>
          <div className={css.playTitle}>以最快的速度从1选到25</div>
          <div className={css.timeout}>
            <img src="/img/clock.png" alt="" className={css.clock} />
            {(realTime / 1000).toFixed(2)}
            <span>s</span>
          </div>
        </div>
        <div className={css.subNotice}>
          {isTest ? `(只有一次练习机会哦)` : `(第${playTimes}次诊断，共3次)`}
        </div>
        {this.renderPlayBox()}
      </div>
    );
  };

  // render结果
  renderResult = () => {
    const { playUseTime } = this.state;
    return (
      <ConcentrationResult
        playUseTime={playUseTime}
        toNext={() => {
          console.log('sss');
        }}
      ></ConcentrationResult>
    );
  };

  render() {
    const { isTest, playTimes, useTime, showResult, showCountDowm, resultVisable } = this.state;
    const playChinese = ['一', '二', '三'];
    return (
      <Fragment>
        {showResult ? this.renderResult() : this.renderGame()}
        <Countdown
          visable={showCountDowm}
          onBegin={() => {
            const data = this.createPlayData();
            this.setState({ showCountDowm: false, playData: data }, () => {
              this.startGame();
            });
          }}
        ></Countdown>
        <ResultModal
          visable={resultVisable}
          onClickBtn={this.clickResultModal}
          discription="你专注力的表现为：良好，超越了68%的人，请继续保持，持之以恒将会有更大的提升！"
          useTime={useTime}
          btnText={
            isTest
              ? '进行正式诊断'
              : playTimes < 3
              ? `开始第${playChinese[playTimes]}次诊断`
              : '查看测评结果'
          }
        ></ResultModal>
        <ModalNotice
          visable={this.state.visable}
          title="专注力诊断"
          contentMsg={[
            {
              title: '诊断介绍：',
              text: [
                '专注力是人的心理活动对一定事物的指向和集中，保持良好的专注力是大脑进行感知、记忆、思维等认知活动的基本条件。',
                '舒尔特方格是一种简单测量专注力水平的工具，诊断完成时间的长短可以客观地反映个体专注力水平的高低。',
              ],
            },
            {
              title: '规则提醒：',
              text: ['请按1-25的顺序点击下页出现的方格可先练习再进入诊断，练习结果不计入报告'],
            },
          ]}
          warningText="建议双手操作以确保速度！"
          onTest={() => {
            this.onPlay(true);
          }}
          onPlay={() => {
            this.onPlay(false);
          }}
        ></ModalNotice>
      </Fragment>
    );
  }
}

export default Concentration;
