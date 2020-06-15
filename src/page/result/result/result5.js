import React, { Component } from 'react';
import styles from './index.less';
import router from 'umi/router';
import { learnGetReport } from '@/services/api';
import { Pop, Prompt, ContentBox, ResultLoading } from '@/components/index';
import NoticeMsg from '@/components/noticeMsg';
import Track from '@/utils/track';
import { connect } from 'dva';
import classNames from 'classnames';
@connect(({ globalStat }) => ({ globalStat }))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {},
      showAnimate: true,
    };
  }
  componentDidMount() {
    const { query } = this.props.location;
    const { view } = query;
    if (view === 'true') {
      this.setState({
        loading: false,
      });
    }
    this.getResult();
    window.addEventListener('scroll', this.bindScroll);
  }
  bindScroll = event => {
    // 滚动的高度
    const scrollTop =
      (event.srcElement ? event.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (event.srcElement ? event.srcElement.body.scrollTop : 0);
    // 视窗高度
    const clientHeight =
      (event.srcElement && event.srcElement.documentElement.clientHeight) ||
      document.body.clientHeight;
    // 页面高度
    const scrollHeight =
      (event.srcElement && event.srcElement.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    // 距离页面底部的高度，为5的时间就可以认为到底了
    const isBottom = scrollTop + clientHeight + 5 > scrollHeight;
    if (isBottom) {
      this.setState({
        showAnimate: false,
      });
    } else {
      this.setState({
        showAnimate: true,
      });
    }
  };
  componentWillUnmount() {
    // 移除滚动监听
    window.removeEventListener('scroll', this.bindScroll);
  }
  getResult = () => {
    let result;
    const time = +new Date();
    const that = this;
    this.loop = setInterval(async function() {
      console.log(+new Date() - time);
      console.log(123);
      result = await learnGetReport({
        userId: that.props.globalStat.userInfo.id, //用户ID
        version: 0, //版本 0--5min版  1--30min版
        channel: 0, //渠道  0--公众号  1--小程序});
      });
      if (result.data && (result.data.isReport || result.data.type)) {
        clearInterval(that.loop);
        setTimeout(() => {
          that.setState({
            loading: false,
            data: result.data,
          });
        }, 1500);
      }
      if (result.code !== 0) {
        clearInterval(that.loop);
      }

      if (+new Date() - time > 10000) {
        clearInterval(that.loop);
      }
    }, 2000);
  };
  jumpBase = () => {
    window.location.href = '/?state=1';
  };
  render() {
    const { loading, data, showAnimate } = this.state;
    return loading ? (
      <ResultLoading />
    ) : (
      <div className={styles['page-wrap']}>
        <div className={styles.imgWrap}>
          <img src={`/type/${data.type}.png`} alt=""></img>
          {showAnimate && (
            <span
              ref={e => (this.scroll = e)}
              className={classNames(styles.arrow, styles.animated, styles.bounce)}
            ></span>
          )}
        </div>
        <div className={styles.content}>
          该类型为最高值极速诊断,不排除存在偏差风险！如果想要深入了解影响学习成绩提升的阻碍，全面诊断更多学习力指标水平，MECE学习力诊断专业版等你来体验。
        </div>
        <div className={styles.btn} onClick={this.jumpBase}>
          升级进入MECE学习力诊断(专业版)
        </div>
      </div>
    );
  }
}
export default Index;
