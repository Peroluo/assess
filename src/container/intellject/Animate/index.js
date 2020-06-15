import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React from 'react';
import classnames from 'classnames';
import css from './index.less';
/**
 * @name: luoguoxiong
 * @msg: 题目切换动画
 * @param {page} 当前题数
 * @param {children} ReactDom
 * @param {isTest} 是否是练习模式
 * @param {list} 子图片数量
 * @return: ReactDom
 */
function RunAnimate({ page, children, isTest = false, list = 6 }) {
  return (
    <TransitionGroup
      className={classnames({
        fixedRun: true,
        [css.testheighter]: isTest,
        [css.playHeight]: !isTest && list === 6,
        [css.morePlayHeight]: !isTest && list > 6,
      })}
    >
      {[page].map(() => (
        <CSSTransition key={page} timeout={400} classNames={`fixedRunItem leftRun`}>
          <div>{children}</div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
export default RunAnimate;
