import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import router from 'umi/router';
import { getUserScores } from '@/services/api';
import moment from 'moment';
import Footer from '@/components/footer';
@connect(({ globalStat }) => ({ globalStat }))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wxUserInfo: {
        nickname: '1223',
      },
      userInfo: {
        name: '',
        school: '',
        grade: '',
        birthDay: 0,
        phone: '',
      },
      stage: '',
      active: 1,
      footerList: [
        {
          activeIcon: '/images/homeActive.png',
          defaultIcon: '/images/homeDefault.png',
          name: '首页',
        },
        {
          activeIcon: '/images/mineActive.png',
          defaultIcon: '/images/mineDefault.png',
          name: '我的',
        },
      ],
    };
  }

  async componentDidMount() {
    const wxUserInfo = this.props.globalStat.wxUserInfo;
    const userInfo = this.props.globalStat.userInfo;
    this.setState({
      userInfo,
      wxUserInfo,
    });
    const result = await getUserScores({
      userId: userInfo.id,
      channel: 0, //渠道来源 0--公众号 1--小程序
      version: 1,
    });
    if (result.code === 0) {
      this.setState({
        stage: result.data.length,
      });
    }
  }
  goToRecord = () => {
    const state = localStorage.getItem('state');
    router.push(`/mine/record?${state}`);
  };
  render() {
    const { userInfo, wxUserInfo, stage } = this.state;
    const sexObj = { 0: '未知', 1: '男', 2: '女' };
    return (
      <div className={styles.mine_page}>
        <div className={styles.content}>
          <div className={styles.avatar_box}>
            <img alt="avatar" src={wxUserInfo.headimgurl} className={styles.avatar} />
            <div className={styles.phone}>{wxUserInfo.nickname}</div>
          </div>
          <div className={styles.info_box}>
            <div className={styles.info_title}>个人信息</div>
            <div className={styles.info_list_wrap}>
              <div className={styles.info_list}>
                <div className={styles.icon_name}></div>
                <div className={styles.name}>{userInfo.name}</div>
              </div>
              <div className={styles.info_list}>
                <div className={styles.icon_sex}></div>
                <div className={styles.sex}>{sexObj[userInfo.sex]}</div>
              </div>
            </div>

            <div className={styles.info_list}>
              <div className={styles.icon_school}></div>
              <div className={styles.local}>
                {userInfo.school}·{userInfo.grade}
              </div>
            </div>
            <div className={styles.info_list}>
              <div className={styles.icon_birth}></div>
              <div className={styles.date}>
                {moment(userInfo.birthDay).year()}年{moment(userInfo.birthDay).month()}月
                {moment(userInfo.birthDay).date()}日
              </div>
            </div>
            <div className={styles.info_list}>
              <div className={styles.icon_phone}></div>
              <div className={styles.phone}>{userInfo.phone}</div>
            </div>
          </div>

          <div className={styles.test_record} onClick={this.goToRecord}>
            <div className={styles.left}>
              <span className={styles.icon}></span>
              <span className={styles.left_words}>测评记录</span>
            </div>
            <div className={styles.right}>
              <span className={styles.num}>{stage}</span>
              <span className={styles.arrow}></span>
            </div>
          </div>
        </div>
        <Footer
          data={this.state.footerList}
          value={this.state.active}
          onChange={val => {
            if (val === 0) {
              const state = localStorage.getItem('state');
              router.push(`/home?${state}`);
            }
            this.setState({ active: val });
          }}
        ></Footer>
      </div>
    );
  }
}
export default Index;
