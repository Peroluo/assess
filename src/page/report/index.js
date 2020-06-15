import React, { Fragment } from 'react';
import ScrollTab from '@/components/ScrollTab';
import styles from './index.less';
import Star from '@/components/Star';
import Bar from '@/components/Bar';
import EndNotice from '@/containers/EndNotice';
import More from '@/containers/More';
import { getReport } from '@/services/api';
import router from 'umi/router';
import Loading from '@/components/Loading';
import getUrlQuery from '@/utils/getUrlQuery';
import Track from '@/utils/track';
import { connect } from 'dva';
@connect(({ globalStat }) => ({ globalStat }))
class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showReport: true, //是否展示生成动画 //true不需要动画
      userInfo: null,
      brief: null,
      position: null,
      suggestionList: null,
      planList: null,
      ctime: 0,
    };
  }
  componentDidMount() {
    Track.tcFnc({
      name: '10041',
      type: 'view',
    });
    this.getReport();
  }
  componentWillUnmount() {
    Track.tcFnc({
      name: '10042',
      type: 'view',
    });
  }
  getReport = async () => {
    this.setState({ loading: true });
    const query = getUrlQuery();
    const { data, code } = await getReport({
      ...query,
      channel: 0,
    });
    if (code === 0) {
      const { isReport } = data;
      if (isReport) {
        const { userInfo, brief, position, suggestionList, planList, ctime } = data;
        this.setState({
          loading: false,
          userInfo,
          brief,
          position,
          suggestionList,
          planList,
          ctime,
        });
      }
      const y = window.sessionStorage.getItem('Page1scrollY');
      window.scrollTo(0, y);
    }
  };
  renderNull() {
    return (
      <div className={styles.overNull}>
        <img src="/images/report/over.png" alt="" />
        <div>表现很棒，继续保持就好</div>
      </div>
    );
  }
  render() {
    const { loading, userInfo, position, suggestionList, planList, ctime } = this.state;
    const { wxUserInfo } = this.props.globalStat;
    if (loading) {
      return <Loading></Loading>;
    }
    const { userName, evaluateNumber, gradeName } = userInfo;
    const { viewList, positionExplain, dataList } = position;

    const data = [];
    const dataLen = Math.max(
      ...viewList.map(item => {
        data.push({
          isUp: item.direction,
          val: item.length,
          name: item.quotaName,
        });
        return item.totalLength;
      }),
    );
    return (
      <Fragment>
        <div className={styles.report}>
          <div className={styles.wrap}></div>
          <div className={styles.content}>
            <div className={styles.backWrap}>
              <div
                className={styles.backBtn}
                onClick={() => {
                  router.go(-1);
                  window.sessionStorage.removeItem('Page1scrollY');
                }}
              >
                <img src="/images/back.png" alt="ss" />
              </div>
            </div>
            <div className={styles.simpleReport}>
              <img src={wxUserInfo.headimgurl} alt="" className={styles.userIcon} />
              {/* <img src="/images/report/user.png" alt="" className={styles.userIcon} /> */}
              <div className={styles.userMsg}>
                <div>
                  {userName} <span>|</span> {gradeName}
                </div>
                <div>
                  {evaluateNumber} <span>|</span> 报告日期：
                  {new Date(ctime).getFullYear() +
                    '.' +
                    `${Number(new Date(ctime).getMonth()) + 1}` +
                    '.' +
                    new Date(ctime).getDate()}
                </div>
              </div>
            </div>
            <div className={styles.none}></div>
            <ScrollTab
              onChoose={index => {
                Track.tcFnc({
                  name: '10043',
                  type: 'click',
                  extra: {
                    tab: index,
                  },
                });
              }}
            >
              <ScrollTab.plain title={'问题解读'}>
                <div className={styles.caseContent}>
                  <div className={styles.caseTitle}>问题解读</div>
                  <div className={styles.lineWrap}>
                    <div className={styles.lineContent}>
                      <div className={styles.lineTitle}>MECE整体视图</div>
                      <div className={styles.showLineWrap}>
                        <Bar maxVal={dataLen} data={data}></Bar>
                      </div>
                      <div className={styles.results}>
                        {positionExplain
                          ? `你的主要问题集中在${positionExplain}上面`
                          : '没有问题！'}
                      </div>
                    </div>
                  </div>
                  <div className={styles.meceWrap}>
                    {dataList.map(item => {
                      return (
                        <div
                          className={styles.meceItem}
                          key={item.quotaId}
                          onClick={() => {
                            Track.tcFnc({
                              name: '10044',
                              type: 'click',
                              extra: {
                                quotaId: item.quotaId,
                              },
                            });
                            const state = localStorage.getItem('state');
                            const query = getUrlQuery();
                            window.sessionStorage.setItem('Page1scrollY', window.scrollY);
                            router.push(
                              `/report/case?${state}&quotaId=${item.quotaId}&version=${query.version}&userId=${query.userId}`,
                            );
                          }}
                        >
                          <div className={styles.meceIcon}>
                            <img src={`/images/report/icon${item.degree}.png`} alt="" />
                            <span>{item.quotaName}</span>
                          </div>
                          <div className={styles.meceMsgWrap}>
                            <div className={styles.meceImpo}>
                              {item.degree === 4 && (
                                <div className={styles.meceImpoMsg}>
                                  优秀 <span>0</span>个问题
                                </div>
                              )}
                              {item.degree === 5 && (
                                <div className={styles.meceImpoMsg}>
                                  拔尖 <span>0</span>个问题
                                </div>
                              )}
                              {item.sCount !== 0 && (
                                <div className={styles.meceImpoMsg}>
                                  <span>{item.sCount}</span>个严重问题
                                </div>
                              )}
                              {item.mCount !== 0 && (
                                <div className={styles.meceImpoMsg}>
                                  <span>{item.mCount}</span>个中度问题
                                </div>
                              )}
                              {item.lCount !== 0 && (
                                <div className={styles.meceImpoMsg}>
                                  <span>{item.lCount}</span>个轻度问题
                                </div>
                              )}
                            </div>
                            <div className={styles.meceDeil}>
                              {item.degreeDesc.degreeDesc}
                              {item.degree < 4 ? (
                                <>
                                  <br></br> 推荐方案：{item.pCount}个
                                </>
                              ) : (
                                <>
                                  <br></br> 暂无推荐方案
                                </>
                              )}
                            </div>
                          </div>
                          <More isGrey></More>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollTab.plain>
              <ScrollTab.plain title={'初步建议'}>
                <div className={styles.caseContent}>
                  <div className={styles.caseTitle}>初步建议</div>
                  <div className={styles.suggesionWrap}>
                    <img
                      src="/images/report/suggestion.png"
                      alt="s"
                      className={styles.suggesion}
                    ></img>
                  </div>
                  {suggestionList.length > 0 ? (
                    <>
                      <div className={styles.suggesionTitle}>
                        基于由大到小、下至上、内到外的原则建议你
                      </div>
                      <div className={styles.suggestCaseWrap}>
                        {suggestionList.map((item, index) => {
                          return (
                            <div className={styles.suggestCaseItem} key={index}>
                              <div className={styles.caseLabel}>
                                <div
                                  className={
                                    item.itemType === 1
                                      ? styles.case1Tag
                                      : item.itemType === 2
                                      ? styles.case2Tag
                                      : styles.case3Tag
                                  }
                                >
                                  {item.itemName}
                                </div>
                              </div>
                              <div className={styles.caseCircle}>
                                <div
                                  className={
                                    item.itemType === 1
                                      ? styles.circle1
                                      : item.itemType === 2
                                      ? styles.circle2
                                      : styles.circle3
                                  }
                                ></div>
                                <div
                                  className={index === suggestionList.length - 1 ? '' : styles.line}
                                ></div>
                              </div>
                              {item.flag ? (
                                <div className={styles.caseMsg}>
                                  <div className={styles.title}>{item.titleName}</div>
                                  <div className={styles.eventCase}>
                                    {item.quesList.map((itemx, temp) => (
                                      <div key={temp}>
                                        {itemx.quotaName}：共 <span>{itemx.count}</span> 个
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div className={styles.caseMsg2}>
                                  <span className={styles.titleName}>{item.titleName}</span>
                                  <span className={styles.proWr}>
                                    共<span className={styles.num}>{item.count}</span>
                                    个问题
                                  </span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <>{this.renderNull()}</>
                  )}
                </div>
              </ScrollTab.plain>
              <ScrollTab.plain title={'推荐方案'}>
                <div className={styles.caseContent}>
                  <div className={styles.caseTitle}>推荐方案</div>

                  {planList.length === 0 ? (
                    this.renderNull()
                  ) : (
                    <>
                      <div className={styles.doWithCase}>按照问题的严重程度，智能匹配推荐方案</div>
                      <div className={styles.doWithCaseWrap}>
                        {planList.map((item, index) => (
                          <div className={styles.doWithCaseItem} key={index}>
                            <div className={styles.doWidthTitle}>
                              <div className={styles.tag}>问题: {item.title}</div>
                              <div className={styles.doCase}>
                                推荐方案 <span>{item.planCount}</span> 个
                              </div>
                            </div>
                            <div className={styles.caseEventWrap}>
                              {item.childPlanList.map((temp, index2) => (
                                <div
                                  className={styles.caseEventItem}
                                  key={index2}
                                  onClick={() => {
                                    const state = localStorage.getItem('state');
                                    const query = getUrlQuery();
                                    window.sessionStorage.setItem('Page1scrollY', window.scrollY);
                                    Track.tcFnc({
                                      name: '10045',
                                      type: 'click',
                                      extra: {
                                        id: temp.planId,
                                      },
                                    });
                                    router.push(
                                      `/report/method?${state}&id=${temp.planId}&version=${query.version}&userId=${query.userId}`,
                                    );
                                  }}
                                >
                                  <div className={styles.caseWraper}>
                                    <div className={styles.doWidthAny}>
                                      <div className={styles.doWidthAnyTitle}>{temp.planName}</div>
                                    </div>
                                    <div className={styles.doWithUseAny}>
                                      <div>
                                        成本：{temp.cost}元 <span>|</span> 提升效果
                                      </div>
                                      <div>
                                        <Star value={temp.promoteScore} total={5}></Star>
                                      </div>
                                    </div>
                                    <div className={styles.doWithRes}>{temp.lessIntroduce}</div>
                                  </div>
                                  <More isGrey></More>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </ScrollTab.plain>
              <ScrollTab.plain title={'深度指导'}>
                <div className={styles.caseContent}>
                  <div className={styles.casePlan}>
                    <div className={styles.caseTitle2}>深度指导</div>
                    <div
                      className={styles.btn}
                      onClick={() => {
                        const { version } = getUrlQuery();
                        Track.tcFnc({
                          name: '10046',
                          type: 'click',
                        });

                        Track.tcFnc({
                          name: '10046',
                          type: 'click',
                          cb: () => {
                            window.location.href =
                              version === '2'
                                ? 'https://www.wjx.cn/jq/66819194.aspx'
                                : 'https://www.wjx.cn/jq/66828211.aspx';
                          },
                        });
                      }}
                    >
                      预约专家解读
                    </div>
                  </div>
                </div>
              </ScrollTab.plain>
            </ScrollTab>
            <EndNotice></EndNotice>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Report;
