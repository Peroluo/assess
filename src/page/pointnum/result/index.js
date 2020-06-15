import React, { Component } from 'react';
import router from 'umi/router';
import styles from './index.less';
import { Prompt, ContentBox } from '@/components/index';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: '',
      time: '',
      when: false,
      backHome: true,
    };
  }
  async componentDidMount() {
    const { query } = this.props.location;
    let { type, time } = query;
    if (type === 'test') {
      time = time.split(',');
    }
    this.setState({
      pageType: type,
      time,
    });
  }
  startGame = () => {
    this.setState(
      {
        when: true,
      },
      () => {
        const state = localStorage.getItem('state');
        router.push(`/pointnum/game?type=test&${state}`);
      },
    );
  };
  backHome = () => {
    this.setState(
      {
        backHome: false,
        when: true,
      },
      () => {
        const state = localStorage.getItem('state');
        router.push(`/baseHome?${state}`);
      },
    );
  };
  render() {
    const { pageType, time, when, backHome } = this.state;
    return (
      <ContentBox bg="half1" title={pageType === 'practice' ? '练习模式' : '测评模式'} icon={false}>
        <div className={styles.box_wrap_wrap}>
          <div className={styles.rule_box}>
            <div className={styles.dot}></div>
            <div className={styles.rule_name}>
              {pageType === 'practice' ? '练习成绩' : '最佳成绩'}
            </div>
            <div className={styles.dot}></div>
          </div>
          {pageType === 'practice' && (
            <div className={styles.practice_box}>
              <div className={styles.count_time}>
                {time}
                <span>s</span>
              </div>
              <div className={styles.reaction_time}>
                平均反应时间：{(Number(time) / 25).toFixed(2)} s
              </div>
              <div className={styles.btn_wrap}>
                <div className={styles.green_btn} onClick={this.startGame} data-track="10004">
                  挑战测评
                </div>
              </div>
            </div>
          )}
          {pageType === 'test' && (
            <div className={styles.test_box}>
              <div>
                <div className={styles.box_wrap}>
                  <div className={styles.count_time}>
                    {Math.min(Number(time[0]), Number(time[1]), Number(time[2]))}
                    <span>s</span>
                  </div>
                  <div className={styles.content_box}>
                    <div className={styles.reaction_time}>
                      平均反应时间：
                      {((Number(time[0]) + Number(time[1]) + Number(time[2])) / 75).toFixed(2)} s
                    </div>
                    {time.map((item, index) => {
                      return (
                        <div className={styles.list} key={index}>
                          第{index + 1}次测评成绩：{item} s
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.btn_wrap}>
                  <div className={styles.green_btn} onClick={this.backHome} data-track="10005">
                    返回首页
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Prompt when={when} backHome={backHome} />
      </ContentBox>
    );
  }
}
export default Index;
