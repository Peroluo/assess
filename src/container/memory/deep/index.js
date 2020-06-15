/*
 * @Descripttion: 空间记忆测评
 * @Author: luoguoxiong
 * @Date: 2020-06-03 19:56:25
 * @LastEditTime: 2020-06-08 15:02:42
 */

import React, { Fragment } from 'react';
import ModalNotice from '@/component/ModalNotice';
import Wrap from '../wrap';
import ResultTest from '@/component/ResultTest';
import ModalComfirm from '@/component/ModalComfirm';
import { produce } from 'immer';
import css from './index.less';
import SubTag from '@/component/SubTag';
import { createNumber, createInput, secondstoMin } from '@/utils';
import ModalTimeout from '@/component/ModalTimeout';
import Button from '@/component/Button';
class Deep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      visable: true,
      showIndex: 0,
      showData: [],
      realTime: 0,
      isTest: true,
      answerList: [],
      submitVis: false,
      timeoutVis: false,
    };
  }
  // 开始看題
  onPlay = (isTest) => {
    this.setState(
      produce((state) => {
        state.step = 1;
        state.isTest = isTest;
        state.visable = false;
        state.showIndex = 0;
        state.showData = this.createData();
      }),
      () => {
        this.startTimeout(4);
      },
    );
  };

  // 生成数据
  createData = () => {
    const indexArr = createNumber(0, 15, 9);
    const valueArr = createNumber(1, 16, 9);
    const colors = ['#FF3636', '#FA7501', '#FEB20F', '#A4D820', '#5EC73D', '#0EB575', '#00A677'];
    let i = 0;
    const colorText = [];
    while (i < 9) {
      colorText.push({
        index: indexArr[i],
        color: colors[Math.floor(Math.random() * 7)],
        value: valueArr[i],
      });
      i++;
    }
    return colorText;
  };

  // 看下一个数字
  showNextNum = () => {
    this.timer && clearInterval(this.timer);
    if (this.state.showIndex < 8) {
      // todo重新计时
      this.startTimeout(4);
      this.setState(
        produce((state) => {
          state.showIndex = state.showIndex + 1;
        }),
      );
    } else {
      // todo做題
      this.startTimeout(60);
      this.setState(
        produce((state) => {
          state.answerList = createInput(16);
          state.step = 2;
        }),
      );
    }
  };

  // 开始倒计时
  startTimeout = (time) => {
    this.setState(
      produce((state) => {
        state.realTime = time;
      }),
      () => {
        this.timer = setInterval(() => {
          if (this.state.realTime < 1) {
            // 看题时间到
            if (this.state.step === 1) {
              this.showNextNum();
            }
            // 答题时间到 提醒答题时间到
            else if (this.state.step === 2) {
              clearInterval(this.timer);
              this.isTimeout();
            }
          } else {
            this.setState(
              produce((state) => {
                state.realTime = state.realTime - 1;
              }),
            );
          }
        }, 1000);
      },
    );
  };

  // 答题时间到
  isTimeout = () => {
    this.setState(
      produce((state) => {
        state.timeoutVis = true;
        state.submitVis = false;
      }),
    );
  };

  // 提交答题
  toSubmit = () => {
    this.setState(
      produce((state) => {
        state.submitVis = true;
      }),
    );
  };

  // 跳转到结果页
  toResultPage = () => {
    this.timer && clearInterval(this.timer);
    const { isTest, answerList, showData } = this.state;
    if (isTest) {
      this.setState(
        produce((state) => {
          state.step = 3;
          state.submitVis = false;
          state.timeoutVis = false;
        }),
      );
    } else {
      // 计算成绩
      const allRight = showData.filter((item) => {
        return Number(answerList[item.index].val) === item.value;
      });
      this.props.nextStep(3, allRight.length);
    }
  };
  // 看題
  renderStep1 = () => {
    const { showData, showIndex, realTime } = this.state;
    const obj = showData.length ? showData[showIndex] : {};
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    return (
      <Wrap title={'请在倒计时结束之前记住数字和对应位置 (共1次诊断)'}>
        <div className={css.title}>记住数字及对应的位置</div>
        <div className={css.timeout}>
          <div className={css.timeoutName}>记忆时间</div>
          <div className={css.realTime}>{secondstoMin(realTime)}</div>
        </div>
        <div className={css.content}>
          <div className={css.box}>
            {list.map((_, index) => {
              if (index === obj.index) {
                return (
                  <div className={css.numberItem} style={{ color: obj.color }} key={index}>
                    {obj.value}
                  </div>
                );
              } else {
                return <div className={css.numberItem} key={index}></div>;
              }
            })}
          </div>
        </div>
        <div className={css.fixNumer}>共9个数字，记住第{showIndex + 1}个</div>
        <div className={css.btnWrap}>
          <div className={css.btn}>
            <Button onClick={this.showNextNum}>
              {showIndex < 8 ? ' 记住了，下一个数字' : '开始答题'}
            </Button>
          </div>
        </div>
      </Wrap>
    );
  };
  // 做题
  renderStep2 = () => {
    const { answerList, realTime } = this.state;
    return (
      <Wrap title={'请在倒计时结束之前记住数字和对应位置 (共1次诊断)'}>
        <div className={css.title}>写下数字及对应的位置</div>
        <div className={css.timeout}>
          <div className={css.timeoutName}>记忆时间</div>
          <div className={css.realTime}>{secondstoMin(realTime)}</div>
        </div>
        <div className={css.content}>
          <div className={css.box}>
            {answerList.map((item, index) => {
              return (
                <div className={css.numberItem} key={item.id}>
                  <input
                    value={item.val}
                    maxLength="2"
                    type="tel"
                    id={`id${item.id}`}
                    onChange={(event) => {
                      const val = event.target.value;
                      this.setState(
                        produce((state) => {
                          state.answerList[index].val = val;
                        }),
                      );
                    }}
                    className={css.numberItemInput}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={css.fixNumer}></div>
        <div className={css.btnWrap}>
          <div className={css.btn}>
            <Button onClick={this.toSubmit}>提交</Button>
          </div>
        </div>
      </Wrap>
    );
  };
  // 练习结果
  renderStep3 = () => {
    const { showData, answerList } = this.state;
    const arr = [];
    for (let i = 0; i < answerList.length; i++) {
      arr[i] = '';
      for (let j = 0; j < showData.length; j++) {
        if (i === showData[j].index) {
          arr[i] = showData[j].value;
          break;
        }
      }
    }
    const isRight = showData.filter((item) => {
      return Number(answerList[item.index].val) === item.value;
    });
    return (
      <ResultTest
        isRight={isRight.length === 9}
        title={isRight.length === 9 ? '记忆正确' : '记忆错误'}
        onPlay={() => {
          this.onPlay(false);
        }}
      >
        <div className={css.rightAnswer}>
          <SubTag color={'#44b979'}>正确答案</SubTag>
          <div className={css.numberRightWrap}>
            {arr.map((item, index) => (
              <div className={css.numberItem2} key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </ResultTest>
    );
  };
  renderContent = () => {
    const { step } = this.state;
    switch (step) {
      case 1:
        return this.renderStep1();
      case 2:
        return this.renderStep2();
      case 3:
        return this.renderStep3();
      default:
        return null;
    }
  };
  render() {
    const { submitVis, timeoutVis } = this.state;
    return (
      <Fragment>
        {this.renderContent()}
        <ModalComfirm
          visable={submitVis}
          title="填好了，去提交"
          btnList={[
            {
              text: '再想想',
              onClick: () => {
                this.setState(
                  produce((state) => {
                    state.submitVis = false;
                  }),
                );
              },
            },
            {
              text: '提交',
              textColor: '#44B979',
              onClick: () => {
                this.toResultPage();
              },
            },
          ]}
        />
        <ModalTimeout
          visable={timeoutVis}
          onClose={() => {
            this.toResultPage();
          }}
        />
        <ModalNotice
          visable={this.state.visable}
          title="空间位置记忆诊断"
          contentMsg={[
            {
              title: '规则提醒：',
              text: [
                '请在限定时间内记住方框中出现的数字及对应位置，然后在答题框相应位置中填写记住的数字，可先练习再进入测评。',
              ],
            },
          ]}
          warningText="建议双手操作以确保速度！"
          onTest={() => {
            this.onPlay(true);
          }}
          onPlay={() => {
            this.onPlay(false);
          }}
        />
      </Fragment>
    );
  }
}

export default Deep;
