import React, { Component } from 'react';
import styles from './index.less';
import router from 'umi/router';
import { Prompt, Header } from '@/components/index';
import nextNum from '@/utils/isHasNext';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '',
      when: false,
      nextUrl: '',
      backHome: true,
    };
  }

  async componentDidMount() {
    const { query } = this.props.location;
    const { role } = query;
    const num = role === 'student' ? 4 : 5;
    const nextUrl = await nextNum(num);
    this.setState({
      role,
      nextUrl,
    });
  }
  renderRightResult = () => {
    const { basicData } = this.state;

    if (basicData.length > 0) {
      return basicData.map(item => {
        return <div>{item}</div>;
      });
    } else {
      return null;
    }
  };
  startTest = () => {
    this.setState(
      {
        when: true,
        backHome: false,
      },
      () => {
        const state = localStorage.getItem('state');
        router.push(`/memory/deep/game?type=test&${state}`);
      },
    );
  };
  returnHome = () => {
    const { role, nextUrl } = this.state;
    this.setState(
      {
        when: true,
      },
      () => {
        const state = localStorage.getItem('state');
        const baseUrl = nextUrl && role === 'student' ? nextUrl : '/';
        router.push(baseUrl + `?${state}`);
      },
    );
  };
  render() {
    const { role, when, backHome } = this.state;
    return (
      <div className={styles.box_bg}>
        <Header />
        <div className={styles.box_wrap}>
          <div className={styles.box}>
            <div className={styles.icon}></div>
            <div className={styles.result}>完成诊断</div>
            <div className={styles.content}>
              {role === 'student'
                ? '您所填写内容已为您系统记录，详细诊断结果将最终为您智能生成诊断报告，谢谢！'
                : '您所填写内容是用来辅助我们评估您孩子的整体表现，最终诊断结果还请参考您孩子的诊断报告。谢谢！'}
            </div>
            <div className={styles.btn} onClick={this.returnHome} data-track="10021">
              返回首页
            </div>
          </div>
        </div>
        <Prompt when={when} backHome={backHome} />
      </div>
    );
  }
}
export default Index;
