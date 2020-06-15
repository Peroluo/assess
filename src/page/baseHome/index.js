import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import router from 'umi/router';
import { Modal } from 'antd-mobile';
import StatusButton from '@/components/StatusButton';
import Loading from '@/components/Loading';
import { getUserScores, getReport } from '@/services/api';
import Track from '@/utils/track';
@connect(({ globalStat }) => ({ globalStat }))
class BaseHome extends React.Component {
  state = {
    loading: true,
    part1: -1,
    part2: -1,
    part3: -1,
    part4: -1,
    part5: -1,
    completeNum: 0,
    isReport: false,
  };
  componentDidMount() {
    Track.tcFnc({
      name: '10026',
      type: 'view',
    });
    this.getUserScores();
  }
  async getUserScores() {
    const time1 = new Date().getTime();
    const { userInfo, ceType } = this.props.globalStat;
    const { code, data } = await getUserScores({
      userId: userInfo.id,
      channel: 0,
      version: ceType,
    });

    const report = await getReport({
      userId: userInfo.id,
      version: ceType,
      channel: 0,
    });
    console.log(report);
    const stage = {
      part1: -1,
      part2: -1,
      part3: -1,
      part4: -1,
      part5: -1,
    };
    const part2Stage = [];
    let completeNum = 0;
    if (code === 0) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.childStage === 0 && item.stage !== 2) {
          completeNum += 1;
          switch (item.stage) {
            case 1:
              stage.part1 = 1;
              break;
            case 4:
              stage.part3 = 1;
              break;
            case 3:
              stage.part5 = 1;
              break;
            case 5:
              stage.part4 = 1;
              break;
            default:
              break;
          }
        }
        if (item.stage === 2) {
          part2Stage.push(item.childStage);
        }
      }
      if (part2Stage.length === 3) {
        stage.part2 = 1;
        completeNum += 1;
      } else if (part2Stage.length === 0) {
        stage.part2 = -1;
      } else {
        stage.part2 = 0;
      }
    }
    const time2 = new Date().getTime();
    if (time2 - time1 < 500) {
      const id = setTimeout(() => {
        this.setState({
          ...this.state,
          ...stage,
          loading: false,
          isReport: report.data.isReport,
          completeNum,
        });
        clearTimeout(id);
      }, 500 - time2 + time1);
    } else {
      this.setState({
        ...this.state,
        ...stage,
        loading: false,
        isReport: report.data.isReport,
        completeNum,
      });
    }
  }

  toReport = () => {
    const {
      ceType,
      userInfo: { id },
    } = this.props.globalStat;
    if (
      (this.state.completeNum === 4 && ceType === '2') ||
      (this.state.completeNum === 5 && ceType === '3')
    ) {
      const state = localStorage.getItem('state');
      router.push('/report/create?' + state + `&version=${ceType}&userId=${id}`);
      // 跳转到结果页
    } else {
      Modal.alert(
        '',
        <div className={styles.modelContent}>请先完成所有学生及家长诊断后 智能生成报告</div>,
        [
          {
            text: <span className={styles.modelBtn}>好的</span>,
          },
        ],
      );
    }
  };
  toNext(index, status) {
    if (!this.state.loading) {
      // 测评路由
      const state = localStorage.getItem('state');

      const testPage = [
        `/pointnum/index?${state}`,
        `/memory?${state}`,
        `/intellect?${state}`,
        `/questionaire/index?role=student&${state}`,
        `/questionaire/index?role=parents&${state}`,
      ];

      //测评结果路由
      if (status !== 1) {
        router.push(testPage[index]);
        Track.tcFnc({
          name: '10050',
          type: 'click',
          extra: {
            index,
          },
        });
      } else {
        Track.tcFnc({
          name: '10027',
          type: 'click',
          extra: {
            index,
          },
        });
        router.push('/mine/result?stage=' + (index + 1) + `&${state}`);
      }
    }
  }
  render() {
    const { loading, part1, part2, part3, part4, part5, completeNum, isReport } = this.state;
    const { ceType } = this.props.globalStat;
    if (loading) {
      return <Loading />;
    }
    return (
      <div className={ceType === '2' ? styles.home : styles.home2}>
        <div className={styles.box}>
          <div className={styles.titleDes}></div>
          <div className={styles.content}>
            <div className={styles.ceceList}>
              <div className={styles.stepWrap}>
                <div className={part1 === 1 ? styles.circle : styles.noCircle}></div>
                <div className={styles.activeLine}></div>
                <div className={part2 === 1 ? styles.circle : styles.noCircle}></div>
                <div className={styles.activeLine}></div>
                {ceType === '3' && (
                  <>
                    <div className={part5 === 1 ? styles.circle : styles.noCircle}></div>
                    <div className={styles.activeLine}></div>
                  </>
                )}
                <div className={part3 === 1 ? styles.circle : styles.noCircle}></div>
              </div>
              <div
                className={styles.firtCeceItem}
                onClick={() => {
                  this.toNext(0, part1);
                }}
              >
                <div className={styles.studentFix}>学生使用</div>
                <div className={styles.itemName}>专注力测评</div>
                <div className={styles.btnWrap}>
                  <div className={part1 === 1 ? styles.complete : styles.waiting}>
                    <StatusButton status={part1}></StatusButton>
                  </div>
                </div>
              </div>
              <div
                className={styles.ceceItem}
                onClick={() => {
                  this.toNext(1, part2);
                }}
              >
                <div className={styles.itemName}>记忆力测评</div>
                <div className={styles.btnWrap}>
                  <StatusButton status={part2}></StatusButton>
                </div>
              </div>
              {/* 推理力 */}
              {ceType === '3' && (
                <div
                  className={styles.ceceItem}
                  onClick={() => {
                    this.toNext(2, part5);
                  }}
                >
                  <div className={styles.itemName}>推理力测评</div>
                  <div className={styles.btnWrap}>
                    <StatusButton status={part5}></StatusButton>
                  </div>
                </div>
              )}

              <div
                className={styles.ceceItem}
                onClick={() => {
                  this.toNext(3, part3);
                }}
              >
                <div className={styles.itemName}>自助问答诊断</div>
                <div className={styles.btnWrap}>
                  <StatusButton status={part3} name="开始诊断"></StatusButton>
                </div>
              </div>
            </div>
            <div
              className={styles.parentCe}
              onClick={() => {
                this.toNext(4, part4);
              }}
            >
              <div className={styles.fix}>家长使用</div>
              <div className={styles.itemName}>辅助问答诊断</div>
              <img src={`/images/circle0${part4 === 1 ? 3 : 2}.png`} alt="" />
              <div className={styles.btnWrap}>
                <StatusButton status={part4} name="开始诊断"></StatusButton>
              </div>
            </div>

            <div className={styles.fixFoot} onClick={this.toReport}>
              <div
                style={{
                  opacity:
                    (ceType === '2' && completeNum !== 4) || (ceType === '3' && completeNum !== 5)
                      ? 0.5
                      : 1,
                }}
              >
                {isReport ? (
                  '查看报告'
                ) : (
                  <>
                    智能生成报告({completeNum}/{ceType === '3' ? 5 : 4})
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaseHome;
