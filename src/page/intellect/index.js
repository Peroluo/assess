import React from 'react';
import styles from './index.less';
import Wrap from '@/components/wrap';
import alert from '../memory/Op/alert';
import Button from '../memory/Op/button';
import AnswerWrap from './wrap';
import HomeWrap from '@/components/homeWrap';
import NoticeMsg from '@/components/noticeMsg';
import timeoutAlert from '../memory/Op/timeoutAlert';
import ModelIntroduction from '../memory/Op/modelIntroduction';
import ResultWrap from '../memory/Op/reasultWrap';
import Progress from '../../components/progress';
import Toasts from '@/components/Toast';
import Loading from '@/components/Loading';
import { Prompt } from 'react-router-dom';
import Router from 'umi/router';
import { Toast } from 'antd-mobile';
import { games } from './game';
import Timeout from './timeout';
import { saveUserScores } from '@/services/api';
import { connect } from 'dva';
import RunAnimate from './RunAnimate';
import Track from '@/utils/track';
const state = localStorage.getItem('state');

let newGame;
@connect(({ globalStat }) => ({ globalStat }))
class Intellect extends React.Component {
  constructor(props) {
    super(props);
    this.alertId = null;
    this.routerAlertId = null;
    games.forEach(item => {
      item.choose = -1;
    });
    newGame = games;
    // 重置用户id
    this.state = {
      status: 0, // 0介绍、1答题、2结果、3测评意义、4完成测评
      showAnyBtn: false, // 是否显示button
      isTest: true, // 练习 Or 测评
      isComplete: false, // 是否完成本次测评
      showNotice: false, //是否显示意义
      testGame: newGame.slice(0, 1),
      playGame: newGame.slice(1, newGame.length),
      page: 1,
      total: newGame.length - 1,
      showReAlert: false, // 完成测评弹窗
      // 图片预加载
      imgLoad: 0, // 图片资源加载下标
      imgLoadingVal: 0, //加载进度条
      userTime: [],
      userSeconds: 0,
    };
  }

  componentDidMount() {
    // 图片预加载
    this.loadingImg(0);
  }
  // 图片预加载
  imgLoad(arr) {
    const img = new Image();
    img.src = arr[this.state.imgLoad];
    img.onload = () => {
      let _w = Math.floor(((this.state.imgLoad + 1) / arr.length) * 100);
      this.setState({ imgLoadingVal: _w, imgLoad: this.state.imgLoad + 1 }, () => {
        if (this.state.imgLoad < arr.length) {
          this.imgLoad(arr);
        }
      });
    };
  }
  createImgLoad(url) {
    const img = new Image();
    img.src = url;
  }

