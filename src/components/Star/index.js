import React from 'react';
import styles from './index.less';
class Star extends React.Component {
  render() {
    const data = [];
    for (let i = 0; i < this.props.value; i++) {
      data.push(i);
    }
    const data2 = [];
    for (let i = 0; i < this.props.total - this.props.value; i++) {
      data2.push(i);
    }
    return (
      <div className={styles.star}>
        {data.map(item => (
          <img src={'/images/report/star.png'} alt="" key={item}></img>
        ))}
        {data2.map(item => (
          <img src={'/images/report/noStar.png'} alt="" key={item}></img>
        ))}
      </div>
    );
  }
}

export default Star;
