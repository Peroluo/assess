/*
 * @Descripttion:
 * @Author: luoguoxiong
 * @Date: 2020-06-04 11:30:18
 * @LastEditTime: 2020-06-09 11:41:01
 */

// 测评练习结果
import React from 'react';
import Button from '@/component/Button';
import css from './index.less';

function ResultTest({ isRight = true, children = '', title = '', btnText = '开始诊断', onPlay }) {
  if (isRight) {
    return (
      <div className={css.page}>
        <img src="/img/right.png" className={css.successIcon} alt="" />
        <div className={css.successTitle}>{title}</div>
        <div className={css.buttonWrap}>
          <div className={css.buttonFix}>
            <Button
              onClick={() => {
                onPlay();
              }}
            >
              {btnText}
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={css.page}>
      <img src="/img/warn.png" className={css.warnIcon} alt="" />
      <div className={css.successTitle}>{title}</div>
      {children}
      <div className={css.buttonWrap}>
        <div className={css.buttonFix}>
          <Button
            onClick={() => {
              onPlay();
            }}
          >
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ResultTest;
