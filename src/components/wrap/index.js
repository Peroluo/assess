import React from 'react';
import styles from './index.less';
class Wrap extends React.Component {
  render() {
    return (
      <div id={styles.wrap}>
        <div className={styles.wrapper}></div>
        <div className={styles.box}>
          {!this.props.noHeader && (
            <div className={styles.header}>
              <div className={styles.title}></div>
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
          )}

          <div className={styles.content}>
            {this.props.step && <div className={styles.stepWrap}>{this.props.step}</div>}
            {this.props.title && (
              <div className={this.props.noHeader ? styles.noHeaderTitle : styles.titleLine}>
                {this.props.title}
                {this.props.hasNotice ? (
                  <img
                    src="/images/notice.png"
                    alt="ss"
                    className={styles.notice}
                    onClick={() => {
                      this.props.showNotice();
                    }}
                  ></img>
                ) : null}
              </div>
            )}
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
