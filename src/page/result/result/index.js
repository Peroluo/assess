import React, { Component } from 'react';
import styles from './index.less';
import router from 'umi/router';
import { learnGetReport } from '@/services/api';
import { Pop, Prompt, ContentBox, ResultLoading } from '@/components/index';
import NoticeMsg from '@/components/noticeMsg';
import Track from '@/utils/track';
import { connect } from 'dva';
@connect(({ globalStat }) => ({ globalStat }))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <img className={styles.aaa} alt="aaa" src="/images/full_bg.png"></img>;
  }
}
export default Index;
