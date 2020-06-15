import React from 'react';
import styles from './index.less';
class FilterInput extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
    this.state = {
      value: props.value,
      showClear: false,
    };
  }

  render() {
    const { value, showClear } = this.state;
    const { label, pichList, placeholder, refs } = this.props;
    return (
      <div className={styles.inputWrap}>
        <div className={styles.inputLabel}>{label}</div>
        <div className={styles.inputBody}>
          <div className={styles.filterInputWrap}>
            <div className={styles.inputWrap}>
              <input
                value={value}
                ref={refs}
                placeholder={placeholder}
                onChange={event => {
                  this.timeout && clearTimeout(this.timeout);
                  let val = event.target.value;
                  this.setState({ value: val });
                  this.timeout = setTimeout(() => {
                    this.props.onChange && this.props.onChange(val);
                  }, 500);
                }}
                onFocus={event => {
                  this.setState({ showClear: true });
                  this.props.onFocus && this.props.onFocus(event.target.value);
                }}
                onBlur={() => {
                  let id = setTimeout(() => {
                    this.setState({ showClear: false });
                    clearTimeout(id);
                  }, 20);
                }}
              ></input>
              {showClear && (
                <div
                  className={styles.clear}
                  onClick={() => {
                    this.setState({ value: '' });
                    this.props.onChange && this.props.onChange('');
                  }}
                >
                  <img src="/images/clear.png" alt="clear"></img>
                </div>
              )}
            </div>
          </div>
        </div>

        {pichList && showClear && (
          <div className={styles.recommenWrap}>
            {pichList.map(item => {
              return (
                <div
                  className={styles.filterItem}
                  key={item.id}
                  onClick={() => {
                    this.setState({ value: item.schName });
                    this.props.chooseItem && this.props.chooseItem(item);
                  }}
                >
                  <div className={styles.left}>{item.schName}</div>
                  <div className={styles.right}>
                    {item.provinceName}·{item.cityName}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default FilterInput;
