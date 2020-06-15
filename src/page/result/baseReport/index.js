import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import ScoreLine from '@/components/ScoreLine';
import ScoreType from '@/components/ScoreType';
import ResultLoading from '@/components/resultLoading';
import Router from 'umi/router';
import { learnGetReport, learnGenerateReport } from '@/services/api';
import { ActivityIndicator } from 'antd-mobile';
let isGet = false;
@connect(({ globalStat }) => ({ globalStat }))
class BaseReport extends React.Component {
  color = ['#FF3636', '#FA7501', '#FEB20F', '#A4D820', '#5EC73D', '#0EB575', '#00A677'];
  state = {
    loading: true,
    totalScore: '0',
    limit: [],
    evaluateNumber: '',
    advantage: '',
    weakness: '',
    reflictDesc: '',
    quotaList: [],
    levelDesc: '',
    ctime: '',
  };
  componentDidMount() {
    this.getScore();
  }

  async getScore() {
    await learnGenerateReport({ userId: this.props.globalStat.userInfo.id });
    const {
      code,
      data: {
        totalScore,
        levelList,
        evaluateNumber,
        advantage,
        weakness,
        reflictDesc,
        quotaList,
        levelDesc,
        ctime,
      },
    } = await learnGetReport({
      userId: this.props.globalStat.userInfo.id,
      version: 1,
      channel: 0,
    });
    let limit = [];
    levelList.reverse();
    for (let item of levelList) {
      limit.push(item.minScore);
    }
    limit.push(100);
    if (code === 0) {
      if (isGet) {
        this.setState({
          loading: false,
          totalScore: `${totalScore}`,
          limit,
          evaluateNumber,
          advantage: advantage ? advantage : '',
          weakness: weakness ? weakness : '',
          reflictDesc: reflictDesc ? reflictDesc : '',
          quotaList,
          levelDesc,
          ctime:
            new Date(ctime).getFullYear() +
            '.' +
            `${Number(new Date(ctime).getMonth()) + 1}` +
            '.' +
            new Date(ctime).getDate(),
        });
      }
      isGet = true;
      const id = setTimeout(() => {
        this.setState({
          loading: false,
          totalScore: `${totalScore}`,
          limit,
          evaluateNumber,
          advantage: advantage ? advantage : '',
          weakness: weakness ? weakness : '',
          reflictDesc: reflictDesc ? reflictDesc : '',
          quotaList,
          levelDesc,
          ctime:
            new Date(ctime).getFullYear() +
            '.' +
            `${Number(new Date(ctime).getMonth()) + 1}` +
            '.' +
            new Date(ctime).getDate(),
        });
        clearTimeout(id);
      }, 1500);
    }
  }
  render() {
    const {
      loading,
      totalScore,
      limit,
      evaluateNumber,
      advantage,
      weakness,
      reflictDesc,
      quotaList,
      levelDesc,
      ctime,
    } = this.state;
    if (loading && !isGet) {
      return <ResultLoading></ResultLoading>;
    }
    if (loading && isGet) {
      return <ActivityIndicator toast text="加载中..." />;
    }
    return (
      <div id={styles.report}>
        <div className={styles.content}>
          {this.renderUser(totalScore, limit, evaluateNumber, levelDesc, ctime)}
          {this.renderScoreDesc(advantage, weakness, reflictDesc)}
          {quotaList.map(item => {
            return this.renderKeyValue(item);
          })}
          {this.renderMsg()}
          <div className={styles.endNotice}>
            <img src="/images/notice2.png" alt="notice2" />
            诊断结果不是固定值，只是反映了您的发展动态
          </div>
        </div>
      </div>
    );
  }

  renderKeyValue(item) {
    return (
      <div className={styles.keyValueItem} key={item.quotaName}>
        <div
          className={styles.title}
          style={{ color: this.color[item.isSubjective ? item.subLevel - 1 : item.objLevel - 1] }}
        >
          <span>{item.quotaName}</span>
          <span>{item.isSubjective ? item.subScore : item.objScore}</span>
          <span> 分</span>
        </div>
        <div className={styles.ceScoreWrap}>
          {item.childQuotaList.map(temp => (
            <div
              className={styles.ceScoreItem}
              key={temp.quotaName}
              onClick={() => {
                const state = window.localStorage.getItem('state');
                Router.push(`/result/detail?quotaId=${temp.quotaId}&${state}`);
              }}
            >
              <div className={styles.label}>{temp.quotaName}</div>
              <div className={styles.score}>
                <ScoreType
                  totalLevel={temp.totalLeve}
                  level={
                    temp.isReflict
                      ? temp.objLevel - 1
                      : item.isSubjective
                      ? temp.subLevel - 1
                      : temp.objLevel - 1
                  }
                  desc={
                    item.isReflict ? temp.objDesc : temp.isSubjective ? temp.subDesc : temp.objDesc
                  }
                ></ScoreType>
              </div>
              <div className={styles.more}></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  renderUser(totalScore, limit, evaluateNumber, levelDesc, ctime) {
    const { headimgurl } = this.props.globalStat.wxUserInfo;
    const { name } = this.props.globalStat.userInfo;
    return (
      <div className={styles.userReport}>
        <div className={styles.headerLine}>
          <img className={styles.headerLogo} alt="user" src={headimgurl}></img>
          <div className={styles.userInfo}>{name}</div>
          <div className={styles.userNumber}>{evaluateNumber}</div>
          <div className={styles.createDate}>诊断时间：{ctime}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.label}>整体得分</div>
          <div className={styles.scoreDesc}>
            <ScoreLine score={totalScore} limit={limit}></ScoreLine>
          </div>
        </div>
        <div className={styles.userDesc}>{levelDesc}</div>
      </div>
    );
  }

  renderScoreDesc(advantage, weakness, reflictDesc) {
    return (
      <div className={styles.scoreDescWrap}>
        {advantage && (
          <div className={styles.scoreDescItem}>
            <div className={styles.label}>
              <div className={styles.circle} style={{ color: '#11BA79', borderColor: '#11BA79' }}>
                优势
              </div>
            </div>
            <div className={styles.contentText}>{advantage}</div>
          </div>
        )}
        {weakness && (
          <div className={styles.scoreDescItem}>
            <div className={styles.label}>
              <div className={styles.circle} style={{ color: '#FF3636', borderColor: '#FF3636' }}>
                弱势
              </div>
            </div>
            <div className={styles.contentText}>{weakness}</div>
          </div>
        )}
        {reflictDesc && (
          <div className={styles.scoreDescItem}>
            <div className={styles.label}>
              <div className={styles.circle} style={{ color: '#FE9F02', borderColor: '#FE9F02' }}>
                冲突
              </div>
            </div>
            <div className={styles.contentText}>{reflictDesc}</div>
          </div>
        )}
      </div>
    );
  }

  renderMsg() {
    return (
      <div className={styles.ceMsg}>
        <div>
          MECE学习力诊断(专业版)从40多种学习力指标中抽取部分核心指标，诊断影响学生学习成绩的主要因素所处的发展水平，为学生提供现状定位和指导意见，该诊断结果仅作参考！
        </div>
        <div>
          如需精准了解学生所有学习力指标发展的优势和问题，解决个性化学习问题，欢迎使用MECE学习力诊断（尊享版）。
        </div>
      </div>
    );
  }
}
export default BaseReport;
