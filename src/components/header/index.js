import React, { Component } from 'react';
import router from 'umi/router';
import styles from './index.less';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  backClick = () => {
    const { backClick } = this.props;
    if (backClick) {
      backClick();
    } else {
      const state = localStorage.getItem('state');
      router.push(`/baseHome?${state}`);
    }
  };
  render() {
    const { headerRight, noBackIcon } = this.props;
    console.log(noBackIcon);
    return (
      <div className={styles.header}>
        {noBackIcon ? (
          <span></span>
        ) : (
          <span className={styles.icon_back} onClick={this.backClick} data-track="10022"></span>
        )}
        <span className={styles.header_right}>{headerRight}</span>
      </div>
    );
  }
}
export default Index;
