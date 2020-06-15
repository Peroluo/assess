import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import Redirect from 'umi/redirect';
import Button from '@/components/Button';
import PickInput from '@/components/pickInput';
import { cityData, roleData, gradeData } from '../utils/cityData';
import Toasts from '@/components/Toast';
import alert from './memory/Op/alert';
import Track from '@/utils/track';
import { saveUserInfos, getUserInfos, isRightCode } from '@/services/api';
@connect(({ globalStat }) => ({ globalStat }))
class Setter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '',
      name: '',
      birthDay: '',
      gradeId: '',
      mobile: '',
      city: '',
      code: '',
    };
    this.myRef = React.createRef();
    this.myRef1 = React.createRef();
  }
  // 关闭IOSinput弹起
  pickIsShow = () => {
    this.myRef.current.blur();
    this.myRef1.current.blur();
  };
  pickClose = (type, val) => {
    this.setValue(type, val);
  };
  pickChoose = (type, val) => {
    this.setValue(type, val);
  };
  setValue(key, value) {
    this.setState({ [key]: value });
  }
  renderContent(status) {
    let isRight = this.isAllow();
    const { role, name, birthDay, gradeId, mobile, city } = this.state;
    return (
      <div id={styles.setter}>
        <div className={styles.wrapBg}></div>
        <div className={styles.setterPage}>
          <div className={styles.titleContent}>
            <div>请填写学生信息</div>
            <div>为生成专属报告及诊断的有效性，请真实填写</div>
          </div>
          <div className={styles.content}>
            <PickInput
              placeholder="请选择身份"
              title="你的身份"
              pickTitle="选择身份"
              onClose={val => {
                // this.pickClose('role', val);
              }}
              value={role}
              data={roleData}
              onOk={val => {
                this.pickChoose('role', val);
              }}
              onShow={this.pickIsShow}
            />
            <div className={styles.inputWrap}>
              <div className={styles.inputLabel}>学生姓名：</div>
              <div className={styles.inputBody}>
                <input
                  ref={this.myRef}
                  placeholder="请输入姓名"
                  value={name}
                  onChange={event => {
                    this.setValue('name', event.target.value);
                  }}
                ></input>
              </div>
            </div>
            <PickInput
              placeholder="请选择出生日期"
              title="学生生日"
              pickTitle="选择生日"
              onClose={val => {
                this.pickClose('birthDay', val);
              }}
              value={birthDay}
              onOk={val => {
                this.pickChoose('birthDay', val);
              }}
              onShow={this.pickIsShow}
            />
            <div className={styles.inputWrap}>
              <div className={styles.inputLabel}>手机号码：</div>
              <div className={styles.inputBody}>
                <input
                  type="tel"
                  placeholder="请输入手机号码"
                  value={mobile}
                  ref={this.myRef1}
                  onChange={event => {
                    this.setValue('mobile', event.target.value);
                  }}
                ></input>
              </div>
            </div>
            <PickInput
              placeholder="请选择所在地区"
              title="所在地区"
              pickTitle="选择所在地区"
              onClose={val => {
                this.pickClose('city', val);
              }}
              value={city}
              data={cityData}
              onOk={val => {
                this.pickChoose('city', val);
              }}
              cascade
              onShow={this.pickIsShow}
            />
            <PickInput
              placeholder="请选择就读年级"
              title="就读年级"
              pickTitle="选择年级"
              onClose={val => {
                this.pickClose('gradeId', val);
              }}
              value={gradeId}
              data={gradeData}
              onOk={val => {
                this.pickChoose('gradeId', val);
              }}
              onShow={this.pickIsShow}
            />
            <div className={styles.buttonWrap}>
              <Button
                disabled={!isRight}
                onClick={() => {
                  this.submitForm();
                }}
              >
                提交
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  async submitForm2() {
    const { ceType, userInfo } = this.props.globalStat;
    console.log(userInfo);
    const { code } = this.state;
    if (code === '') {
      Toasts.info(<div className={styles.coustomesToast}>邀请码不能为空！</div>, 1000);
      return;
    }
    const data = await isRightCode({
      code,
      version: ceType,
      userId: this.props.globalStat.userInfo ? this.props.globalStat.userInfo.id : '',
    });
    if (data.code === 0) {
      this.props.dispatch({
        type: 'globalStat/setData',
        isActivated: true,
      });
    } else {
      Toasts.info(<div className={styles.coustomesToast}>{data.message}</div>, 1000);
    }
  }
  async submitForm() {
    const { ceType, userInfo, openId, unionId } = this.props.globalStat;
    const { role, name, birthDay, gradeId, mobile, code, city } = this.state;
    if (role === '') {
      Toasts.info(<div className={styles.coustomesToast}>请选择你的身份</div>, 1000);
      return;
    }
    if (name === '') {
      Toasts.info(<div className={styles.coustomesToast}>请输入学生姓名</div>, 1000);
      return;
    }
    if (birthDay === '') {
      Toasts.info(<div className={styles.coustomesToast}>请输入学生生日</div>, 1000);
      return;
    }
    if (!/^1[3456789]\d{9}$/.test(mobile)) {
      Toasts.info(<div className={styles.coustomesToast}>请输入有效手机号码</div>, 1000);
      return;
    }
    if (city === '') {
      Toasts.info(<div className={styles.coustomesToast}>请选择所在地</div>, 1000);
      return;
    }
    if (gradeId === '') {
      Toasts.info(<div className={styles.coustomesToast}>请输入学生年级</div>, 1000);
      return;
    }
    this.alertId = alert(
      '填好了，去提交?',
      '再想想',
      '提交',
      () => {
        this.alertId.close();
      },
      () => {
        const parmas = {
          gradeId: gradeId[0],
          mobile,
          name,
          provinceId: city[0],
          cityId: city[1],
          regionId: city[2],
          wxOpenId: openId,
          unionId,
        };
        const [year, month, day] = birthDay;
        parmas.birthDay = new Date(year, month - 1, day).getTime();
        parmas.code = code;
        if (userInfo) {
          parmas.version = userInfo.version + `,${ceType}`;
          parmas.id = userInfo.id;
        } else {
          parmas.version = ceType;
        }

        Track.tcFnc({
          name: '10025',
          type: 'click',
          extra: {
            ...parmas,
          },
        });
        this.submitInfo(parmas);
      },
    );
  }
  async submitInfo(parmas) {
    const { unionId } = this.props.globalStat;
    const { code } = await saveUserInfos(parmas);
    if (code === 0) {
      const { data, code } = await getUserInfos({ unionId });
      if (code === 0) {
        this.props.dispatch({
          type: 'globalStat/setData',
          userInfo: { ...data },
        });
        Track.init({
          initBasic: { ...data }, //额外的基础数据
        });
      }
    }
  }
  isAllow() {
    const { role, name, birthDay, gradeId, mobile, city } = this.state;
    if (
      role !== '' &&
      name !== '' &&
      city !== '' &&
      birthDay !== '' &&
      gradeId !== '' &&
      /^1[3456789]\d{9}$/.test(mobile)
    ) {
      return true;
    } else {
      return false;
    }
  }
  renderCode() {
    const { code } = this.state;
    return (
      <div id={styles.setter}>
        <div className={styles.setterPage}>
          <div className={styles.codeTitle}>请填写邀请码</div>
          <div className={styles.content}>
            <div className={styles.inputWrap2}>
              <div className={styles.inputLabel}>邀请码：</div>
              <div className={styles.inputBody}>
                <input
                  ref={this.myRef}
                  input={code}
                  placeholder="请输入有效邀请码"
                  onChange={event => {
                    this.setValue('code', event.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className={styles.buttonWrap2}>
              <Button
                disabled={code === ''}
                onClick={() => {
                  this.submitForm2();
                }}
              >
                提交
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { isActivated } = this.props.globalStat;

    const { userInfo, ceType } = this.props.globalStat;
    const state = localStorage.getItem('state');
    if (!isActivated) {
      return this.renderCode();
    } else {
      if (userInfo) {
        return <Redirect to={`/baseHome?${state}`} />;
      } else {
        return this.renderContent(ceType);
      }
    }
  }
}
export default Setter;
