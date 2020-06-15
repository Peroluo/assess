/*
 * @Descripttion: 分页和进度（推理力/问卷）
 * @Author: luoguoxiong
 * @Date: 2020-06-09 14:58:28
 * @LastEditTime: 2020-06-09 18:11:02
 */
import React, { Fragment } from 'react';
import css from './index.less';
import Button from '@/component/Button';
import Progress from '@/component/Progress';
export default ({ page, total, onChange, onSubmit, value }) => {
  return (
    <Fragment>
      <div className={css.progressFix}>
        <Progress value={value} total={total}></Progress>
      </div>
      <div className={css.btnWrap}>
        <div className={css.fixBtnWrap}>
          <div>
            {page !== 1 && (
              <Button
                height="80px"
                type="ghost"
                onClick={() => {
                  onChange(page - 1);
                }}
              >
                上一题
              </Button>
            )}
          </div>
          <div>
            {page !== total ? (
              <Button
                height="80px"
                type="ghost"
                onClick={() => {
                  onChange(page + 1);
                }}
              >
                下一题
              </Button>
            ) : value === total ? (
              <Button height="80px" onClick={onSubmit}>
                提交
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
