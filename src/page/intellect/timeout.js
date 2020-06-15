import React from 'react';
import styles from './timeout.less';
class Timeout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.seconds,
    };
    this.run();
  }
  run() {
    let useTime = 0;
    this.timeoutid = setInterval(() => {
      var realTime = this.state.seconds - 1;
      useTime++;
      if (realTime >= 0) {
        this.setState({ seconds: realTime });
        this.props.onChange && this.props.onChange(this.secondstoMin2(useTime), useTime);
      } else {
        this.props.onOver && this.props.onOver();
        this.timeoutid && clearInterval(this.timeoutid);
      }
    }, 1000);
  }
  componentWillUnmount() {
    this.timeoutid && clearInterval(this.timeoutid);
  }
  secondstoMin(seconds) {
    let minute = parseInt(seconds / 60);
    let second = seconds % 60;
    return [minute, second].map(this.dateRule).join(':');
  }
  secondstoMin2(seconds) {
    let minute = parseInt(seconds / 60);
    let second = seconds % 60;
    return [minute, second].map(this.dateRule);
  }
  dateRule(e) {
    return e < 10 ? 0 + '' + e : e;
  }
  render() {
    return <span className={styles.realTime}>{this.secondstoMin(this.state.seconds)}</span>;
  }
}
export default Timeout;
