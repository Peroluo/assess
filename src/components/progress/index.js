import React from 'react';
import styles from './index.less';
class Progress extends React.Component {
  render() {
    const { value, total, page } = this.props;
    return (
      <div className={styles.progressWrap}>
        <div className={styles.pagingWrap}>
          <div
            className={styles.itemLink}
            onClick={() => {
              if (page - 1 > 0) {
                this.props.onChange(page - 1);
              }
            }}
          >
            {page - 1 > 0 ? '上一题' : ''}
          </div>
          <div className={styles.progressVal}>
            <span>{page}</span> /{total}
          </div>
          <div
            className={styles.itemLink}
            onClick={() => {
              if (page < total) {
                this.props.onChange(page + 1);
              }
            }}
          >
            {page < total ? '下一题' : ''}
          </div>
        </div>
        {/* <div className={styles.progressBox} style={{ width: `${(value / total) * 100}%` }}></div> */}
      </div>
    );
  }
}
export default Progress;
