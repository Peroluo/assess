import React, { Component } from 'react';
import styles from './index.less';
import router from 'umi/router';
import { Pop, Prompt, ContentBox } from '@/components/index';
import NoticeMsg from '@/components/noticeMsg';
import Track from '@/utils/track';
import { connect } from 'dva';
@connect(({ globalStat }) => ({ globalStat }))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { query } = this.props.location;
    const { role } = query;
  }
  viewResult = () => {
    const state = localStorage.getItem('state');
    const obj = { '0': '5', '1': '30' };
    const type = obj[this.props.globalStat.ceType];
    router.push(`/result/result/result${type}?${state}&view=true`);
  };
  render() {
    return (
      <div className={styles['page-wrap']}>
        <div className={styles.box}>
          <div className={styles.wrap}>
            <div className={styles.icon}></div>
            <div className={styles.tip}>您已完成诊断</div>
          </div>
          <div className={styles.btn} onClick={this.viewResult}>
            查看报告
          </div>
        </div>
      </div>
    );
  }
}
export default Index;
