// 结果页
import React from 'react';
import css from './index.less';
import SubTag from '@/component/SubTag';
import Button from '@/component/Button';
// 公共结果header
function Result({ children }) {
  return (
    <div className={css.resultPage}>
      <div className={css.resultTitle}>
        <img src="/img/good.png" alt="" />
        <div>诊断结果</div>
      </div>
      <div className={css.content}>{children}</div>
    </div>
  );
}

// 专注力结果
function ConcentrationResult({ playUseTime, toNext }) {
  const min = Math.min(...playUseTime);
  let total = 0;
  for (let key of playUseTime) {
    total += key;
  }
  return (
    <Result>
      <div className={css.concentration}>
        <div className={css.achievementTitle}>
          <span>最佳成绩</span>
        </div>
        <div className={css.bestAchie}>
          {(min / 1000).toFixed(2)}
          <span>s</span>
        </div>
        <div className={css.avgUse}>
          <div className={css.label}>平均反应时间：</div>
          <div className={css.value}>{(total / 3 / 1000).toFixed(2)} s</div>
        </div>
        <div className={css.allUseTime}>
          {playUseTime.map((item, index) => (
            <div className={css.useTimeItem} key={index}>
              <div className={css.label}>第{index + 1}次诊断成绩：</div>
              <div className={css.value}>{`${(item / 1000).toFixed(2)} s`}</div>
            </div>
          ))}
        </div>
        <div className={css.description}>
          你专注力的表现为：良好，超越了68%的同龄人，请继续保持，你的持之以恒将会有更大的收获！
        </div>

        <div className={css.btn}>
          <Button
            onClick={() => {
              toNext();
            }}
          >
            进行记忆力测评
          </Button>
        </div>
      </div>
    </Result>
  );
}

// 自由记忆、顺序记忆结果
function MemoryResult({ score = 0, scoreText = '', btnText = '', description = '', toNext }) {
  return (
    <Result>
      <div className={css.memoryContent}>
        <div className={css.score}>
          {score}
          <span>个</span>
        </div>
        <div className={css.subScore}>{scoreText}</div>
        <div className={css.modescription}>{description}</div>
        <div className={css.btnWrap}>
          <div className={css.btn}>
            <Button
              onClick={() => {
                toNext();
              }}
            >
              {btnText}
            </Button>
          </div>
        </div>
      </div>
    </Result>
  );
}

// 记忆力结果
function MemoryResultAll({ score = [0, 0, 0] }) {
  const [a, b, c] = score;
  return (
    <Result>
      <div className={css.memcontent}>
        <SubTag>恭喜你</SubTag>
        <div className={css.achveBox}>
          <div className={css.achveItem}>
            你的数字记忆广度为<span>{a}</span>个组块
          </div>
          <div className={css.achveItem}>
            言语工作记忆广度为<span>{b}</span>个组块
          </div>
          <div className={css.achveItem}>
            空间位置记忆广度为<span>{c}</span>个组块
          </div>
        </div>

        <div className={css.descriptionMro}>
          你专注力的表现为：良好，超越了68%的同龄人，请继续保持，你的持之以恒将会有更大的收获，你的持之以恒将会有更大的收获
          <div>请继续保持，你的持之以恒将会有更大的收获相信自己能做到更好，加油</div>
        </div>
      </div>
    </Result>
  );
}

// 推理力结果
function IntelljectResult({ score = 0, toNext = () => {}, btnText = '' }) {
  return (
    <Result>
      <div className={css.interjectResult}>
        <SubTag>正确答题数</SubTag>
        <div className={css.score}>{score}</div>
        <div className={css.description}>
          你专注力的表现为：良好，超越了68%的同龄人，请继续保持，你的持之以恒将会有更大的收获！
        </div>
        <div className={css.btnWrap}>
          <Button onClick={toNext}>{btnText}</Button>
        </div>
      </div>
    </Result>
  );
}
export { ConcentrationResult, MemoryResult, MemoryResultAll, IntelljectResult };
