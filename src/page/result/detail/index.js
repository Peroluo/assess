import React from 'react';
import styles from './index.less';
import Router from 'umi/router';
import ScoreLine from '@/components/ScoreLine';
import getUrlQuery from '@/utils/getUrlQuery';
import { getNextReport } from '@/services/api';
import { connect } from 'dva';
import { ActivityIndicator } from 'antd-mobile';
const TitleWrap = ({ title, children = null }) => {
  return (
    <div className={styles.titleWrap}>
      <div className={styles.titleTag}>{title}</div>
      <div className={styles.textBody}>{children}</div>
    </div>
  );
};

@connect(({ globalStat }) => ({ globalStat }))
class Detail extends React.Component {
  state = {
    quotaName: null,
    loading: true,
  };
  color = ['#FF3636', '#FA7501', '#FEB20F', '#A4D820', '#5EC73D', '#0EB575', '#00A677'];
  componentDidMount() {
    this.getNextReport();
  }
  async getNextReport() {
    const time1 = new Date().getTime();
    const quotaId = getUrlQuery().quotaId;
    const data = await getNextReport({ userId: this.props.globalStat.userInfo.id, quotaId });
    const time2 = new Date().getTime();
    if (time2 - time1 < 500) {
      const id = setTimeout(() => {
        this.setState({ data: data.data, loading: false });
        clearTimeout(id);
      }, 500 - time2 + time1);
    } else {
      this.setState({ data: data.data, loading: false });
    }
  }
  render() {
    const { loading, data } = this.state;
    if (loading) {
      return <ActivityIndicator toast text="加载中..." />;
    }
    let limit = [];
    data.levelList.reverse();
    for (let item of data.levelList) {
      limit.push(item.minScore);
    }
    limit.push(100);
    return (
      <div id={styles.detail}>
        <div className={styles.content}>
          <div
            className={styles.title}
            onClick={() => {
              Router.go(-1);
            }}
          >
            <img src="/images/back.png" alt="back" />
          </div>
          <div className={styles.titleName}>{data.quotaName}</div>
          <div className={styles.score}>
            <div className={styles.scoreLine}>
              <div className={styles.label}>指标得分</div>
              <div className={styles.scoreDesc}>
                <ScoreLine
                  score={`${
                    data.isReflict
                      ? data.objScore
                      : data.isSubjective
                      ? data.subScore
                      : data.objScore
                  }`}
                  limit={limit}
                />
              </div>
            </div>
            <TitleWrap
              title={
                <span>
                  您的{data.quotaName}指数：
                  <span
                    style={{
                      color: data.isReflict
                        ? '#FEB20F'
                        : this.color[data.isSubjective ? data.subLevel - 1 : data.objLevel - 1],
                    }}
                  >
                    {data.isReflict ? '冲突' : data.isSubjective ? data.subDesc : data.objDesc}
                  </span>
                </span>
              }
            >
              <div className={styles.scoreBox}>
                {data.isReflict && (
                  <div className={styles.diffBox}>
                    <div>
                      你的记忆力客观成绩得分为
                      <span
                        style={{
                          color: this.color[data.objLevel - 1],
                        }}
                      >
                        &nbsp;{data.objScore}&nbsp;
                      </span>
                      处于
                      <span
                        style={{
                          color: this.color[data.objLevel - 1],
                        }}
                      >
                        &nbsp;{data.objDesc}&nbsp;
                      </span>
                    </div>
                    <div>
                      你的记忆力自评成绩得分为
                      <span
                        style={{
                          color: this.color[data.subLevel - 1],
                        }}
                      >
                        &nbsp;{data.subScore}&nbsp;
                      </span>
                      处于
                      <span
                        style={{
                          color: this.color[data.subLevel - 1],
                        }}
                      >
                        &nbsp;{data.subDesc}&nbsp;
                      </span>
                    </div>
                  </div>
                )}
                {data.isReflict ? data.reflictDesc : data.levelDesc}
              </div>
            </TitleWrap>
          </div>
          {!data.isReflict && data.suggestion && (
            <div className={styles.textWrap}>
              <TitleWrap title="指导建议">
                {data.suggestion.split('<br/>').map((item, index) => {
                  return (
                    <div>
                      {item}
                      {index % 2 === 0 && <br />}
                    </div>
                  );
                })}
              </TitleWrap>
            </div>
          )}
          {(data.scienceDefine || data.theorySource) && (
            <div className={styles.textWrap}>
              {data.scienceDefine && <TitleWrap title="科学定义">{data.scienceDefine}</TitleWrap>}
              {data.theorySource && <TitleWrap title="理论来源">{data.theorySource}</TitleWrap>}
            </div>
          )}
          <div className={styles.endNotice}>
            <img src="/images/notice2.png" alt="notice2" />
            诊断结果不是固定值，只是反映了您的发展动态
          </div>
        </div>
      </div>
    );
  }
}
export default Detail;
