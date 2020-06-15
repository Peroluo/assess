import React, { Component } from 'react';
import styles from './index.less';
import router from 'umi/router';
import { Pop, Prompt, ContentBox } from '@/components/index';
import NoticeMsg from '@/components/noticeMsg';
import Track from '@/utils/track';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnyBtn: false,
      showPop: false,
      when: false,
      backHome: true,
    };
  }
  startGame = type => {
    Track.tcFnc({ name: '10001', type: 'click', extra: { type } });
    this.setState(
      {
        when: true,
        backHome: false,
      },
      () => {
        const state = localStorage.getItem('state');
        router.push('/pointnum/game?type=' + type + `&${state}`);
      },
    );
  };
  iconClick = () => {
    this.setState({
      showPop: true,
    });
  };
  popClose = () => {
    this.setState({
      showPop: false,
    });
  };
  render() {
    const { showPop, when, backHome } = this.state;
    return (
      <ContentBox title="专注力测评" bg="half1" icon={true} iconClick={this.iconClick}>
        <div className={styles.content_box_wrap}>
          <NoticeMsg
            isTest
            msgList={['请按1-25的顺序点击下页出现的方格', '可先练习再进入测评']}
            toTest={this.startGame.bind(this, 'practice')}
            toPlay={this.startGame.bind(this, 'test')}
          ></NoticeMsg>
        </div>
        {showPop && (
          <Pop title="测评介绍" popClose={this.popClose}>
            <div>
              专注力是人的心理活动对一定事物的指向和集中，保持良好的专注力是大脑进行感知、记忆、思维等认知活动的基本条件。
            </div>
            <div className={styles.second_p}>
              舒尔特方格是一种简单测量专注力水平的工具，测评完成时间的长短可以客观地反映个体专注力水平的高低。
            </div>
          </Pop>
        )}
        <Prompt when={when} backHome={backHome} />
      </ContentBox>
    );
  }
}
export default Index;
