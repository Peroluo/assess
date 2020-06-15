import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React from 'react';
function RunAnimate({ page, height, children }) {
  return (
    <TransitionGroup className="fixedRun" style={{ height }}>
      {[page].map(({ item }) => (
        <CSSTransition key={page} timeout={500} classNames={`fixedRunItem leftRun`}>
          <div>{children}</div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
export default RunAnimate;
