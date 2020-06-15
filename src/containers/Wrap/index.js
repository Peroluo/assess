import React from 'react';
import styles from './index.less';
import router from 'umi/router';
class Wrap extends React.Component {
  render() {
    return (
      <div className={styles.box} style={this.props.noPb ? { paddingBottom: 0 } : null}>
        <div className={styles.wrap}></div>
        <div className={styles.content}>
          <div className={styles.backWrap}>
            <img
              src="/images/back.png"
              alt="ss"
              onClick={() => {
                if (this.props.onBack) {
                  this.props.onBack();
                } else {
                  router.go(-1);
                }
              }}
            />
          </div>
          <div className={styles.titleWrap}>{this.props.title}</div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Wrap;
