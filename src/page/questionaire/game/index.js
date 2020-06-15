import React, { Component } from 'react';
import { Picker, List, Toast, Modal, InputItem, TextareaItem, DatePicker } from 'antd-mobile';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import classNames from 'classnames';
import { saveUserScores } from '@/services/api';
import styles from './index.less';
import router from 'umi/router';
import { Prompt, ContentBox, Pop, PopPlus } from '@/components/index';
import parentsData from './parentsData';
import studentData from './studentData';
import testData from './testData';
import Track from '../../../utils/track';
import moment from 'moment';
import _ from 'lodash';
const alert = Modal.alert;
@connect(({ globalStat }) => ({ globalStat }))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionObj: {},
      metaData: {},
      currentNum: 0,
      questionCount: 0,
      role: '',
      state: '',
      type: '',
      when: false,
      showPage: false,
      showPop: true,
      showAlert: true, //防止多次点击提交
      chooseSubject: [],
      subjectMaxId: -1, //最大
    };
  }
  componentDidMount() {
    const { query } = this.props.location;
    const { role, state } = query;
    const obj = { '2': '30', '3': '200' };
    const type = obj[this.props.globalStat.ceType];
    let metaData = role === 'student' ? studentData : parentsData;
    metaData = metaData.map(item => {
      item.value = '';
      return item;
    });
    metaData = metaData.filter(item => item.quesType.includes(type));
    const questionObj = _.cloneDeep(metaData);
    this.setState({
      type,
      metaData,
      role,
      state,
      questionObj,
      showPage: true,
      questionCount: questionObj.length,
    });
  }
  renderContent = () => {
    const { currentNum, questionObj, chooseSubject, role } = this.state;
    const currentContent = questionObj[currentNum];
    const { getFieldProps } = this.props.form;

    return (
      <div className={styles.content}>
        <div className={styles.title_wrap}>
          <div className={styles.title}>
            {`${currentNum + 1}. ${currentContent.title}`}
            {currentContent.type === 'multiSelect' && <span>可多选</span>}
          </div>
        </div>
        <div className={styles.item_wrap} ref={ref => (this.ref = ref)}>
          {(currentContent.type === 'select' || typeof currentContent.type === 'undefined') && (
            <div className={styles.type_select}>
              {currentContent.choose.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={this.chooseItem.bind(this, item)}
                    className={classNames(styles.item, {
                      [styles.checked]: item.value === currentContent.value,
                      [styles.fixed]: currentContent.style === 'fixed',
                    })}
                  >
                    {item.value}
                  </div>
                );
              })}
            </div>
          )}

          {currentContent.type === 'multiSelect' && (
            <div className={styles.type_select}>
              {currentContent.choose.map((item, index) => {
                {
                  /* console.log(currentContent.value, item.value);如果是19，20，21，82题，且没有选的选项就不展示了 */
                }
                return role === 'student' &&
                  [19, 20, 21, 82].includes(currentContent.id) &&
                  !chooseSubject.includes(item.value) ? null : (
                  <div
                    key={index}
                    onClick={this.chooseMulitiSelect.bind(this, item)}
                    className={classNames(styles.item, {
                      [styles.checked]:
                        Array.isArray(currentContent.value) &&
                        currentContent.value.includes(item.value),
                      [styles.fixed]: currentContent.style === 'fixed',
                    })}
                  >
                    {item.value}
                  </div>
                );
              })}
            </div>
          )}

          {currentContent.type === 'textarea' && (
            <List>
              <TextareaItem
                {...getFieldProps('count', {
                  initialValue: '',
                })}
                rows={8}
                count={300}
                maxLength={300}
                placeholder="请输入"
                value={currentContent.value}
                onChange={this.inputOnchange}
                className="antd_textarea"
              />
            </List>
          )}

          {currentContent.type === 'date' && (
            <DatePicker
              mode="date"
              title="选择时间"
              minDate={new Date(1900, 0, 1, 0, 0, 0)}
              extra=" "
              value={currentContent.value}
              onChange={this.chooseDate}
            >
              <List.Item arrow="horizontal">
                <span style={{ color: '#999', fontSize: '16px' }}>选择出生年月日</span>
              </List.Item>
            </DatePicker>
          )}

          {currentContent.type === 'input' && (
            <List className={styles.input_list}>
              <InputItem
                {...getFieldProps('control')}
                placeholder={currentContent.placeholder || '请输入'}
                value={currentContent.value}
                onChange={this.inputOnchange}
                maxLength={currentContent.maxLength}
              ></InputItem>
            </List>
          )}
        </div>
        <div className={styles.blur}></div>
      </div>
    );
  };

  chooseDate = date => {
    const { currentNum, questionObj } = this.state;
    questionObj[currentNum].value = date;
    this.setState({
      questionObj,
    });
  };

  chooseMulitiSelect = item => {
    const { currentNum, questionObj } = this.state;
    const currentContent = questionObj[currentNum];
    let value = Array.isArray(currentContent.value) ? currentContent.value : [];
    // 包含
    if (value.includes(item.value)) {
      value = value.filter(list => list !== item.value);
    }
    // 不包含
    else {
      value.push(item.value);
    }
    value = value.length === 0 ? '' : value;
    questionObj[currentNum].value = value;
    if ([34].includes(currentContent.id) && value) {
      const chooseItems = currentContent.choose.filter(
        item => value.includes(item) && isFinite(item.score),
      );
      if (chooseItems.length > 0) {
        questionObj[currentNum].score = chooseItems.reduce((a, b) => a + b);
      }
    }
    this.setState({
      questionObj,
    });
  };

  inputOnchange = e => {
    const { currentNum, questionObj } = this.state;
    questionObj[currentNum].value = e.trim();
    if (questionObj[currentNum].reg) {
      questionObj[currentNum].typeIsRight = questionObj[currentNum].reg.test(e);
    }
    this.setState({
      questionObj,
    });
  };

  updateQuestionObj = chooseItem => {
    const { currentNum, questionObj, role, type, subjectMaxId } = this.state;
    let newQuestionData = _.cloneDeep(questionObj);

    const currentItem = questionObj[currentNum];
    if (role === 'parents') {
      if (currentItem.id === 1) {
        if (!['爸爸', '妈妈'].includes(currentItem.value)) {
          newQuestionData = this.concatData([3, 5, 7]);
        }
      }
      if (currentItem.id === 3) {
        if (!['初婚', '再婚', '复婚'].includes(currentItem.value)) {
          newQuestionData = this.concatData([5, 7]);
        }
      }
      if (currentItem.id === 9) {
        if ([7, 8, 9].includes(this.props.globalStat.userInfo.gradeId)) {
          // 初中生
          newQuestionData = this.concatData([10]);
        }
        if ([10, 11, 12].includes(this.props.globalStat.userInfo.gradeId)) {
          // 初中生
          newQuestionData = this.concatData([11]);
        }
      }

      if (currentItem.id === 41) {
        if (['正在恋爱中', '有暗恋的对象'].includes(currentItem.value)) {
          newQuestionData = this.concatData([43, 44]);
        }
        if (['都没有'].includes(currentItem.value)) {
          newQuestionData = this.concatData([42]);
        }
        if (['我也不知道'].includes(currentItem.value)) {
          newQuestionData = this.concatData([42, 43, 44]);
        }
      }

      if (currentItem.id === 43) {
        if (['不需要有', '我也不知道'].includes(currentItem.value)) {
          newQuestionData = this.concatData([44]);
        }
      }

      if (currentItem.id === 70) {
        if (questionObj.filter(item => item.id === 5).length > 0) {
          // 如果回答了配偶为5的这道题，可以认为用户角色选择了爸爸或妈妈，且婚姻状况选择了初婚、再婚、复婚
        } else {
          newQuestionData = this.concatData([72, 73]);
        }
      }

      if (currentItem.id === 75) {
        if (currentItem.value === '不愿意') {
          newQuestionData = this.concatData([77, 78, 79, 80, 81, 82, 83]);
        } else {
          newQuestionData = this.concatData([76]);
        }
      }

      if (currentItem.id === 77) {
        if (currentItem.value === '没有参加过') {
          newQuestionData = this.concatData([78, 79, 80, 81, 82]);
        }
        if (['有,现在在参加', '参加过,现在不参加了'].includes(currentItem.value)) {
          newQuestionData = this.concatData([83]);
        }
      }
    }

    if (role === 'student') {
      if (currentItem.id === 2) {
        if ([7, 8, 9].includes(this.props.globalStat.userInfo.gradeId)) {
          // 初中生
          newQuestionData = this.concatData([3]);
        }
        if ([10, 11, 12].includes(this.props.globalStat.userInfo.gradeId)) {
          // 初中生
          newQuestionData = this.concatData([4]);
        }
      }
      if (currentItem.id === 8) {
        // 根据选择的科目显示后续题目
        const obj = {
          语文: 9,
          数学: 10,
          外语: 11,
          '生物（生命科学）': 12,
          化学: 13,
          物理: 14,
          地理: 15,
          历史: 16,
          '政治（道德与法制）': 17,
          技术: 18,
        };
        const value = currentItem.value;
        const subjectIds = value.map(item => obj[item]);
        const maxId = Math.max(...subjectIds);
        this.setState({
          chooseSubject: value,
          subjectMaxId: maxId,
        });
        // const ids = value.map(item => obj[item])//选中选项的id
        // 未选中选项的id
        const notIds = [];
        for (let key in obj) {
          if (!value.includes(key)) {
            notIds.push(obj[key]);
          }
        }
        newQuestionData = this.concatData(notIds);
      }

      if (currentItem.id === subjectMaxId) {
        const num = this.getNum([9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 'diff');
        const extraIds = [];
        for (let i = subjectMaxId + 1; i < 19; i++) {
          extraIds.push(i);
        }
        if (num < 3) {
          // 不偏科，跳过[19,20,21,22,23]

          newQuestionData = this.concatData([...extraIds, ...[19, 20, 21, 22, 23]]);
        } else {
          newQuestionData = this.concatData(extraIds);
        }
      }

      if ([38, 42, 57, 61, 81].includes(currentItem.id)) {
        const sumMap = {
          38: [36, 37, 38],
          42: [40, 41, 42],
          57: [55, 56, 57],
          61: [59, 60, 61],
          81: [79, 80, 81],
        };
        // 直接用currentItem.id+1更好，但是怕以后有什么幺蛾子
        const removeIdMap = { 38: [39], 42: [43], 57: [58], 61: [62], 81: [82] };
        // 判断是否拖延
        const num = this.getNum(sumMap[currentItem.id], 'sum');
        // debugger;
        if (num === 3) {
          newQuestionData = this.concatData(removeIdMap[currentItem.id]);
        }
      }

      if (currentItem.id === 72) {
        if (currentItem.value === '双亲家庭') {
          // 去掉和抚养人相关的问题
          newQuestionData = this.concatData([75]);
        }
        if (currentItem.value === '单亲，和父亲一起生活') {
          // 去掉和抚养人以及母亲一起的问题
          newQuestionData = this.concatData([74, 75, 76, 77, 78]);
        }
        if (currentItem.value === '单亲，和母亲一起生活') {
          newQuestionData = this.concatData([73, 75, 76, 77, 78]);
        }
        if (currentItem.value === '其他，如和奶奶一起生活等') {
          newQuestionData = this.concatData([73, 74, 76, 77, 78]);
        }
      }
      if (currentItem.id === 83) {
        if (currentItem.value === '正在恋爱中') {
          newQuestionData = this.concatData([87, 88, 89, 90, 91, 92, 93]);
        }
        if (currentItem.value === '有暗恋的对象') {
          newQuestionData = this.concatData([84, 85, 86, 90, 91, 92, 93]);
        }
        if (currentItem.value === '都没有') {
          newQuestionData = this.concatData([84, 85, 86, 87, 88, 89]);
        }
      }
      if (currentItem.id === 90) {
        if (currentItem.value === '我不需要有') {
          newQuestionData = this.concatData([91, 92, 93]);
        }
      }

      if (currentItem.id === 90) {
        if (currentItem.value === '我不需要有') {
          newQuestionData = this.concatData([91, 92, 93]);
        }
      }

      if (currentItem.id === 98) {
        if (currentItem.value === '不愿意') {
          newQuestionData = this.concatData([100, 101, 102, 103, 104, 105, 106]);
        } else {
          newQuestionData = this.concatData([99]);
        }
      }

      if (currentItem.id === 100) {
        if (currentItem.value === '没有参加过') {
          newQuestionData = this.concatData([101, 102, 103, 104, 105]);
        } else {
          newQuestionData = this.concatData([106]);
        }
      }
    }
    return newQuestionData;
  };

  getNum = (arr, type) => {
    // diff, sum;
    const { questionObj } = this.state;
    const data = questionObj.filter(item => arr.includes(item.id));
    const score = [];
    data.map(item => {
      item.choose.map(list => {
        if (item.value === list.value) {
          score.push(list.score);
        }
      });
    });
    if (type === 'diff') {
      const min = Math.min.apply(Math, score);
      const max = Math.max.apply(Math, score);
      return max - min;
    }
    if (type === 'sum') {
      const sum = score.reduce((a, b) => a + b);

      return sum;
    }
  };

  chooseItem = chooseItem => {
    const { currentNum, questionObj } = this.state;
    questionObj[currentNum].value = chooseItem.value;
    questionObj[currentNum].score = chooseItem.score;
    this.setState(
      {
        questionObj,
        // questionCount: newQuestionData.length,
      },
      () => {
        setTimeout(() => {
          this.goToNextQuestion();
        }, 400);
      },
    );
  };

  // 过滤掉传进来的题号
  concatData = data => {
    const { currentNum, questionObj, metaData } = this.state;
    let newQuestionData = questionObj.slice(0, currentNum + 1);
    let posId = '';
    metaData.map((item, idx) => {
      if (item.id === questionObj[currentNum].id) {
        posId = idx;
      }
    });
    let surplusData = metaData
      .slice(posId + 1, metaData.length)
      .filter(item => !data.includes(item.id));
    return [...newQuestionData, ...surplusData];
  };
  goToNextQuestion = () => {
    const { currentNum, questionCount, questionObj, role } = this.state;
    const currentItem = questionObj[currentNum];
    if (
      typeof (currentItem.value === 'string') &&
      currentItem.value !== '' &&
      !(
        currentItem.atLeast &&
        currentItem.atLeast > 0 &&
        currentItem.value.length < currentItem.atLeast
      )
    ) {
      if (currentNum < questionCount - 1) {
        if (currentItem.reg && currentItem.typeIsRight === false) {
          Toast.info(currentItem.errorText, 1);
        } else {
          Track.tcFnc({
            name: '10019',
            type: 'click',
            extra: { currentItem },
          });
          let newQuestionData = this.updateQuestionObj();
          let nextNum = currentNum + 1;
          const showPop = newQuestionData[nextNum].tips ? true : false;

          this.setState(
            {
              currentNum: nextNum,
              questionObj: newQuestionData,
              questionCount: newQuestionData.length,
              showPop,
            },
            () => {
              // 内容滚动部分重制，不能在render中，在选择时间就会重置了
              if (this.ref) {
                this.ref.scrollTop = 0;
              }
            },
          );
        }
      } else {
        this.beforeSubmit(currentItem);
      }
    } else {
      if (currentItem.atLeast && currentItem.atLeast > 0) {
        Toast.info(`请至少选择${currentItem.atLeastNUm}个选项`, 1);
      } else {
        Toast.info('请选择一个选项', 1);
      }
    }
  };

  beforeSubmit = currentItem => {
    const { showAlert } = this.state;
    if (showAlert) {
      this.setState(
        {
          showAlert: false,
        },
        () => {
          alert('', <div className="modal_content">诊断完成，直接提交吗？</div>, [
            {
              text: <span className="modal_black_btn">再想想</span>,
              onPress: () => {
                this.setState({ showAlert: true });
              },
            },
            {
              text: <span className="modal_green_btn">提交</span>,
              onPress: () => {
                this.setState({ showAlert: true });
                this.submit();
              },
            },
          ]);
        },
      );
    }
  };

  async submit() {
    const { questionObj, role, type } = this.state;
    let scoreList = questionObj.map(item => {
      const list = {};

      if (type === '30') {
        list.quotaId = item.quotaId30;
        list.path = item.path30;
      }
      if (type === '200') {
        list.quotaId = item.quotaId200;
        list.path = item.path200;
      }

      list.quesId = item.id;
      list.quesType = 0; //目前均为单选
      list.answer = item.value;
      list.score = item.score || item.score === 0 ? item.score : -1;
      if (!list.path) {
        list.score = -1;
      }

      if (item.countScoreType === 'add') {
        // 如果计分方式是累加
        let countScore = 0;
        item.choose.map(a => {
          if (item.value.includes(a.label)) {
            countScore += a.score;
          }
        });

        list.score = countScore;
      }
      if (item.type === 'date') {
        list.answer = moment(new Date(item.value)).format('YYYY-MM-DD HH-mm-ss');
      }

      return list;
    });
    const postData = {
      userId: this.props.globalStat.userInfo.id, //用户ID
      platform: 0, //平台，直接写0
      channel: 0, //渠道 0--公众号 1--小程序
      version: type === '30' ? 2 : 3, // 2--30min版本  3--2hour版本
      stage: role === 'parents' ? 5 : 4, //评测阶段， 0--无阶段，1--专注力，2--记忆力，4--自助诊断，5--辅助诊断
      childStage: 0, //子阶段 0--没有子阶段，1--记忆力自由回忆,  2--记忆力顺序记忆,  3--记忆力空间位置记忆'
      scoreList,
    };

    // 上传str字段
    const result = await saveUserScores(postData);
    if (result.code === 0) {
      this.setState(
        {
          when: true,
        },
        () => {
          const state = localStorage.getItem('state');
          router.push(`/baseHome?${state}`);
          // if (type === '5') {
          //   router.push(`/result/result/result${type}?${state}`);
          // } else {
          //   router.push(`/baseHome?${state}`);
          // }
        },
      );
    } else {
      Toast.info(result.message || '系统繁忙，请稍后再试', 1);
    }
  }
  lastQuestion = () => {
    const { currentNum, questionObj } = this.state;
    const lastNum = currentNum - 1;
    this.setState(
      {
        currentNum: lastNum,
      },
      () => {
        // 后退遇到判断相关的题目，后续题目全部重置
        // const specialData = role === 'student' ? [8, 72, 83, 90,98] : [1, 3, 9, 41, 43, 70,75];
        if (questionObj[lastNum].isJumpQues === true) {
          let newQuestionData = _.cloneDeep(questionObj);
          newQuestionData = this.concatData([]);
          this.setState({
            questionObj: newQuestionData,
          });
        }
      },
    );
  };
  popClose = () => {
    this.setState({
      showPop: false,
    });
  };
  render() {
    const { questionCount, currentNum, questionObj, showPage, when, showPop, state } = this.state;
    const currentItem = questionObj[currentNum];
    return showPage ? (
      <ContentBox noBackIcon={state === '0' ? true : false} bg="half2">
        <div className={styles.box_wrap}>{this.renderContent()}</div>
        <div className={styles.footer_wrap}>
          <div className={styles.footer}>
            <div className={classNames(styles.change_question, styles.left)}>
              {currentNum > 0 && (
                <div
                  data-track={{ name: '10016', type: 'click', extra: { currentItem } }}
                  onClick={this.lastQuestion}
                >
                  上一题
                </div>
              )}
            </div>
            <div className={styles.current_num}>
              <span>{currentNum + 1}</span>
              {'/' + questionCount}
            </div>
            <div className={classNames(styles.change_question, styles.right)}>
              {questionCount - 1 > currentNum && (
                <div
                  data-track={{ name: '10017', type: 'click', extra: { currentItem } }}
                  onClick={this.goToNextQuestion}
                >
                  下一题
                </div>
              )}
              {questionCount - 1 === currentNum && currentItem.value !== '' ? (
                <div
                  data-track={{ name: '10018', type: 'click', extra: { currentItem } }}
                  className={styles.submit}
                  onClick={this.goToNextQuestion}
                >
                  提交
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {showPop && currentItem.tips && (
          <Pop popClose={this.popClose} btnText="知道了，继续答题">
            {currentItem.tips}
          </Pop>
        )}

        {/* {currentItem.tips && PopPlus({ content: currentItem.tips, btnText: '知道了，继续答题' })} */}

        <Prompt when={when} isQues={true} />
      </ContentBox>
    ) : null;
  }
}
export default createForm()(Index);
