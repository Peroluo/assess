import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import router from 'umi/router';
import { ContentBox } from '@/components/index';
import { getUserScores } from '@/services/api';
import moment from 'moment';
@connect(({ globalStat }) => ({ globalStat }))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnyBtn: false,
      dataList: [],
      postFinish: false,
    };
  }
  async componentDidMount() {
    const userInfo = this.props.globalStat.userInfo;
    let result = await getUserScores({
      userId: userInfo.id,
      channel: 0, //渠道来源 0--公众号 1--小程序
      version: 1, //版本  0--5min版本  1--30min版本
    });
    if (result.code === 0) {
      const dataList = [];
      let stage2 = {};
      for (let key of result.data) {
        if (key.stage === 2) {
          if (stage2.ctime) {
            stage2 = stage2.ctime > key.time ? stage2 : key;
          } else {
            stage2 = key;
          }
        } else {
          dataList.push(key);
        }
      }
      // 自己为顺序记忆有值，我们新定义一个stage，然后把他插到第二个位置
      if (stage2.stage) {
        if (dataList.length > 0 && dataList[0].stage === 1) {
          dataList.splice(1, 0, stage2);
        } else {
          dataList.unshift(stage2);
        }
      }
      this.setState({
        dataList,
        postFinish: true,
      });
    }
  }
  goToResult = item => {
    const state = localStorage.getItem('state');
    router.push(`/mine/result?stage=${item.stage}&${state}`);
  };
  render() {
    const { dataList, postFinish } = this.state;
    const obj = {
      '1': '专注力测评',
      '2': '记忆力测评',
      '3': '推理力测评',
      '4': '自助诊断测评',
      '5': '辅助诊断测评',
    };
    return (
      <ContentBox
        title="测评记录"
        backClick={() => {
          router.go(-1);
        }}
      >
        <div className={styles.tip_box}>
          <span className={styles.dot}></span>
          <span className={styles.words}>详细测评报告会由相应负责老师线下向你提供</span>
          <span className={styles.dot}></span>
        </div>
        <div className={styles.box}>
          {dataList &&
            dataList.length > 0 &&
            dataList.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.box_list}
                  onClick={this.goToResult.bind(this, item)}
                >
                  <div className={styles.list_left}>
                    <div className={styles.left_top}>{obj[item.stage]}</div>
                    <div className={styles.left_bottom}>
                      完成时间：
                      <span>{moment(new Date(item.ctime)).format('YYYY-MM-DD HH:mm:ss')}</span>
                    </div>
                  </div>
                  <div className={styles.list_right}></div>
                </div>
              );
            })}
          {postFinish && dataList && dataList.length === 0 && (
            <div className={styles.no_record}>
              <img alt="pic" src="/images/no_records.png" className={styles.img} />
              <div className={styles.words}>暂无测评记录</div>
            </div>
          )}
        </div>
      </ContentBox>
    );
  }
}
export default Index;