  // 图片预加载
  loadingImg() {
    let arr = [];
    for (let i = 0; i <= 10; i++) {
      arr.push(`/images/intellect/${newGame[i].title}.png`);
      for (let j = 0; j < newGame[i].list.length; j++) {
        arr.push(`/images/intellect/${newGame[i].list[j]}.png`);
      }
    }
    arr.push('./images/rightUse.png');
    this.imgLoad(arr);
  }
  //当前状态  0介绍、1答题、2结果、3测评意义
  renderStatus(status) {
    switch (status) {
      case 0:
        return this.introductionRender();
      case 1:
        return this.showRender();
      case 2:
        return this.resultRender();
      case 4:
        return this.completeRender();
      default:
        return null;
    }
  }
  // 意义弹窗
  introducRender() {
    return (
      <ModelIntroduction
        title="测评介绍"
        topArticle="推理力测评一共有72个题目构成。按照题目难度逐渐增加的顺序分为A、AB、B、C、D、E六组，前三组为彩色题目，后三组为黑白题目。"
        bottomArticle="推理力测评主要测评的是一个人的观察力、清晰思维的能力和作出理性判断的能力，即推理能力。"
        onClose={() => {
          this.setState({ showNotice: false });
        }}
      ></ModelIntroduction>
    );
  }
  // 弹窗
  showAlert = () => {
    this.alertId = alert(
      '确定提交？',
      '取消',
      '提交',
      () => {
        this.alertId.close();
      },
      () => {
        this.submitScore();
      },
    );
  };
  // 介绍
  introductionRender() {
    return (
      <HomeWrap
        onBack={() => {
          Router.push(`/?${state}`);
        }}
        hasNotice
        showNotice={() => {
          this.setState({ showNotice: true });
        }}
        title={'推理力测评'}
      >
        <NoticeMsg
          msgList={[
            '请在40分钟内，根据以下每道题中大图案的规律选择哪一个小图放在大图缺少部分最合适',
            '可先练习再开始测评',
          ]}
          toTest={() => {
            Track.tcFnc({
              name: '10036',
              type: 'click',
              extra: {
                isPratice: 1,
              },
            });
            this.setState({ isTest: true, status: 1 });
          }}
          isTest
          toPlay={() => {
            Track.tcFnc({
              name: '10036',
              type: 'click',
              extra: {
                isPratice: 0,
              },
            });
            this.setState({ isTest: false, status: 1 });
          }}
        ></NoticeMsg>
        {this.state.showNotice && this.introducRender()}
      </HomeWrap>
    );
  }
  // 练习结果
  resultRender() {
    const [{ choose, active }] = this.state.testGame;
    return (
      <ResultWrap
        onBack={() => {
          Router.push(`/?${state}`);
        }}
        isRight={choose === active}
        status={choose === active ? '推理正确' : false}
        onStart={() => {
          Track.tcFnc({
            name: '10038',
            type: 'click',
          });
          this.setState({ isTest: false, status: 1 });
        }}
      >
        {choose !== active && (
          <div className={styles.errorWrap}>
            <div className={styles.notices}>正确答案：</div>
            <img src="/images/rightUse.png" alt="rightUse" className={styles.rightUse}></img>
          </div>
        )}
      </ResultWrap>
    );
  }
  showCompleteAlert() {
    this.alertId && this.alertId.close();
    this.alertId = alert(
      '测评完成，直接提交吗?',
      '再想想',
      '提交',
      () => {
        this.alertId.close();
      },
      () => {
        this.submitScore();
      },
    );
  }
  // 避免重复渲染
  shouldComponentUpdate(props, state) {
    if (state.userTime !== this.state.userTime && state.userSeconds !== this.state.userSeconds) {
      return false;
    }
    return true;
  }
  // 做题
  showRender() {
    const { isTest, page, total, playGame, testGame } = this.state;
    let game, arr; // game显示题目,arr测评中，用户已完成的题目

    if (isTest) {
      game = testGame[0];
    } else {
      game = playGame[page - 1];
      arr = playGame.filter(item => {
        return item.choose !== -1;
      });
    }
    const { list, choose, title } = game;
    return (
      <AnswerWrap
        onBack={() => {
          Router.push(`/?${state}`);
        }}
        title={
          !isTest && (
            <div className={styles.clockTitle}>
              <img src="/images/clock.png" alt="clock"></img>
              <Timeout
                seconds={40 * 60}
                onChange={(val, secondes) => {
                  this.setState({ userTime: val, userSeconds: secondes });
                }}
                onOver={() => {
                  this.alertId && this.alertId.close();
                  this.timeoutId = timeoutAlert('剩余答题时间为0', () => {
                    this.timeoutId.close();
                    this.submitScore();
                  });
                }}
              ></Timeout>
            </div>
          )
        }
        rightTitle={
          !isTest && arr.length === total ? <div className={styles.submitBtn}>提交</div> : ''
        }
        clickRight={() => {
          if (!isTest && arr.length === total) {
            this.showCompleteAlert();
          }
        }}
        footer={
          isTest ? (
            <div
              className={styles.complete}
              onClick={() => {
                if (testGame[0].choose !== -1) {
                  Track.tcFnc({
                    name: '10037',
                    type: 'click',
                  });
                  this.setState({ status: 2 });
                }
              }}
            >
              完成练习
            </div>
          ) : (
            <div className={styles.progress}>
              <div className={styles.progressInner}>
                <Progress
                  onChange={val => {
                    // 没有做题提示用户选择做题
                    if (game.choose === -1 && val > page) {
                      Toasts.info(
                        <div className={styles.coustomesToast}>请选择一个选项</div>,
                        1000,
                      );
                    } else {
                      Track.tcFnc({
                        name: '10039',
                        type: 'click',
                        extra: {
                          page: val,
                        },
                      });
                      this.setState({ page: val });
                    }
                  }}
                  page={page}
                  total={total}
                  value={arr.length}
                ></Progress>
              </div>
            </div>
          )
        }
      >
        <RunAnimate page={page} height={list.length > 6 ? '12.68rem' : '11.68rem'}>
          <div className={styles.imgCosa}>
            <img src={`/images/intellect/${title}.png`} alt={'ss'}></img>
          </div>
          <div className={styles.testNotice}>请选择一个符合的选项({list.length}选1)</div>
          <div
            className={styles.answerList}
            style={{ height: list.length > 6 ? '7rem' : '6rem' }}
            key={page}
          >
            {list.map((item, index) => {
              return (
                <div
                  className={styles.answerItem}
                  key={item}
                  onClick={() => {
                    Track.tcFnc({
                      name: 'intellectAnswer',
                      extra: {
                        isPratice: isTest ? 1 : 0,
                        page,
                        bTntext: index + 1,
                      },
                    });
                    if (isTest) {
                      let newgame = [...testGame];
                      newgame[0].choose = index;
                      this.setState({ testGame: newgame });
                    } else {
                      let newgame = [...playGame];
                      newgame[page - 1].choose = index;
                      // 未完成题目，选择后自动跳转到下一题
                      if (arr.length < total) {
                        if (page + 1 > total) {
                          this.setState({ game: newgame });
                          this.showCompleteAlert();
                        } else {
                          this.setState({ game: newgame }, () => {
                            this.setState({ page: page + 1 }, () => {
                              if (page + 10 <= newGame.length - 1) {
                                for (let i = page + 10; i <= page + 10; i++) {
                                  this.createImgLoad(`/images/intellect/${newGame[i].title}.png`);
                                  for (let j = 0; j < newGame[i].list.length; j++) {
                                    this.createImgLoad(
                                      `/images/intellect/${newGame[i].list[j]}.png`,
                                    );
                                  }
                                }
                              }
                            });
                          });
                        }
                      } else {
                        this.setState({ game: newgame });
                      }
                    }
                  }}
                >
                  <div className={styles.circleWrap}>
                    <div className={styles.circle}>
                      {choose === index ? <img src="/images/choose.png" alt="ss" /> : null}
                    </div>
                  </div>
                  <div className={styles.itemImg}>
                    <img src={`/images/intellect/${item}.png`} alt="ss"></img>
                  </div>
                </div>
              );
            })}
          </div>
        </RunAnimate>
      </AnswerWrap>
    );
  }

