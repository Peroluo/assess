import React, { Component } from 'react';
import { Header } from '../index';
import classNames from 'classnames';
import styles from './index.less';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { title, icon, iconClick, headerRight, backClick, bg, noBackIcon, children } = this.props;
    return (
      <div
        className={classNames(
          styles.wrap,
          { [styles.full1]: bg === 'full1' },
          { [styles.full2]: bg === 'full2' },
          { [styles.half1]: bg === 'half1' },
          { [styles.half2]: bg === 'half2' },
        )}
      >
        <div className={styles.header}>
          <Header headerRight={headerRight} noBackIcon={noBackIcon} backClick={backClick} />
        </div>
        <div className={styles.content}>
          {title && (
            <div className={styles.title}>
              <div className={styles.name}>{title}</div>
              {icon && <div className={styles.icon} onClick={iconClick}></div>}
            </div>
          )}

          <div>{children}</div>
        </div>
      </div>
    );
  }
}

export default Index;
