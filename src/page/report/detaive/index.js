import React from 'react';
import Wrap from '@/containers/Wrap';
import EndNotice from '@/containers/EndNotice';
import More from '@/containers/More';
import Pop from '@/components/pop';
import styles from './index.less';
import Star from '@/components/Star';
import Loading from '@/components/Loading';
import getUrlQuery from '@/utils/getUrlQuery';
import { getLeafQuotaReport } from '@/services/api';
import router from 'umi/router';
import Track from '@/utils/track';
class Detaive extends React.Component {
  state = {
    showNotice: false,
    showNotice2: false,
    isloading: true,
    data: null,
  };
  componentDidMount() {
    this.fetchData();
  }
  async fetchData() {
    const { quotaId, userId, version, level } = getUrlQuery();
    const { code, data } = await getLeafQuotaReport({
      userId,
      quotaId,
      level,
      version,
    });
    if (code === 0) {
      this.setState({
        isloading: false,
        data,
      });
      const y = window.sessionStorage.getItem('page3ScrollY');
      window.scrollTo(0, y);
    }
  }
  render() {
    const { showNotice, showNotice2, isloading, data } = this.state;

    if (isloading) {
      return <Loading></Loading>;
    }
    const { explain, planList } = data;
    return (
      <Wrap
        title={explain.quotaName + '诊断'}
        noPb
        onBack={() => {
          window.sessionStorage.setItem('page3ScrollY', 0);
          router.go(-1);
        }}
      >
        {showNotice && (
          <Pop
            title={'评级说明'}
            popClose={() => {
              this.setState({ showNotice: false });
            }}
          >
            {explain.levelExplain}
          </Pop>
        )}
        {showNotice2 && (
          <Pop
            title={'科学原理'}
            popClose={() => {
              this.setState({ showNotice2: false });
            }}
          >
            {explain.scienceDesc}
          </Pop>
        )}
        <div className={styles.detaiveBox}>
          <div className={styles.taiveName}>
            指标评级：
            <span className={styles[`color` + explain.level]}>{explain.levelExplicate}</span>
            <img
              src="/images/report/question.png"
              alt=""
              onClick={() => {
                this.setState({ showNotice: true });
              }}
            />
          </div>
          <div className={styles.result}>
            <span> 结论：</span>
            {explain.conclusion}
          </div>
          <div className={styles.secRes}>
            <span>科学原理：</span>
            <div> {explain.scienceDesc}</div>
            <div
              onClick={() => {
                this.setState({ showNotice2: true });
              }}
            >
              <More></More>
            </div>
          </div>
        </div>

        {planList.length > 0 ? (
          <div className={styles.caseAny}>
            <div className={styles.titles}>
              <img src="/images/report/up.png" alt="" />
              推荐方案
            </div>
            {planList.map(item => (
              <div
                className={styles.caseItem}
                key={item.id}
                onClick={() => {
                  Track.tcFnc({
                    name: '10048',
                    type: 'click',
                    extra: {
                      id: item.id,
                    },
                  });
                  const state = localStorage.getItem('state');
                  const { userId, version } = getUrlQuery();
                  window.sessionStorage.setItem('page3ScrollY', window.scrollY);
                  router.push(
                    `/report/method?${state}&id=${item.id}&version=${version}&userId=${userId}`,
                  );
                }}
              >
                <div className={styles.caseWrap}>
                  <div className={styles.caseNameT}>{item.planName}</div>
                  <div className={styles.casePr}>
                    成本：{item.cost}元 <span>|</span> 提升效果
                    <Star value={item.recommendScore} total={5}></Star>
                  </div>
                  <div className={styles.useCaseT}>{item.lessIntroduce}</div>
                </div>
                <div className={styles.more}>
                  <More></More>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.renderNull}>
            <img src="/images/report/over.png" alt="" />
            <div>表现很棒，继续保持就好</div>
          </div>
        )}
        <EndNotice></EndNotice>
      </Wrap>
    );
  }
}

export default Detaive;
