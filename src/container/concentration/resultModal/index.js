import React from 'react';
import { Transition } from 'react-transition-group';
import css from './index.less';
import Button from '@/component/Button';
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
function ResultModal({ visable, onClickBtn, btnText = '', useTime = '', discription = '' }) {
  return (
    <Transition
      in={visable}
      unmountOnExit
      timeout={{
        enter: 100,
        exit: 200,
      }}
    >
      {(state) => (
        <div
          className={css.ModalWrap}
          style={{
            ...transitionStyles[state],
          }}
        >
          <div>
            <div className={css.title}>
              <span>恭喜你</span>
            </div>
            <div className={css.content}>
              <div className={css.progameTitle}>诊断成绩</div>
              <div className={css.useTime}>
                {(useTime / 1000).toFixed(2)}
                <span>s</span>
              </div>
              <div className={css.discription}>{discription}</div>
              <Button
                size="m"
                onClick={() => {
                  onClickBtn();
                }}
              >
                {btnText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}
export default ResultModal;
