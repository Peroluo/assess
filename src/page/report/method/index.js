import React from 'react';
import Wrap from '@/containers/Wrap';
import Pop from '@/components/pop';
import styles from './index.less';
import Star from '@/components/Star';
import Loading from '@/components/Loading';
import { getPlanDetail } from '@/services/api';
import getUrlQuery from '@/utils/getUrlQuery';
class Detaive extends React.Component {
  state = {
    isloading: true,
    showNotice: false,
    data: null,
  };
  async componentDidMount() {
    const id = getUrlQuery().id;
    const { code, data } = await getPlanDetail({ planId: id });
    if (code === 0) {
      this.setState({ isloading: false, data });
    }
  }
  render() {
    const { showNotice, isloading, data } = this.state;
    if (isloading) {
      return <Loading></Loading>;
    }
    const { plan, stepList } = data;
    return (
      <Wrap title={plan.planName}>
        {showNotice && (
          <Pop
            title={'方案介绍'}
            popClose={() => {
              this.setState({ showNotice: false });
            }}
          >
            {plan.introduce}
          </Pop>
        )}
        <div className={styles.methodIn}>
          <div>{plan.lessIntroduce}</div>
          <div
            onClick={() => {
              this.setState({ showNotice: true });
            }}
          >
            查看方案介绍
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardItem}>
            <div className={styles.title}>推荐评分</div>
            <div className={styles.starWrap}>
              <div className={styles.starItem}>
                <div className={styles.label}>提升效果</div>
                <div className={styles.content}>
                  <Star value={plan.promoteScore} total={5}></Star>
                </div>
              </div>
              <div className={styles.starItem}>
                <div className={styles.label}>易执行度</div>
                <div className={styles.content}>
                  <Star value={plan.executeScore} total={5}></Star>
                </div>
              </div>
              <div className={styles.starItem}>
                <div className={styles.label}>推荐指数</div>
                <div className={styles.content}>
                  <Star value={plan.recommendScore} total={5}></Star>
                </div>
              </div>
              <div className={styles.starItem}>
                <div className={styles.label}>成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 本</div>
                <div className={styles.content}>
                  <span>{plan.cost}元</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.title}>对应症状</div>
            <div className={styles.cardMsg}>{plan.symptom}</div>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.title}>适用人群</div>
            <div className={styles.cardMsg}>{plan.suitCrowd}</div>
          </div>
        </div>

        <div className={styles.stepWrap}>
          <div className={styles.tag}>操作步骤</div>
          {stepList.map((item, index) => {
            const list = item.stepDesc.split('\n');
            return (
              <div className={styles.stepItemWrap} key={item}>
                <div className={styles.label}>
                  <div className={styles.stepNum}>{index + 1}</div>
                </div>
                <div className={styles.content}>
                  <div className={styles.stepName}>
                    <span>{item.stepName}</span>
                    {item.costTime && (
                      <div className={styles.time}>
                        <img src="/images/report/time.png" alt="" />
                        {item.costTime}分钟
                      </div>
                    )}
                  </div>
                  {item.tool && (
                    <div className={styles.tool}>
                      <img src="/images/report/tool.png" alt="" />
                      {item.tool}
                    </div>
                  )}
                  <div className={styles.msg}>
                    {list.map(te => (
                      <span key={item}>
                        {te}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Wrap>
    );
  }
}

export default Detaive;