  // 结果弹窗
  reAlertRender() {
    return (
      <ModelIntroduction
        title="结果说明"
        topArticle="本测评结果中的标准分Z表示的是个人的能力水平在相应年龄层次人群中的相对位置，代表你超越了相应人群百分之几的人。"
        bottomArticle="智力商数（Intelligence Quotient）衡量了个人智商高低的标准。按照智力水平分级标准，智力商数(简称智商)可分为超常、良好、中等、中下、边缘、低下六个等级。"
        onClose={() => {
          this.setState({ showReAlert: false });
        }}
      ></ModelIntroduction>
    );
  }
  // 统计分数
  computedScore(bithday) {
    const year = new Date(bithday).getFullYear();
    const month = new Date(bithday).getMonth() + 1;
    const day = new Date(bithday).getDate();
    console.log(year, month, day);
    let time = new Date();
    let years = time.getFullYear();
    let months = time.getMonth() + 1;
    let days = time.getDate();
    let newDay = 0;
    let newMonth = 0;
    let newYear = 0;
    if (days < day) {
      newDay = days + 30 - day;
      months = months - 1;
      if (months < month) {
        newMonth = months + 12 - month;
        newYear = years - 1 - year;
      } else {
        newMonth = months - month;
        newYear = years - year;
      }
    } else {
      newDay = days - day;
      if (months < month) {
        newMonth = months + 12 - month;
        newYear = years - 1 - year;
      } else {
        newMonth = months - month;
        newYear = years - year;
      }
    }
    if (newMonth > 6 && newDay > 1) {
      return (newYear += 0.5);
    } else {
      return newYear;
    }
  }
  // 提交成绩
  async submitScore() {
    const score = this.state.playGame.filter(item => {
      return item.choose === item.active;
    }).length;
    Track.tcFnc({
      name: '10040',
      extra: {
        score,
        useTime: this.state.userSeconds,
      },
    });
    try {
      await saveUserScores({
        userId: this.props.globalStat.userInfo.id,
        platform: 0,
        version: this.props.globalStat.ceType,
        stage: 3,
        channel: 0,
        extraInfoTime: this.state.userSeconds,
        extraInfoCount: score,
        childStage: 0,
      });
      Toast.hide();
      this.setState({ status: 4, isComplete: true });
    } catch (e) {
      Toast.hide();
    }
  }
  // 完成测评
  completeRender() {
    return (
      <Wrap
        onBack={() => {
          Router.push(`/?${state}`);
          Track.tcFnc({
            name: 'intellectResult',
          });
        }}
        title={'推理力测评'}
        noPadding
      >
        <div className={styles.result}>
          <div className={styles.title}>
            <div className={styles.circle}></div>
            <div className={styles.titleName}>你的成绩</div>
            <div className={styles.circle}></div>
          </div>

          <div className={styles.score}>{`${this.state.userTime[0] +
            "'" +
            this.state.userTime[1] +
            '"'}`}</div>
          <div className={styles.otherdiv}>
            {`你已完成推理力测评，共用时${this.state.userTime[0]}分${this.state.userTime[1]}秒`}，
          </div>
          <div className={styles.otherdiv}>详细分析结果将在完整诊断报告中提供。</div>

          <div className={styles.btnWrap}>
            <Button
              onTabEvent={() => {
                Router.push(`/baseHome?${state}`);
              }}
            >
              返回首页
            </Button>
          </div>
        </div>
      </Wrap>
    );
  }

