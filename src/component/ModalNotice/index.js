// 测评弹窗介绍框
import React, { Fragment } from 'react';
import Button from '@/component/Button';
import css from './index.less';
import Modal from '../Modal';
function ModalNotice({
  visable = false,
  onTest,
  onPlay,
  title = '',
  contentMsg = [],
  warningText = '',
}) {
  return (
    <Modal visable={visable}>
      <div className={css.content}>
        <div className={css.title}>{title}</div>
        <div className={css.msgBox}>
          {contentMsg.map((item, index) => (
            <div className={css.msgItem} key={index}>
              <div className={css.msgTitle}>{item.title}</div>
              <Fragment>
                {item.text.map((temp, _index) => (
                  <div className={css.msgDesc} key={_index}>
                    {temp}
                  </div>
                ))}
              </Fragment>
            </div>
          ))}
        </div>
        <div className={css.waringText}>{warningText}</div>
        <div className={css.btnWrap}>
          <Button
            size="xm"
            type="gloast"
            onClick={() => {
              onTest();
            }}
          >
            进行练习
          </Button>
          <Button
            size="xm"
            onClick={() => {
              onPlay();
            }}
          >
            正式诊断
          </Button>
        </div>
      </div>
    </Modal>
  );
}
export default ModalNotice;
