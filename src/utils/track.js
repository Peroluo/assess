import Track from './test';

export default new Track({
  trackUrl: 'https://collector.wmzy.com/log-collect/app-behavior-upload',
  version: '1.0.0',
  threshold: 2,
  project: 'MECE',
  preFix: 'MECE-H5',
  cookieData: true,
  urlData: true,
  log: true,
  initBasic: {
    // platform: 'android', // 平台 ，ios ， android，baidu_miniprogram,wechat_miniprogram，tt_miniprogram，pc：必填：枚举，小写
    // uid: '',
    is_h5: '1', // 是否为 H5 页面：原生选填，仅为h5必填字段，默认不是，原生会缺省，缺省不是，1 表示为 H5
    is_outside_app: '1', // 是否在 APP 外：原生选填，H5必填：缺省不是，1 表示 app 外
    // third_channel_id: '10001', //三级渠道id
    // second_channel_id: '66666', //二级渠道id
  }, //额外的基础数据
  extraEvent: {},
});