  render() {
    return (
      <div id={styles.free}>
        {/* {this.state.imgLoadingVal < 100 ? (
          <div className={styles.loadingImg}>
            <div className={styles.loadingImgCircle}></div>
            <div className={styles.progressVal}>{this.state.imgLoadingVal}%</div>
          </div>
        ) : (
          this.renderStatus(this.state.status)
          )} */}
        {this.state.imgLoadingVal < 100 ? (
          <Loading></Loading>
        ) : (
          this.renderStatus(this.state.status)
        )}

        {/* 当本次测评未完成，需提醒用户 */}
        <Prompt
          when={!this.state.isComplete && this.state.status !== 0}
          message={location => {
            this.routerAlertId && this.routerAlertId.close();
            this.timeoutId && this.timeoutId.close();
            this.alertId && this.alertId.close();
            if (this.setState.isComplete && this.state.status === 0) {
              return true;
            }
            this.routerAlertId = alert(
              <span>
                中途退出将不保存测评记录
                <br />
                确认退出吗？
              </span>,
              '取消',
              '确定',
              () => {},
              () => {
                this.setState({ isComplete: true }, () => {
                  Router.push(`/?${state}`);
                });
              },
              0,
            );
            return false;
          }}
        ></Prompt>
      </div>
    );
  }
}

export default Intellect;
