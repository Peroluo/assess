import React from 'react';
import styles from './index.less';

class VertBar extends React.Component {
  constructor(props) {
    super(props);
    const data = JSON.parse(JSON.stringify(props.data)).map(item => {
      item.val = 0;
      return item;
    });
    this.state = {
      maxVal: 5,
      data,
    };
  }
  componentDidMount() {
    const id = setTimeout(() => {
      this.setState({ data: this.props.data });
      clearTimeout(id);
    }, 500);
  }
  render() {
    const { maxVal, data } = this.state;
    return (
      <div className={styles.vertBar}>
        <div className={styles.label}>
          {data.map(item => {
            return (
              <div className={styles.labelName} key={item.name}>
                {item.name}
              </div>
            );
          })}
        </div>
        <div className={styles.lineWrap}>
          <div className={styles.iconWrap2}>
            <div>
              <img src="/images/report/bad.png" alt="" />
            </div>
            <div>
              <img src="/images/report/good.png" alt="" />
            </div>
          </div>
          <div className={styles.lineInner}>
            <div className={styles.centerLine}></div>
            {data.map((item, index) => {
              const width = (item.val / maxVal) * 50 + '%';
              const left = !item.isUp ? 50 - (item.val / maxVal) * 50 + '%' : null;
              return (
                <div className={styles.liInnerItem} key={index}>
                  <div
                    className={item.isUp ? styles.goodLines : styles.badLines}
                    style={{ width, left }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
class Bar extends React.Component {
  static vert = VertBar;
  constructor(props) {
    super(props);
    const data = JSON.parse(JSON.stringify(props.data)).map(item => {
      item.val = 0;
      return item;
    });
    this.state = {
      maxVal: 5,
      data,
    };
  }
  componentDidMount() {
    const id = setTimeout(() => {
      this.setState({ data: this.props.data });
      clearTimeout(id);
    }, 500);
  }
  render() {
    const { maxVal, data } = this.state;
    return (
      <div className={styles.barWrap}>
        <div className={styles.barBox}>
          <div className={styles.iconWrap}>
            <img src="/images/report/good.png" alt="" />
            <img src="/images/report/bad.png" alt="" />
          </div>
          <div className={styles.imp}>
            {data.map((item, index) => {
              const height = (item.val / maxVal) * 50 + '%';
              const top = item.isUp ? 50 - (item.val / maxVal) * 50 + '%' : null;
              return (
                <div className={styles.lineItem} key={index}>
                  <div className={styles.lineSet}>
                    <div
                      className={item.isUp ? styles.goodScore : styles.badScore}
                      style={{ height, top }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.barLine}>
          {data.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Bar;
