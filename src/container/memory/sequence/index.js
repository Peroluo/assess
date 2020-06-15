/*
 * @Descripttion: 顺序记忆
 * @Author: luoguoxiong
 * @Date: 2020-06-03 19:57:38
 * @LastEditTime: 2020-06-08 14:48:21
 */

import React, { Fragment } from 'react';
import ModalNotice from '@/component/ModalNotice';
import question from './question';
import Wrap from '../wrap';
import Timeout from '../timeout';
import ResultTest from '@/component/ResultTest';
import { MemoryResult } from '@/component/Result';
import ModalComfirm from '@/component/ModalComfirm';
import { produce } from 'immer';
import css from './index.less';
import SubTag from '@/component/SubTag';
import { createNumber, createInput } from '@/utils';
import Button from '@/component/Button';
import ModalTimeout from '@/component/ModalTimeout';
const Timeouts = 10;
class Sequence extends React.Component {
  state = {
    step: 2,
    visable: true,
    isTest: true, // 是否是练习
    showText: [], // 题目
    rightText: [], //答案
    answerList: [], // 用户所填表单
    score: 0, //分数
    submitVis: false, // 提交确认弹框
    timeoutVis: false, // 时间到弹窗
  };

  createGameData = (len = 9) => {
    const indexs = createNumber(0, question.length - 1, len);
    const showText = [];
    const rightText = [];
    for (let i = 0; i < len; i++) {
      const words = (showText[i] = question[indexs[i]]);
      const right = words[words.length - 3] + words[words.length - 2];
      rightText[i] = right;
    }
    return { showText, rightText };
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
    const { answerList, rightText, isTest } = this.state;
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
      let score = 0;
      const rights = answerList.map((item) => item.val);
      for (let i = 0; i < rightText.length; i++) {
        if (rightText[i] === rights[i]) {
          score = i + 1;
        } else {
          break;
        }
      }
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
  // 开始看題
  onPlay = (isTest) => {
    const { showText, rightText } = this.createGameData();
    const answerList = createInput(9);
    this.setState(
      produce((state) => {
        state.step = 1;
        state.isTest = isTest;
        state.visable = false;
        state.showText = showText;
        state.rightText = rightText;
        state.answerList = answerList;
      }),
    );
  };

  // 超时
  isTimeout = () => {
    this.setState(
      produce((state) => {
        state.timeoutVis = true;
        state.submitVis = false;
      }),
    );
  };
  // 去答题
  toAnswer = () => {
    this.setState(
      produce((state) => {
        state.step = 2;
      }),
    );
  };
  // 练习结果
  renderStep3 = () => {
    const { rightText, answerList } = this.state;
    let isRight = answerList.every((item, index) => {
      return item.val === rightText[index];
    });
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
            {rightText.map((item) => (
              <div className={css.numberItem} key={item}>
                <div className={css.numberBox}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </ResultTest>
    );
  };
  // 切换下一个测评
  toNext = () => {
    this.props.nextStep(2, this.state.score);
  };

  // 测评结果
  renderStep4 = () => {
    const { score } = this.state;
    return (
      <MemoryResult
        score={score}
        scoreText={`言语工作记忆广度为${score}个组块`}
        btnText={'进行空间位置记忆诊断'}
        description={
          '你专注力的表现为：良好，超越了68%的同龄人，请继续保持，你的持之以恒将会有更大的收获！'
        }
        toNext={this.toNext}
      />
    );
  };

  renderContent = () => {
    const { step, showText, answerList, visable } = this.state;

    switch (step) {
      case 1:
        return (
          <Wrap title={'请在倒计时结束之前记住每句最后两个字(共1次诊断)'}>
            <div className={css.title}>记住以下句子的最后两个字</div>
            {!visable && (
              <Timeout seconds={Timeouts} name="记忆时间" onOver={this.toAnswer} key={1} />
            )}
            <div className={css.textWrap}>
              {showText.map((item, index) => (
                <div className={css.textItem} key={index}>
                  {item}
                </div>
              ))}
            </div>
            <div className={css.btnWrap}>
              <div className={css.btn}>
                <Button onClick={this.toAnswer}>记住了，开始答题</Button>
              </div>
            </div>
          </Wrap>
        );
      case 2:
        return (
          <Wrap title={'请在倒计时结束之前记住每句最后两个字(共1次诊断)'}>
            <div className={css.title}>顺序写下句子的最后两个字</div>
            {!visable && (
              <Timeout seconds={Timeouts} name="剩余答题时间" onOver={this.isTimeout} key={2} />
            )}
            <div className={css.answernumberWrap}>
              {answerList.map((item, index) => (
                <div className={css.numberItem} key={item.id}>
                  <div className={css.numberBox}>
                    <input
                      value={item.val}
                      maxLength="2"
                      id={`id${item.id}`}
                      onChange={(event) => {
                        const val = event.target.value;
                        this.setState(
                          produce((state) => {
                            state.answerList[index].val = val;
                          }),
                          () => {
                            const reg = /^[\u4E00-\u9FA5]+$/;
                            if (
                              reg.test(val) &&
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
              <div className={css.btn} onClick={this.toResult}>
                <Button onClick={this.toResult}>提 交</Button>
              </div>
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
          title="顺序记忆诊断"
          contentMsg={[
            {
              title: '规则提醒：',
              text: [
                '请在限定时间内记住下面每个句子的最后2个字，并按顺序写出来，可先练习再进入测评',
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

export default Sequence;
