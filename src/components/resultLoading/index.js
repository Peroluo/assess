import React from 'react';
import styles from './index.less';
import classNames from 'classnames';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true,
      });
    }, 100);
  }
  render() {
    const { show } = this.state;
    return (
      <div className={styles['result-loading']}>
        <div className={styles.title}>恭喜您，已完成诊断</div>
        <div className={styles.tip}>正在为您生成诊断报告…</div>
        <div className={styles['pic-header']}>
          <div className={classNames(styles.pic_content, { [styles.show]: show })}></div>
        </div>
      </div>
    );
  }
}
export default Index;
