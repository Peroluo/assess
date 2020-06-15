const state = getUrlCode().state;
const ceType = decodeURIComponent(state).split(',')[0]; //2:半小时3:2个小时
function getUrlCode() {
  // 截取url中的code方法
  const url = window.location.search;
  let parmas = {};
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1);
    let strs = str.split('&');
    for (let i = 0; i < strs.length; i++) {
      parmas[strs[i].split('=')[0]] = strs[i].split('=')[1];
    }
  }
  return parmas;
}
export default {
  namespace: 'globalStat',
  state: {
    isAuth: false, //是否已经授权
    userInfo: {}, // 用户信息
    wxUserInfo: {}, // 微信用户信息
    isRegister: false, // 是否是已经注册的用户
    openId: '',
    unionId: '',
    isActivated: false, //是否已填写邀请码
    ceType: ceType,
    completeCe: [],
  },
  // state: {
  //   isAuth: true,
  //   isActivated: true,
  //   userInfo: {
  //     id: 109,
  //     version: '1',
  //     wxOpenId: 'opJ6ZxNuZqFg_PtcTlZG3gaVQik4',
  //     miniOpenId: '',
  //     unionId: 'union001',
  //     provinceId: '210000000000',
  //     cityId: '210100000000',
  //     regionId: '210102000000',
  //     role: 0,
  //     name: '罗国雄',
  //     sex: 0,
  //     birthDay: 1577289600000,
  //     k12SchId: '',
  //     k12SchName: '',
  //     gradeId: 5,
  //     mobile: '15323807318',
  //     status: 1,
  //     ctime: 1577345780324,
  //   },
  //   wxUserInfo: {
  //     openid: 'opJ6ZxNuZqFg_PtcTlZG3gaVQik4',
  //     nickname: '你写代码的样子像极了蔡徐坤😤',
  //     sex: 1,
  //     language: 'zh_CN',
  //     city: '深圳',
  //     province: '广东',
  //     country: '中国',
  //     headimgurl:
  //       'http://thirdwx.qlogo.cn/mmopen/vi_32/BreNqD709wugBlGnMrd29sY1kVRsmCBFjgs0julic31IDATia8EZTwC0sc1LZibmnT8LuYXeIJILCDrEDjb0mhibKg/132',
  //     privilege: [],
  //   },
  //   isRegister: true,
  //   openId: 'opJ6ZxNuZqFg_PtcTlZG3gaVQik4',
  //   unionId: 'union001',
  //   ceType,
  //   completeCe: [],
  //   type: 'globalStat/setData',
  // },

  reducers: {
    setData(state, data) {
      return {
        ...state,
        ...data,
      };
    },
  },
  effects: {},
};
