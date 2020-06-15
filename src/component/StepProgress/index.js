/*
 * @Descripttion: 测评进度
 * @Author: luoguoxiong
 * @Date: 2020-06-15 20:14:33
 * @LastEditTime: 2020-06-15 20:27:30
 */

import React from 'react';
import styles from './index.less';
import StatusButton from '@/component/StatusButton';
import classnames from 'classnames';
export default function StepProgress({ stepList, step, imgUrl }) {
  return (
    <div className={styles.home} style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className={styles.content}>
        {stepList.map((item, index) => {
          const stepClass = classnames({
            [styles.stepIconWrap]: true,
            [styles.active]: step - 1 > index,
          });
          const icon =
            step - 1 > index
              ? item.activeIcon
              : step - 1 === index
              ? item.waitIcon
              : item.defaultIcon;

          let type;
          if (step - 1 > index) {
            type = 0;
          } else if (step - 1 === index) {
            type = item.isRunning ? 1 : 3;
          } else if (step - 1 < index) {
            type = 2;
          }

          return (
            <div className={styles.stepItem} key={index}>
              <div className={stepClass}>
                <img src={`/img/home/${icon}.png`} alt="" className={styles.stepIcon} />
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepBox}>
                  <div className={styles.stepName}>{item.stepName}</div>
                  <div className={styles.stepTime}>{item.stepTime}分钟</div>
                  <div className={styles.stepButton}>
                    <StatusButton type={type}></StatusButton>
                  </div>
                </div>
                {item.children && (
                  <div className={styles.stepChild}>
                    {item.children.map((temp) => (
                      <div className={styles.stepChilItem} key={temp}>
                        {temp}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
