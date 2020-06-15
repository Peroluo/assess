import request from '@/utils/request';

// 保存用户成绩
export async function saveScore({ userId, platform, score, extraInfo, stage }) {
  return request('/evaluate/saveScore', {
    method: 'post',
    data: { userId, platform, score, extraInfo, stage },
  });
}

// 获取openId
export async function getOpenId({ code }) {
  return request('/learn/getBasicInfo', {
    method: 'get',
    params: { code },
  });
}

// 获取用户信息
export async function getUserInfo({ openId }) {
  return request('/evaluate/getUser', {
    method: 'get',
    params: { openId },
  });
}
// 获取用户信息
export async function saveUser(data) {
  return request('/evaluate/saveUser', {
    method: 'post',
    data,
  });
}

// 查询学校
export async function getSchool({ name }) {
  return request('/evaluate/getSchool', {
    method: 'get',
    params: { name },
  });
}

// 获取成绩
export async function getScore({ userId, platform, stage }) {
  return request('/evaluate/getScore', {
    method: 'get',
    params: { userId, platform, stage },
  });
}
// 查询当前测评记录
export async function getStage({ userId }) {
  return request('/evaluate/getStage', {
    method: 'get',
    params: { userId },
  });
}
// 道道测评版本接口
// 获取微信公众号的AppId
export async function getAppId(params) {
  return request('/learn/getAppId', {
    method: 'get',
    params,
  });
}

// 获取微信用户相关信息
export async function getWxUserInfos(params) {
  return request('/learn/wx/getBasicInfo', {
    method: 'get',
    params,
  });
}

// 保存用户信息
export async function saveUserInfos(params) {
  return request('/learn/saveUser', {
    method: 'post',
    data: params,
  });
}

// 获取用户信息
export async function getUserInfos(params) {
  return request('/learn/getUser', {
    method: 'get',
    params,
  });
}

// 获取用户成绩
export async function getUserScores(params) {
  return request('/learn/getScore', {
    method: 'get',
    params,
  });
}

// 保存用户成绩
export async function saveUserScores(params) {
  return request('/learn/saveScore', {
    method: 'post',
    data: params,
  });
}
// 生成报告
export async function learnGenerateReport(params) {
  return request('/learn/generateReport', {
    method: 'get',
    params,
  });
}
// 获取报告
export async function learnGetReport(params) {
  return request('/learn/getReport', {
    method: 'get',
    params,
  });
}

// 获取报告
export async function getNextReport(params) {
  return request('/learn/getNextReport', {
    method: 'get',
    params,
  });
}

// 验证code
export async function isRightCode(params) {
  return request('/learn/verifyInvitationCode', {
    method: 'get',
    params,
  });
}

// 获取报告
export async function getReport(params) {
  return request('/learn/getReport', {
    method: 'get',
    params,
  });
}

// 获取1级指标
export async function getTopQuotaReport(params) {
  return request('/learn/getTopQuotaReport', {
    method: 'get',
    params,
  });
}
// 获取2级指标
export async function getLeafQuotaReport(params) {
  return request('/learn/getLeafQuotaReport', {
    method: 'get',
    params,
  });
}
// 获取2级指标
export async function getPlanDetail(params) {
  return request('/learn/getPlanDetail', {
    method: 'get',
    params,
  });
}
// 生成报告
export async function generateReportNew(params) {
  return request('/learn/generateReportNew', {
    method: 'get',
    params,
  });
}
