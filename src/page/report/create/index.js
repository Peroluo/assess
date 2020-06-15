import React from 'react';
import CreateReport from '@/containers/CreateReport';
import { getReport, generateReportNew } from '@/services/api';
import router from 'umi/router';
import Loading from '@/components/Loading';
import getUrlQuery from '@/utils/getUrlQuery';
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
      isSimple: true,
    };
  }
  componentDidMount() {
    this.getReport();
    window.sessionStorage.setItem('Page1scrollY', 0);
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
      } else {
        await generateReportNew(query);
        let { data } = await getReport({
          ...query,
          channel: 0,
        });
        const { isReport } = data;
        if (isReport) {
          const { userInfo, brief, position, suggestionList, planList, ctime } = data;
          this.setState({
            loading: false,
            showReport: false,
            isSimple: true,
            userInfo,
            brief,
            position,
            suggestionList,
            planList,
            ctime,
          });
        }
      }
    }
  };
  render() {
    const { showReport, loading, userInfo, brief, ctime } = this.state;
    if (loading) {
      return <Loading></Loading>;
    }
    return (
      <CreateReport
        toDetail={() => {
          const state = localStorage.getItem('state');
          const query = getUrlQuery();
          router.push('/report?' + state + `&version=${query.version}&userId=${query.userId}`);
          this.setState({ isSimple: false });
        }}
        showReport={showReport}
        brief={brief}
        ctime={ctime}
        userInfo={userInfo}
      ></CreateReport>
    );
  }
}
export default Report;
