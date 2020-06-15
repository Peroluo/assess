import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import router from 'umi/router';
import { Result, Header } from '@/components/index';
import { getUserScores } from '@/services/api';
@connect(({ globalStat }) => ({ globalStat }))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnyBtn: false,
      data: {},
      stage: '',
    };
  }
  async componentDidMount() {
    const { query } = this.props.location;
    const { stage } = query;
    const { id: userId } = this.props.globalStat.userInfo;
    const postData = { userId, channel: 0, stage, version: this.props.globalStat.ceType };
    const result = await getUserScores(postData);
    let data = '';
    if (result.code === 0 && result.data && result.data.length > 0) {
      if (stage === '1') {
        data = result.data[0].extraInfo;
      }
      if (stage === '2') {
        data = ['', '', ''];
        result.data.map(item => {
          data[item.childStage - 1] = item.extraInfoCount;
        });
      }
      if (stage === '3') {
        data = result.data[0].extraInfoTime;
      }
    }

    this.setState({
      stage,
      data,
    });
  }
  render() {
    const { stage, data } = this.state;
    const obj = {
      '1': '专注力测评',
      '2': '记忆力测评',
      '3': '推理力测评',
      '4': '自助诊断测评',
      '5': '辅助诊断测评',
    };
    return (
      <>
        {['1', '2', '3'].includes(stage) && (
          <Result
            title={obj[stage]}
            contentTitle="测评结果"
            hiddleTitle={stage === '2'}
            backClick={() => {
              router.go(-1);
            }}
          >
            {stage === '1' && (
              <div className={styles.attention_box}>
                <div className={styles.best_time}>
                  {Math.min(
                    Number(data.split(',')[0]),
                    Number(data.split(',')[1]),
                    Number(data.split(',')[2]),
                  )}
                  <span>s</span>
                </div>
                <div className={styles.average_time}>
                  平均反应时间：
                  {(
                    (Number(data.split(',')[0]) +
                      Number(data.split(',')[1]) +
                      Number(data.split(',')[2])) /
                    75
                  ).toFixed(2)}{' '}
                  s
                </div>
                <div className={styles.time}>第1次测评成绩：{data.split(',')[0]} s</div>
                <div className={styles.time}>第2次测评成绩：{data.split(',')[1]} s</div>
                <div className={styles.time}>第3次测评成绩：{data.split(',')[2]} s</div>
              </div>
            )}
            {stage === '2' && (
              <div className={styles.memory_box}>
                <div className={styles.result}>
                  <div className={styles.title}>自由记忆</div>
                  <div className={styles.score}>
                    {data[0] === '' ? (
                      <span style={{ color: '#ccc' }}>待完成</span>
                    ) : (
                      `数字记忆广度为${data[0]}个组块`
                    )}
                  </div>
                </div>
                <div className={styles.result}>
                  <div className={styles.title}>顺序记忆</div>
                  <div className={styles.score}>
                    {data[1] === '' ? (
                      <span style={{ color: '#ccc' }}>待完成</span>
                    ) : (
                      `言语工作记忆广度为${data[1]}个组块`
                    )}
                  </div>
                </div>
                <div className={styles.result}>
                  <div className={styles.title}>空间位置记忆</div>
                  <div className={styles.score}>
                    {data[2] === '' ? (
                      <span style={{ color: '#ccc' }}>待完成</span>
                    ) : (
                      `空间位置记忆广度为${data[2]}个组块`
                    )}
                  </div>
                </div>
              </div>
            )}
            {stage === '3' && (
              <div className={styles.reason_box}>
                <div className={styles.time}>
                  {Math.floor(Number(data / 60))}′{Number(data % 60)}″
                </div>
                <div className={styles.tip}>
                  您已完成推理力测评，共用时{Math.floor(Number(data / 60))}分{Number(data % 60)}秒。
                </div>
                <div className={styles.tip}>详细分析结果将在完整诊断报告中提供。</div>
              </div>
            )}
          </Result>
        )}
        {['4', '5'].includes(stage) && (
          <div className={styles.box_bg}>
            <Header
              backClick={() => {
                router.go(-1);
              }}
            />
            <div className={styles.box_wrap}>
              <div className={styles.box}>
                <div className={styles.icon}></div>
                <div className={styles.result}>完成诊断</div>
                <div className={styles.content}>
                  {stage === '4'
                    ? '详细诊断结果将最终为你智能生成诊断报告。'
                    : '您所填写内容是用来辅助我们评估您孩子的整体表现，最终诊断结果还请参考您孩子的诊断报告。'}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Index;
