import React from 'react';
import styles from './index.less';

class ShowTalk extends React.Component {
  componentDidMount() {
    if (this.props.showRun) {
      for (let i = 0; i < this.props.talkData.length; i++) {
        let id = setTimeout(() => {
          clearTimeout(id);
          this.setState({
            initData: this.props.talkData.slice(0, i + 1),
          });
          if (i === this.props.talkData.length - 1) {
            let id = setTimeout(() => {
              this.props.onComplete && this.props.onComplete();
              clearTimeout(id);
            }, 1000);
          }
        }, 1000 * i);
      }
    } else {
      this.setState({ initData: this.props.talkData });
    }
  }
  state = {
    initData: [],
  };
  render() {
    return (
      <div id={styles.showTalk}>
        {this.state.initData.map(item => {
          if (!item.isLeft) {
            return (
              <div className={styles.rightUser} key={item.talk}>
                <div className={styles.userIcon}>
                  <img src="/images/ipin.png" alt="user" />
                </div>
                <div className={styles.userMsg}>
                  <div className={styles.talk}>{item.talk}</div>
                </div>
              </div>
            );
          } else {
            return (
              <div className={styles.leftUser} key={item.talk}>
                <div className={styles.userIcon}>
                  <img src="/images/ipin.png" alt="user" />
                </div>
                <div className={styles.userMsg}>
                  <div className={styles.talk}>{item.talk}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
export default ShowTalk;
