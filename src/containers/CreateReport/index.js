import React from 'react';
import styles from './index.less';
import ReportCreate from '@/components/ReportCreate';

class CreateR extends React.Component {
  state = {
    showBtn: false,
  };
  render() {
    const { brief, userInfo, showReport, ctime } = this.props;
    const { userName, gradeName } = userInfo;
    return (
      <div className={styles.fixed}>
        <div className={styles.box}>
          <div className={styles.title}>你的学习力诊断简报</div>
          <div className={styles.subtitle}>
            {userName} <span>|</span> {gradeName}
            <span>|</span>
            报告日期：
            {new Date(ctime).getFullYear() +
              '.' +
              `${Number(new Date(ctime).getMonth()) + 1}` +
              '.' +
              new Date(ctime).getDate()}
          </div>
          <div className={styles.content}>
            <ReportCreate
              runAnimate={!showReport}
              onOver={() => {
                this.setState({ showBtn: true });
              }}
            >
              <ReportCreate.loading
                title="问题解读"
                complete={
                  <>
                    找到可改进的问题<span>{brief.positionCount}</span>项
                  </>
                }
                noticeMsg={[
                  '将结果类比10万+案例',
                  '找到1532个类似案例',
                  '正在分析所有问题',
                  '正在定位问题严重程度',
                  '分析完成',
                ]}
              />
              <ReportCreate.loading
                title="初步建议"
                complete={
                  <>
                    实现您期望的难度<span>{brief.suggestionFir}</span>
                    <br></br>
                    建议分成
                    <span>{brief.suggestionSec}</span>
                    个实现阶段
                  </>
                }
                noticeMsg={[
                  '正在分析你的成长期望',
                  '根据1.2亿成长经历分析',
                  '难度分析',
                  '分析完成',
                ]}
              />
              <ReportCreate.loading
                title="推荐方案"
                complete={
                  <>
                    为你匹配<span>{brief.solutionFir}</span>个适用方案<br></br>
                    重点推荐<span>{brief.solutionSec}</span>个精选方案
                  </>
                }
                noticeMsg={[
                  '正在匹配最佳解决方案',
                  '共找到多个可能的方案',
                  '正在筛选最适合的方案',
                  '分析完成',
                ]}
              />
            </ReportCreate>
            {(this.state.showBtn || showReport) && (
              <div
                className={styles.btn}
                onClick={() => {
                  this.props.toDetail();
                }}
              >
                查看完整诊断报告
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default CreateR;
