import React from 'react';
import styles from './index.less';
import Bar from '@/components/Bar';
import Pop from '@/components/pop';
import Wrap from '@/containers/Wrap';
import More from '@/containers/More';
import { getTopQuotaReport } from '@/services/api';
import getUrlQuery from '@/utils/getUrlQuery';
import router from 'umi/router';
import Loading from '@/components/Loading';
import Track from '@/utils/track';
class Case extends React.Component {
  state = {
    isloading: true,
    showNotice: false,
    showall: false,
    data: null,
  };
  componentDidMount() {
    this.fetchData();
  }
  async fetchData() {
    const { quotaId, version, userId } = getUrlQuery();
    this.setState({ isloading: true });
    const { code, data } = await getTopQuotaReport({ userId: userId, quotaId, version: version });
    if (code === 0) {
      this.setState({
        data: {
          ...data,
        },
        isloading: false,
      });
      const y = window.sessionStorage.getItem('page2Scroll');
      window.scrollTo(0, y);
    }
  }
  render() {
    const { showNotice, isloading, data, showall } = this.state;
    if (isloading) {
      return <Loading></Loading>;
    }
    const {
      viewList,
      quotaName,
      allExplain,
      conclusion,
      allPerform,
      childQuotaCount,
      sCount,
      mCount,
      lCount,
      badList,
      level,
      excellentList,
    } = data;
    const viewData = [];
    const dataLen = Math.max(
      ...viewList.map(item => {
        viewData.push({
          isUp: item.direction,
          val: item.length,
          name: item.quotaName,
        });
        return item.totalLength;
      }),
    );
    return (
      <Wrap
        title={quotaName + '诊断'}
        onBack={() => {
          window.sessionStorage.setItem('page2Scroll', 0);
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
            {allExplain}
          </Pop>
        )}
        <div className={styles.caseBox}>
          <div className={styles.tag}>{quotaName}视图</div>
          <div className={styles.seeBox}>
            <div className={styles.totalDes}>
              整体表现：<span className={styles[`color` + level]}>{allPerform}</span>
              <img
                src="/images/report/question.png"
                alt=""
                onClick={() => {
                  this.setState({ showNotice: true });
                }}
              />
            </div>
            <div className={styles.inTotal}>
              共由{childQuotaCount}个{quotaName}指标组成
            </div>
            <div className={styles.bar}>
              <Bar.vert maxVal={dataLen} data={viewData}></Bar.vert>
            </div>
            <div className={styles.result}>
              <span>结论：</span>
              {conclusion}
            </div>
          </div>
        </div>

        <div className={styles.diffList}>
          {badList.length > 0 && (
            <div className={styles.diffAny}>
              发现
              {sCount > 0 && (
                <>
                  <span>{sCount}</span>个严重问题
                  {mCount > 0 || lCount > 0 ? '、' : null}
                </>
              )}
              {mCount > 0 && (
                <>
                  <span>{mCount}</span>个中度问题
                  {lCount > 0 ? '、' : null}
                </>
              )}
              {lCount > 0 && (
                <>
                  <span>{lCount}</span>个轻度问题
                </>
              )}
            </div>
          )}
          {badList.length > 0 && (
            <div className={styles.diffWrap}>
              {badList.map(item => (
                <div
                  className={styles.diffItem}
                  key={item.quotaId}
                  onClick={() => {
                    const state = localStorage.getItem('state');
                    window.sessionStorage.setItem('page2Scroll', window.scrollY);
                    const { version, userId } = getUrlQuery();
                    Track.tcFnc({
                      name: '10047',
                      type: 'click',
                      extra: {
                        id: item.quotaId,
                      },
                    });
                    router.push(
                      `/report/detaive?${state}&quotaId=${item.quotaId}&version=${version}&level=${item.level}&userId=${userId}`,
                    );
                  }}
                >
                  <div className={styles.diffTitle}>
                    <img src={`/images/report/icon${item.degree}.png`} alt="" />
                    <div>{item.title}</div>
                    <div>推荐方案{item.planCount}个</div>
                  </div>
                  <div className={styles.diffSee}>
                    <div>
                      <span>症状：</span>
                      {item.titleDesc}
                    </div>
                    <div>
                      <More></More>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {excellentList.length > 0 && badList.length !== 0 && (
            <div className={styles.moreWrap}>
              <div
                className={styles.moreDetav}
                onClick={() => {
                  this.setState({ showall: !showall });
                }}
              >
                查看剩余{excellentList.length}个{quotaName}指标
              </div>
            </div>
          )}
          {(showall || badList.length === 0) && (
            <div className={styles.goodsCase}>
              {excellentList.map(item => (
                <div
                  className={styles.goodsCaseItem}
                  key={item.quotaId}
                  onClick={() => {
                    const state = localStorage.getItem('state');
                    window.sessionStorage.setItem('page2Scroll', window.scrollY);
                    const { version, userId } = getUrlQuery();
                    Track.tcFnc({
                      name: '10047',
                      type: 'click',
                      extra: {
                        id: item.quotaId,
                      },
                    });
                    router.push(
                      `/report/detaive?${state}&quotaId=${item.quotaId}&version=${version}&userId=${userId}&level=${item.level}`,
                    );
                  }}
                >
                  <div className={styles.icon}>
                    <img src={`/images/report/icon${item.degree}.png`} alt="" />
                  </div>
                  <div className={styles.goodsCaseItemIn}>
                    <div className={styles.topWrap}>{item.title}</div>
                    <div className={styles.btWrap}>{item.titleDesc}</div>
                  </div>
                  <div className={styles.moreMsg}>
                    <More></More>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Wrap>
    );
  }
}

export default Case;
