import React from 'react';
import styles from './index.less';
import ModelPick from '@/components/modelPick';

class PickInput extends React.Component {
  constructor(props) {
    super(props);
    this.isGetValue = false;
    if (props.data) {
      this.state = {
        value: [],
        show: false,
        label: '',
        dateData: [],
      };
    } else {
      if (this.props.value) {
        const [year, month, day] = this.props.value;
        const dateData = this.createDatePickData(year, month);
        this.state = {
          value: [year, month, day],
          show: false,
          label: '',
          dateData,
        };
      } else {
        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        const dateData = this.createDatePickData(year, month);
        this.state = {
          value: [year, month, day],
          show: false,
          label: '',
          dateData,
        };
      }
    }
  }
  componentDidMount() {
    if (this.props.value !== '') {
      const label = this.getPickValue(this.props.value);
      this.setState({ label, value: this.props.value });
      this.isGetValue = true;
    }
  }
  showPicker = () => {
    if (!this.isGetValue) {
      if (this.props.data) {
        if (this.props.cascade) {
          let value = [];
          if (this.props.data.length) {
            const item = this.props.data[0];
            value.push(item.value);
            if (item.children.length) {
              value.push(item.children[0].value);
              if (item.children[0].children.length) {
                value.push(item.children[0].children[0].value);
              }
            }
          }
          this.setState({ show: true, value });
        } else {
          this.setState({ show: true, value: [this.props.data[0].value] });
        }
      } else {
        this.setState({ show: true });
      }
      this.isGetValue = true;
    } else {
      this.setState({ show: true });
    }
  };

  createDatePickData(year, month) {
    let years = 2009;
    let days = new Date(year, month, 0).getDate();
    const yearArr = [];
    const monthArr = [];
    const dayArr = [];
    for (let i = 1997; i <= years; i++) {
      yearArr.push({
        label: i,
        value: i,
      });
    }
    for (let j = 1; j < 13; j++) {
      monthArr.push({
        label: j,
        value: j,
      });
    }
    for (let k = 1; k <= days; k++) {
      dayArr.push({
        label: k,
        value: k,
      });
    }
    return [yearArr, monthArr, dayArr];
  }
  pinckOnChange = val => {
    this.setState({ value: val });
  };
  getPickValue(val) {
    const { data, cascade } = this.props;
    let label = '';
    let index = 0;
    if (data) {
      if (cascade) {
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          if (item.value === val[index]) {
            label += item.label;
            if (item.children.length > 0) {
              index += 1;
              for (let j = 0; j < item.children.length; j++) {
                const temp = item.children[j];
                if (temp.value === val[index]) {
                  label += temp.label;
                  if (temp.children.length > 0) {
                    index += 1;
                    for (let k = 0; k < temp.children.length; k++) {
                      const xemp = temp.children[k];
                      if (xemp.value === val[index]) {
                        label += xemp.label;
                        break;
                      }
                    }
                  }
                  break;
                }
              }
            }
            break;
          }
        }
        return label;
      } else {
        for (let i = 0; i < data.length; i++) {
          if (val[0] === data[i].value) {
            label = data[i].label;
            break;
          }
        }
        return label;
      }
    } else {
      const [year, month, day] = val;
      const dateData = this.createDatePickData(year, month);
      this.setState({
        dateData,
      });
      label = `${year}年${month}月${day}日`;
      return label;
    }
  }
  render() {
    const { placeholder, onShow, title, pickTitle, onClose, onOk, data, cascade } = this.props;
    const { value, show, label, dateData } = this.state;
    const pickData = data ? data : dateData;
    return (
      <div
        className={styles.inputWrap}
        onClick={() => {
          onShow && onShow();
          this.showPicker();
        }}
      >
        <div className={styles.inputLabel}>{title}：</div>
        <div className={styles.inputBody}>
          {label ? (
            label
          ) : (
            <span style={{ color: '#cccccc', fontWeight: 'normal' }}>{placeholder}</span>
          )}
        </div>
        <div className={styles.leftIcon}>
          <img src="/images/others.png" alt="" />
        </div>
        <ModelPick
          onClose={() => {
            this.setState({ show: false });
            onClose && onClose();
          }}
          onOk={() => {
            const label = this.getPickValue(this.state.value);
            this.setState({ label, show: false });
            onOk && onOk(value);
          }}
          title={pickTitle}
          data={pickData}
          value={value}
          visible={show}
          cascade={cascade}
          onChange={val => {
            this.pinckOnChange(val);
          }}
        ></ModelPick>
      </div>
    );
  }
}
export default PickInput;
