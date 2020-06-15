import React from 'react';
import styles from './index.less';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.state = {
      val: 0,
      showData: props.noticeMsg[0],
      isOver: false,
    };
  }
  componentDidMount() {
    if (this.props.runAnimate) {
      let val = 0;
      const newData = [...this.props.noticeMsg.splice(0, this.props.noticeMsg.length - 1)];
      this.id = setInterval(() => {
        val += Math.floor(Math.random() * 10) + 1;

        if (val >= 100) {
          clearInterval(this.id);
          this.setState({ showData: this.props.noticeMsg[this.props.noticeMsg.length - 1] }, () => {
            const id = setTimeout(() => {
              this.setState({ isOver: true });
              this.props.onOver();
              clearTimeout(id);
            }, 500);
          });
        }
        if (this.index % 4 === 0) {
          const showData = newData[this.index];
          this.setState(prev => {
            return {
              val: val > 100 ? 100 : val,
              showData: showData ? showData : prev.showData,
            };
          });
        } else {
          newData.splice(this.index, 0, '');
          this.setState({
            val: val > 100 ? 100 : val,
          });
        }
        this.index++;
      }, 300);
    }
  }
  componentWillMount() {
    clearInterval(this.id);
  }
  render() {
    return (
      <div className={styles.loadingWrap}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.contentMsg}>
          {!this.props.runAnimate ? (
            this.props.complete
          ) : this.state.isOver ? (
            this.props.complete
          ) : (
            <div className={styles.showData}>{this.state.showData}</div>
          )}
          {!this.state.isOver && this.props.runAnimate && (
            <div className={styles.loadingBox}>
              <div
                className={styles.loadingVal}
                style={{
                  width: this.state.val + '%',
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

class ReportCreate extends React.Component {
  state = { showLen: 0 };
  static loading = Loading;
  render() {
    const { runAnimate } = this.props;
    return (
      <div className={styles.wrapper}>
        {React.Children.map(this.props.children, (item, index) => {
          if (runAnimate) {
            if (index <= this.state.showLen) {
              return React.cloneElement(item, {
                key: index,
                runAnimate,
                onOver: () => {
                  if (index === React.Children.count(this.props.children) - 1) {
                    this.props.onOver();
                  }
                  this.setState({ showLen: this.state.showLen + 1 });
                },
              });
            }
          } else {
            return React.cloneElement(item, {
              key: index,
              runAnimate,
            });
          }
        })}
      </div>
    );
  }
}

export default ReportCreate;
