/*
 * @Descripttion: 自由记忆
 * @Author: luoguoxiong
 * @Date: 2020-06-03 19:57:24
 * @LastEditTime: 2020-06-08 14:47:32
 */

import React, { Fragment } from 'react';
import ModalNotice from '@/component/ModalNotice';
import ModalTimeout from '@/component/ModalTimeout';
import Wrap from '../wrap';
import Timeout from '../timeout';
import ResultTest from '@/component/ResultTest';
import { MemoryResult } from '@/component/Result';
import ModalComfirm from '@/component/ModalComfirm';
import { produce } from 'immer';
import SubTag from '@/component/SubTag';
import Button from '@/component/Button';
import css from './index.less';
import { createNumber, createInput } from '@/utils';
const Timeouts = 10;
class Free extends React.Component {
  state = {
    visable: true, //介绍弹窗
    step: 1, // 1看题，2做题，3练习结果，4测评结果
    isTest: true, // 练习模式
    numberList: [],
    answerList: [], // 用户所填表单
    score: 0, //分数
    submitVis: false, // 提交确认弹框
    timeoutVis: false, // 时间到弹窗
  };
  // 开始练习
  onPlay = (isTest) => {
    this.setState(
      produce((state) => {
        state.step = 1;
        state.isTest = isTest;
        state.numberList = createNumber(10, 99, 12);
        state.answerList = createInput(12);
        state.visable = false;
      }),
    );
  };

  // 开始答题
  toAnswer = () => {
    this.setState(
      produce((state) => {
        state.step = 2;
      }),
    );
  };

  // 提交答案
  toResult = () => {
    this.setState(
      produce((state) => {
        state.submitVis = true;
      }),
    );
  };

  // 跳转到结果页
  toResultPage = () => {
    const { answerList, numberList, isTest } = this.state;
    this.timeer && clearInterval(this.timeer);
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
      const answers = answerList.map((item) => Number(item.val)).filter((item) => item);
      const all = Array.from(new Set(answers));
      const score = numberList.filter((item) => all.includes(item)).length;
      this.setState(
        produce((state) => {
          state.step = 4;
          state.score = score;
          state.submitVis = false;
          state.timeoutVis = false;
        }),
      );
    }
  };

  // 切换下一个测评
  toNext = () => {
    this.props.nextStep(1, this.state.score);
  };

  // 时间到
  isTimeout = () => {
    this.setState(
      produce((state) => {
        state.timeoutVis = true;
        state.submitVis = false;
      }),
    );
  };
  // 测评结果
  renderStep4 = () => {
    const { score } = this.state;
    return (
      <MemoryResult
        score={score}
        scoreText={`数字记忆广度为${score}个组块`}
        btnText={'进行顺序记忆诊断'}
        description={
          '你专注力的表现为：良好，超越了68%的同龄人，请继续保持，你的持之以恒将会有更大的收获！'
        }
        toNext={this.toNext}
      />
    );
  };
  // 练习结果
  renderStep3 = () => {
    const { numberList, answerList } = this.state;
    let isRight = numberList.every((item) =>
      answerList.map((item) => Number(item.val)).includes(item),
    );
    return (
      <ResultTest
        isRight={isRight}
        title={isRight ? '记忆正确' : '记忆错误'}
        onPlay={() => {
          this.onPlay(false);
        }}
      >
        <div className={css.rightAnswer}>
          <SubTag color={'#44b979'}>正确答案</SubTag>
          <div className={css.numberRightWrap}>
            {numberList.map((item) => (
              <div className={css.numberItem} key={item}>
                <div className={css.numberBox}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </ResultTest>
    );
  };

  renderContent = () => {
    const { step, numberList, answerList, visable } = this.state;

    switch (step) {
      case 1:
        return (
          <Wrap title={'请在倒计时结束之前记住数字和对应位置 (共1次测评)'}>
            <div className={css.title}>请记住以下数字</div>
            {!visable && (
              <Timeout seconds={Timeouts} name="记忆时间" onOver={this.toAnswer} key={1} />
            )}
            <div className={css.numberWrap}>
              {numberList.map((item) => (
                <div className={css.numberItem} key={item}>
                  <div className={css.numberBox}>{item}</div>
                </div>
              ))}
            </div>
            <div className={css.btnWrap}>
              <Button onClick={this.toAnswer}>记住了，开始答题</Button>
            </div>
          </Wrap>
        );
      case 2:
        return (
          <Wrap title={'请在倒计时结束之前记住数字和对应位置 (共1次测评)'}>
            <div className={css.title}>写下你记住的数字</div>
            {!visable && (
              <Timeout
                seconds={Timeouts}
                name="剩余答题时间"
                key={2}
                onOver={() => {
                  this.isTimeout();
                }}
              ></Timeout>
            )}
            <div className={css.answernumberWrap}>
              {answerList.map((item, index) => (
                <div className={css.numberItem} key={item.id}>
                  <div className={css.numberBox}>
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
                          () => {
                            if (
                              val.length === 2 &&
                              document.getElementById(`id${parseInt(item.id) + 1}`)
                            ) {
                              document.getElementById(`id${parseInt(item.id) + 1}`).focus();
                            }
                          },
                        );
                      }}
                      className={css.numberItemInput}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className={css.btnWrap}>
              <Button onClick={this.toResult}>提交</Button>
            </div>
          </Wrap>
        );
      case 3:
        return this.renderStep3();
      case 4:
        return this.renderStep4();
      default:
        return null;
    }
  };

  render() {
    const { submitVis, timeoutVis } = this.state;
    return (
      <Fragment>
        {this.renderContent()}
        <ModalNotice
          visable={this.state.visable}
          title="记忆力测评"
          contentMsg={[
            {
              title: '测评介绍：',
              text: [
                '工作记忆是人脑对外界信息进行暂时存储和加工的重要记忆系统。大量研究表明工作记忆主要通过阅读理解、写作和数学问题解决等方面的能力而影响学生的学习成绩。',
                '记忆力测评主要通过自由回忆、顺序记忆和空间位置记忆三种测评方式客观评估学生的工作记忆容量，帮助学生清楚了解自己的工作记忆水平。',
              ],
            },
            {
              title: '自由回忆规则提醒：',
              text: [
                '请在限定时间内记住下面出现的数字，然后写出来（可以颠倒位置）可先练习再进入测评。',
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
        ></ModalNotice>
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
        ></ModalComfirm>
        <ModalTimeout
          visable={timeoutVis}
          onClose={() => {
            this.toResultPage();
          }}
        ></ModalTimeout>
      </Fragment>
    );
  }
}

export default Free;
