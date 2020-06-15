// 弹窗确认框
import React from 'react';
import Modal from '../Modal';
import css from './index.less';
function ModalComfirm({
  visable = false,
  title = '',
  btnList = [
    {
      text: '取消',
      onClick: () => {
        this.props.onCancel && this.props.onCancel();
      },
    },
    {
      text: '确定',
      textColor: '#44B979',
      onClick: () => {
        this.props.onOK && this.props.onOK();
      },
    },
  ],
}) {
  return (
    <Modal visable={visable}>
      <div className={css.confirm}>
        <div className={css.content}>{title}</div>
        <div className={css.btnWrap}>
          {btnList.map((item, index) => (
            <div
              className={css.btnItem}
              style={{ color: item.textColor || '#333' }}
              key={index}
              onClick={() => {
                item.onClick();
              }}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default ModalComfirm;
