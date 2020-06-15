import React, { Component } from 'react';
import { ContentBox } from '../index';
import styles from './index.less';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { icon, title, contentTitle, headerRight, backClick, hiddleTitle, children } = this.props;
    return (
      <ContentBox
        bg="half1"
        headerRight={headerRight}
        title={title}
        icon={icon}
        backClick={backClick}
      >
        <div className={styles.box}>
          {!(hiddleTitle === true) && (
            <div className={styles.rule_box}>
              <div className={styles.dot}></div>
              <div className={styles.rule_name}>{contentTitle}</div>
              <div className={styles.dot}></div>
            </div>
          )}

          <div className={styles.content}>{children}</div>
        </div>
      </ContentBox>
    );
  }
}
export default Index;
