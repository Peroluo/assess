import React from 'react';
import styles from './index.less';
class Wrap extends React.Component {
  render() {
    return (
      <div id={styles.wrap}>
        <div className={styles.wrapper}></div>
        <div className={styles.box}>
          <div className={styles.header}>
            <div className={styles.title}>{this.props.title}</div>
            <nav
              className={styles.nav}
              onClick={() => {
                this.props.onBack && this.props.onBack();
              }}
            >
              {this.props.onBack && <img src="/images/back.png" alt="ss"></img>}
            </nav>
            <div
              className={styles.headerRight}
              onClick={() => {
                this.props.clickRight && this.props.clickRight();
              }}
            >
              {this.props.rightTitle}
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.inner} style={this.props.noPadding ? { padding: 0 } : {}}>
              {this.props.children}
            </div>
            {this.props.footer}
          </div>
        </div>
      </div>
    );
  }
}
export default Wrap;
