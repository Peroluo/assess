import React from 'react';
import styles from './index.less';
class Footer extends React.Component {
  render() {
    const { data, value } = this.props;
    return (
      <div className={styles.footer}>
        <div className={styles.footerWrap}>
          {data.map((item, index) => {
            return (
              <div
                className={index === value ? styles.itemactive : styles.item}
                onClick={() => {
                  this.props.onChange && this.props.onChange(index);
                }}
                key={index}
              >
                <div className={styles.icon}>
                  <img
                    src={index === value ? item.activeIcon : item.defaultIcon}
                    alt={item.activeIcon}
                  ></img>
                </div>
                <div className={styles.title}>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Footer;
