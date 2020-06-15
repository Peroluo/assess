import React from 'react';
import styles from './index.less';
import { Modal, PickerView } from 'antd-mobile';
class ModelPick extends React.Component {
  onChange = value => {
    this.props.onChange && this.props.onChange(value);
  };
  render() {
    const { title, data, visible, cascade = false } = this.props;
    return (
      <Modal visible={visible} transparent popup className="myPickModel" animationType="slide-up">
        <div className={styles.btnWrap}>
          <div
            className={styles.leftBtn}
            onClick={() => {
              this.props.onClose && this.props.onClose();
            }}
          >
            取消
          </div>
          <div className={styles.title}>{title}</div>
          <div
            className={styles.rightBtn}
            onClick={() => {
              this.props.onOk && this.props.onOk();
            }}
          >
            完成
          </div>
        </div>
        <PickerView
          onChange={this.onChange}
          value={this.props.value}
          data={data}
          cascade={cascade}
        />
      </Modal>
    );
  }
}
export default ModelPick;
