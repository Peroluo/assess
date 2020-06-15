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
      role: '',
      showPop: false,
      when: false,
      backHome: true,
      state: '',
    };
  }
  componentDidMount() {
    const { query } = this.props.location;
    const { role, state } = query;
    this.setState({
      role,
      state,
    });
  }
  startGame = () => {
    const { role } = this.state;
    Track.tcFnc('10014');
    this.setState(
      {
        backHome: false,
        when: true,
      },
      () => {
        const state = localStorage.getItem('state');
        router.push('/questionaire/game?role=' + role + `&${state}`);
      },
    );
  };
  clickIcon = () => {
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
    const { role, showPop, when, backHome, state } = this.state;
    return (
      <ContentBox
        noBackIcon={false}
        bg="half1"
        title={`${role === 'parents' ? '辅助' : '自助'}问答诊断`}
        icon={true}
        iconClick={this.clickIcon}
      >
        <div className={styles.box_wrap}>
          <NoticeMsg
            msgList={[
              '请确保在不受干扰的条件下，独立进行诊断',
              role === 'student'
                ? `本诊断时间大约需要15-${state === '2' ? 20 : 30}分钟，请确保你有充裕的时间填答`
                : '本诊断时间大约需要15-25分钟，请确保您有充裕的时间填答',
              '为了确保诊断的准确性，请按照真实的情况作答',
              '中途退出本诊断，已填答内容无效，下次将重新开始诊断',
            ]}
            isTest={false}
            toPlay={this.startGame}
            onlyStartBtn={true}
          ></NoticeMsg>
        </div>
        {showPop && (
          <Pop title="诊断介绍" popClose={this.popClose}>
            {role === 'student' && (
              <>
                <div>
                  学生MECE自助诊断用来评估学生学习成绩提升的空间。通过衡量学习的内在品质和外在环境因素所处的位置，帮助学生针对性地改善现状。
                </div>
                <div className={styles.second_p}>具体分为四大模块</div>
                <div>学习动力（为什么学？）</div>
                <div>学习执行力（会不会学？）</div>
                <div>学习能力（能不能学？）</div>
                <div>环境因素（学习的特定环境）</div>
              </>
            )}

            {role === 'parents' && (
              <>
                <div>
                  MECE家长辅助诊断主要从家长对孩子的学习情况了解、动力培养、行为习惯培养、家庭支持四个角度综合考量家长在孩子学习和成长中发挥的力量，协助评估学生学习成绩的提升空间。
                </div>
                <div className={styles.second_p}>
                  家长诊断只做辅助参考，不计入学生MECE学习力诊断结果。
                </div>
              </>
            )}
          </Pop>
        )}
        <Prompt when={when} backHome={backHome} />
      </ContentBox>
    );
  }
}
export default Index;
