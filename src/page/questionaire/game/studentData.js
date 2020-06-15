// [ 'select', 'multiSelect', 'textarea' ]

const data = [
  {
    title: '目前，你的学习成绩总体表现？',
    id: 1,
    choose: [
      {
        label: '名列前茅（前10%）',
        value: '名列前茅（前10%）',
        score: 4,
      },
      {
        label: ' 中等偏上（10%-25%）',
        value: '中等偏上（10%-25%）',
        score: 3,
      },
      {
        label: ' 中等（25%-75%）',
        value: '中等（25%-75%）',
        score: 2,
      },
      {
        label: ' 中等偏下（75%-90%）',
        value: '中等偏下（75%-90%）',
        score: 1,
      },
      {
        label: ' 排名靠后（后90%）',
        value: '排名靠后（后90%）',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83',
    quotaId30: '115',
    path200: '0,83',
    quotaId200: '115',
    quesType: '30,200',
    tips: '以下会收集你个人的一些信息，按照真实情况填答就好！',
  },
  {
    title: '你对自己现在的学习状态感到满意吗？',
    id: 2,
    choose: [
      {
        label: '一点也不满意',
        value: '一点也不满意',
      },
      {
        label: '大部分不满意',
        value: '大部分不满意',
      },
      {
        label: '不确定',
        value: '不确定',
      },
      {
        label: '大部分满意',
        value: '大部分满意',
      },
      {
        label: '完全满意',
        value: '完全满意',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '你的高考目标是未来能考上以下哪种级别的大学？',
    id: 3,
    choose: [
      {
        label: '清华、北大等C9高校',
        value: '清华、北大等C9高校',
      },
      {
        label: '985高校',
        value: '985高校',
      },
      {
        label: '211高校',
        value: '211高校',
      },
      {
        label: '其他重点本科高校',
        value: '其他重点本科高校',
      },
      {
        label: '普通一本',
        value: '普通一本',
      },
      {
        label: '二本',
        value: '二本',
      },
      {
        label: '三本',
        value: '三本',
      },
      {
        label: '大专等',
        value: '大专等',
      },
      {
        label: '不打算上大学',
        value: '不打算上大学',
      },
      {
        label: '不知道/不确定',
        value: '不知道/不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '你的高考目标是未来能考上以下哪种级别的大学？',
    id: 4,
    choose: [
      {
        label: '清华、北大等C9高校',
        value: '清华、北大等C9高校',
      },
      {
        label: '985、211等重点大学',
        value: '985、211等重点大学',
      },
      {
        label: '普通一本',
        value: '普通一本',
      },
      {
        label: '二本',
        value: '二本',
      },
      {
        label: '三本',
        value: '三本',
      },
      {
        label: '大专等',
        value: '大专等',
      },
      {
        label: '不打算上大学',
        value: '不打算上大学',
      },
      {
        label: '不知道/不确定',
        value: '不知道/不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '通过本次诊断，你期望解决哪些问题？',
    id: 5,
    choose: [
      {
        label: '提高学习成绩',
        value: '提高学习成绩',
      },
      {
        label: '清晰认识自己的优势和弱势',
        value: '清晰认识自己的优势和弱势',
      },
      {
        label: '提高解决问题的能力',
        value: '提高解决问题的能力',
      },
      {
        label: '消除心理困扰，增加幸福感',
        value: '消除心理困扰，增加幸福感',
      },
      {
        label: '减少环境干扰',
        value: '减少环境干扰',
      },
      {
        label: '其他',
        value: '其他',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
  },
  {
    title: '你分析过自己存在哪些不足吗？',
    id: 6,
    choose: [
      {
        label: '非常清楚自己的问题，但不需要解决，无所谓',
        value: '非常清楚自己的问题，但不需要解决，无所谓',
      },
      {
        label: '非常迷茫，不知道哪里出了问题',
        value: '非常迷茫，不知道哪里出了问题',
      },
      {
        label: '能发现一些问题，但不确定，也不知道怎么办',
        value: '能发现一些问题，但不确定，也不知道怎么办',
      },
      {
        label: '能发现一些确定的问题，但不知道怎么办',
        value: '能发现一些确定的问题，但不知道怎么办',
      },
      {
        label: '能发现一些确定的问题，并且知道怎么办',
        value: '能发现一些确定的问题，并且知道怎么办',
      },
      {
        label: '非常清楚自己的问题，但不知道怎么办',
        value: '非常清楚自己的问题，但不知道怎么办',
      },
      {
        label: '非常清楚自己的问题，并且知道怎么办',
        value: '非常清楚自己的问题，并且知道怎么办',
      },
    ],
    value: '',
    type: 'select',
    quesType: '200',
    style: 'fixed',
  },
  {
    title: '你认为自己现在的学习情况怎么样？',
    id: 7,
    choose: [
      {
        label: '一点也不想学习',
        value: '一点也不想学习',
      },
      {
        label: '有些时候不想学习',
        value: '有些时候不想学习',
      },
      {
        label: '学习总是跟不上',
        value: '学习总是跟不上',
      },
      {
        label: '有努力学习，但进步不明显',
        value: '有努力学习，但进步不明显',
      },
      {
        label: '学习基础不好，学习新知识困难',
        value: '学习基础不好，学习新知识困难',
      },
      {
        label: '受周围人影响，无法专注在学习上',
        value: '受周围人影响，无法专注在学习上',
      },
      {
        label: '想努力学习，但总坚持不下去',
        value: '想努力学习，但总坚持不下去',
      },
      {
        label: '有努力学习，并且取得了较好的成绩',
        value: '有努力学习，并且取得了较好的成绩',
      },
      {
        label: '其他',
        value: '其他',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '200',
    style: 'fixed',
  },
  {
    title: '以下有哪些科目是你正在学习中的？',
    id: 8,
    choose: [
      {
        label: '语文',
        value: '语文',
      },
      {
        label: '数学',
        value: '数学',
      },
      {
        label: '外语',
        value: '外语',
      },
      {
        label: '生物（生命科学）',
        value: '生物（生命科学）',
      },
      {
        label: '化学',
        value: '化学',
      },
      {
        label: '物理',
        value: '物理',
      },
      {
        label: '地理',
        value: '地理',
      },
      {
        label: '历史',
        value: '历史',
      },
      {
        label: '政治（道德与法制）',
        value: '政治（道德与法制）',
      },
      {
        label: '技术',
        value: '技术',
      },
    ],
    value: '',
    type: 'multiSelect',
    atLeast: 3,
    atLeastNUm: '三',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '当前你各科的成绩：语文',
    id: 9,
    choose: [
      {
        label: '名列前茅（前10%）',
        value: '名列前茅（前10%）',
        score: 4,
      },
      {
        label: '中等偏上（10%-25%）',
        value: '中等偏上（10%-25%）',
        score: 3,
      },
      {
        label: '中等（25%-75%）',
        value: '中等（25%-75%）',
        score: 2,
      },
      {
        label: '中等偏下（75%-90%）',
        value: '中等偏下（75%-90%）',
        score: 1,
      },
      {
        label: '排名靠后（后90%）',
        value: '排名靠后（后90%）',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83,150',
    quotaId30: '151',
    path200: '0,83,150',
    quotaId200: '151',
    quesType: '30,200',
  },
  {
    title: '当前你各科的成绩：数学',
    id: 10,
    choose: [
      {
        label: '名列前茅（前10%）',
        value: '名列前茅（前10%）',
        score: 4,
      },
      {
        label: '中等偏上（10%-25%）',
        value: '中等偏上（10%-25%）',
        score: 3,
      },
      {
        label: '中等（25%-75%）',
        value: '中等（25%-75%）',
        score: 2,
      },
      {
        label: '中等偏下（75%-90%）',
        value: '中等偏下（75%-90%）',
        score: 1,
      },
      {
        label: '排名靠后（后90%）',
        value: '排名靠后（后90%）',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83,150',
    quotaId30: '152',
    path200: '0,83,150',
    quotaId200: '152',
    quesType: '30,200',
  },
  {
    title: '当前你各科的成绩：外语',
    id: 11,
    choose: [
      {
        label: '名列前茅（前10%）',
        value: '名列前茅（前10%）',
        score: 4,
      },
      {
        label: '中等偏上（10%-25%）',
        value: '中等偏上（10%-25%）',
        score: 3,
      },
      {
        label: '中等（25%-75%）',
        value: '中等（25%-75%）',
        score: 2,
      },
      {
        label: '中等偏下（75%-90%）',
        value: '中等偏下（75%-90%）',
        score: 1,
      },
      {
        label: '排名靠后（后90%）',
        value: '排名靠后（后90%）',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83,150',
    quotaId30: '153',
    path200: '0,83,150',
    quotaId200: '153',
    quesType: '30,200',
  },
  {
    title: '当前你各科的成绩：生物（生命科学）',
    id: 12,
    choose: [
      {
        label: '名列前茅（前10%）',
        value: '名列前茅（前10%）',
        score: 4,
      },
      {
        label: '中等偏上（10%-25%）',
        value: '中等偏上（10%-25%）',
        score: 3,
      },
      {
        label: '中等（25%-75%）',
        value: '中等（25%-75%）',
        score: 2,
      },
      {
        label: '中等偏下（75%-90%）',
        value: '中等偏下（75%-90%）',
        score: 1,
      },
      {
        label: '排名靠后（后90%）',
        value: '排名靠后（后90%）',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83,150',
    quotaId30: '154',
    path200: '0,83,150',
    quotaId200: '154',
    quesType: '30,200',
  },
  {
    title: '当前你各科的成绩：化学',
    id: 13,
    choose: [
      {
        label: '名列前茅（前10%）',
        value: '名列前茅（前10%）',
        score: 4,
      },
      {
        label: '中等偏上（10%-25%）',
        value: '中等偏上（10%-25%）',
        score: 3,
      },
      {
        label: '中等（25%-75%）',
        value: '中等（25%-75%）',
        score: 2,
      },
      {
        label: '中等偏下（75%-90%）',
        value: '中等偏下（75%-90%）',
        score: 1,
      },
      {
        label: '排名靠后（后90%）',
        value: '排名靠后（后90%）',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83,150',
    quotaId30: '155',
    path200: '0,83,150',
    quotaId200: '155',
    quesType: '30,200',
  },
  {
    title: '当前你各科的成绩：物理',
    id: 14,
    choose: [
      {
        label: '名列前茅（前10%）',
        value: '名列前茅（前10%）',
        score: 4,
      },
      {
        label: '中等偏上（10%-25%）',
        value: '中等偏上（10%-25%）',
        score: 3,
      },
      {
        label: '中等（25%-75%）',
        value: '中等（25%-75%）',
        score: 2,
      },
      {
        label: '中等偏下（75%-90%）',
        value: '中等偏下（75%-90%）',
        score: 1,
      },
      {
        label: '排名靠后（后90%）',
        value: '排名靠后（后90%）',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83,150',
    quotaId30: '156',
    path200: '0,83,150',
    quotaId200: '156',
    quesType: '30,200',
  },
  {
    title: '当前你各科的成绩：地理',
    id: 15,
    choose: [
      {
        label: '名列前茅（前10%）',
        value: '名列前茅（前10%）',
        score: 4,
      },
      {
        label: '中等偏上（10%-25%）',
        value: '中等偏上（10%-25%）',
        score: 3,
      },
      {
        label: '中等（25%-75%）',
        value: '中等（25%-75%）',
        score: 2,
      },
      {
        label: '中等偏下（75%-90%）',
        value: '中等偏下（75%-90%）',
        score: 1,
      },
      {
        label: '排名靠后（后90%）',
        value: '排名靠后（后90%）',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83,150',
    quotaId30: '157',
    path200: '0,83,150',
    quotaId200: '157',
    quesType: '30,200',
  },
  {
    title: '当前你各科的成绩：历史',
    id: 16,
    choose: [
      {
        label: '名列前茅（前10%）',
        value: '名列前茅（前10%）',
        score: 4,
      },
      {
        label: '中等偏上（10%-25%）',
        value: '中等偏上（10%-25%）',
        score: 3,
      },
      {
        label: '中等（25%-75%）',
        value: '中等（25%-75%）',
        score: 2,
      },
      {
        label: '中等偏下（75%-90%）',
        value: '中等偏下（75%-90%）',
        score: 1,
      },
      {
        label: '排名靠后（后90%）',
        value: '排名靠后（后90%）',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83,150',
    quotaId30: '158',
    path200: '0,83,150',
    quotaId200: '158',
    quesType: '30,200',
  },
  {
    title: '当前你各科的成绩：政治（道德与法制）',
    id: 17,
    choose: [
      {
        label: '名列前茅（前10%）',
        value: '名列前茅（前10%）',
        score: 4,
      },
      {
        label: '中等偏上（10%-25%）',
        value: '中等偏上（10%-25%）',
        score: 3,
      },
      {
        label: '中等（25%-75%）',
        value: '中等（25%-75%）',
        score: 2,
      },
      {
        label: '中等偏下（75%-90%）',
        value: '中等偏下（75%-90%）',
        score: 1,
      },
      {
        label: '排名靠后（后90%）',
        value: '排名靠后（后90%）',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83,150',
    quotaId30: '159',
    path200: '0,83,150',
    quotaId200: '159',
    quesType: '30,200',
  },
  {
    title: '当前你各科的成绩：技术',
    id: 18,
    choose: [
      {
        label: '名列前茅（前10%）',
        value: '名列前茅（前10%）',
        score: 4,
      },
      {
        label: '中等偏上（10%-25%）',
        value: '中等偏上（10%-25%）',
        score: 3,
      },
      {
        label: '中等（25%-75%）',
        value: '中等（25%-75%）',
        score: 2,
      },
      {
        label: '中等偏下（75%-90%）',
        value: '中等偏下（75%-90%）',
        score: 1,
      },
      {
        label: '排名靠后（后90%）',
        value: '排名靠后（后90%）',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83,150',
    quotaId30: '160',
    path200: '0,83,150',
    quotaId200: '160',
    quesType: '30,200',
  },
  {
    title: '以下哪些学科是你喜欢学习的科目？',
    id: 19,
    choose: [
      {
        label: '语文',
        value: '语文',
      },
      {
        label: '数学',
        value: '数学',
      },
      {
        label: '外语',
        value: '外语',
      },
      {
        label: '生物（生命科学）',
        value: '生物（生命科学）',
      },
      {
        label: '化学',
        value: '化学',
      },
      {
        label: '物理',
        value: '物理',
      },
      {
        label: '地理',
        value: '地理',
      },
      {
        label: '历史',
        value: '历史',
      },
      {
        label: '政治（道德与法制）',
        value: '政治（道德与法制）',
      },
      {
        label: '技术',
        value: '技术',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
  },
  {
    title: '你认为哪些所学科目对你未来的学习和工作会有很大帮助？',
    id: 20,
    choose: [
      {
        label: '语文',
        value: '语文',
      },
      {
        label: '数学',
        value: '数学',
      },
      {
        label: '外语',
        value: '外语',
      },
      {
        label: '生物（生命科学）',
        value: '生物（生命科学）',
      },
      {
        label: '化学',
        value: '化学',
      },
      {
        label: '物理',
        value: '物理',
      },
      {
        label: '地理',
        value: '地理',
      },
      {
        label: '历史',
        value: '历史',
      },
      {
        label: '政治（道德与法制）',
        value: '政治（道德与法制）',
      },
      {
        label: '技术',
        value: '技术',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
  },
  {
    title: '你喜欢哪些科目的任课老师？',
    id: 21,
    choose: [
      {
        label: '语文',
        value: '语文',
      },
      {
        label: '数学',
        value: '数学',
      },
      {
        label: '外语',
        value: '外语',
      },
      {
        label: '生物（生命科学）',
        value: '生物（生命科学）',
      },
      {
        label: '化学',
        value: '化学',
      },
      {
        label: '物理',
        value: '物理',
      },
      {
        label: '地理',
        value: '地理',
      },
      {
        label: '历史',
        value: '历史',
      },
      {
        label: '政治（道德与法制）',
        value: '政治（道德与法制）',
      },
      {
        label: '技术',
        value: '技术',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
  },
  {
    title: '你认为导致你偏科的原因有？',
    id: 22,
    choose: [
      {
        label: '个人兴趣',
        value: '个人兴趣',
      },
      {
        label: '努力方向',
        value: '努力方向',
      },
      {
        label: '父母的期望',
        value: '父母的期望',
      },
      {
        label: '学科老师的影响',
        value: '学科老师的影响',
      },
      {
        label: '学科知识的难度',
        value: '学科知识的难度',
      },
      {
        label: '学习方式',
        value: '学习方式',
      },
      {
        label: '升学的专业招生',
        value: '升学的专业招生',
      },
      {
        label: '其他',
        value: '其他',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
  },
  {
    title: '你会怎么解决偏科问题？',
    id: 23,
    choose: [
      {
        label: '不管它，无所谓',
        value: '不管它，无所谓',
      },
      {
        label: '很想解决，但无从下手',
        value: '很想解决，但无从下手',
      },
      {
        label: '从老师或同学那里得到帮助',
        value: '从老师或同学那里得到帮助',
      },
      {
        label: '家长帮我报培训班',
        value: '家长帮我报培训班',
      },
      {
        label: '自己做提升规划，重点攻克弱势学科',
        value: '自己做提升规划，重点攻克弱势学科',
      },
      {
        label: '其他',
        value: '其他',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '现在的你愿意学习吗？',
    id: 24,
    choose: [
      {
        label: '我非常不想学习。',
        value: '我非常不想学习。',
        score: 0,
      },
      {
        label: '大部分时候，我都不想学习。',
        value: '大部分时候，我都不想学习。',
        score: 1,
      },
      {
        label: '很多时候，我都愿意学习。',
        value: '很多时候，我都愿意学习。',
        score: 2,
      },
      {
        label: '通常，我都愿意好好学习。',
        value: '通常，我都愿意好好学习。',
        score: 3,
      },
      {
        label: '一直以来，我都有非常强烈的学习意愿。',
        value: '一直以来，我都有非常强烈的学习意愿。',
        score: 4,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,66',
    quotaId30: '116',
    path200: '0,66',
    quotaId200: '116',
    quesType: '30,200',
    tips: '以下关于学习状态的描述，请根据你的第一反应选择符合自己情况的就好！',
    style: 'fixed',
  },
  {
    title: '你有不想学习的时候吗？',
    id: 25,
    choose: [
      {
        label: '无论何时，我都不会在学习上投入时间。',
        value: '无论何时，我都不会在学习上投入时间。',
        score: 0,
      },
      {
        label: '我对学习常常只有“三分钟热度”。',
        value: '我对学习常常只有“三分钟热度”。',
        score: 1,
      },
      {
        label: '我能坚持学习一段时间，但觉得有些痛苦。',
        value: '我能坚持学习一段时间，但觉得有些痛苦。',
        score: 2,
      },
      {
        label: '我能坚持学习，并且享受这个过程。',
        value: '我能坚持学习，并且享受这个过程。',
        score: 3,
      },
      {
        label: '我全身心投入到学习，依然觉得时间不够用，恨不得减少睡眠时间来学习。',
        value: '我全身心投入到学习，依然觉得时间不够用，恨不得减少睡眠时间来学习。',
        score: 4,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,66',
    quotaId30: '118',
    path200: '0,66',
    quotaId200: '118',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '促使你坚持学习的原因是？',
    id: 26,
    choose: [
      {
        label: '对学习学校课程感兴趣',
        value: '对学习学校课程感兴趣',
      },
      {
        label: '为了获得知识，认识和理解世界',
        value: '为了获得知识，认识和理解世界',
      },
      {
        label: '为了取得一定的成就，如考上好学校等',
        value: '为了取得一定的成就，如考上好学校等',
      },
      {
        label: '为了帮助家庭生活得更好',
        value: '为了帮助家庭生活得更好',
      },
      {
        label: '为了实现父母的期望',
        value: '为了实现父母的期望',
      },
      {
        label: '为了让老师或同学们等更认可我',
        value: '为了让老师或同学们等更认可我',
      },
      {
        label: '父母或老师等要我学',
        value: '父母或老师等要我学',
      },
      {
        label: '学习对未来生活和工作有价值',
        value: '学习对未来生活和工作有价值',
      },
      {
        label: '我不知道为什么要学习',
        value: '我不知道为什么要学习',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '我相信自己总有办法解决学习中遇到的困难。',
    id: 27,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,66,120',
    quotaId30: '124',
    path200: '0,66,120',
    quotaId200: '124',
    quesType: '30,200',
  },
  {
    title: '我相信自己有能力取得好成绩和名次。',
    id: 28,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,66,120',
    quotaId30: '124',
    path200: '0,66,120',
    quotaId200: '124',
    quesType: '30,200',
  },
  {
    title: '不管我学习成绩好坏，我从不怀疑自己的学习能力。',
    id: 29,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,66,120',
    quotaId30: '124',
    path200: '0,66,120',
    quotaId200: '124',
    quesType: '30,200',
  },
  {
    title: '遇到挑战时，我会避免挑战以维持自己聪明的形象。',
    id: 30,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,66,120',
    quotaId30: '129',
    path200: '0,66,120',
    quotaId200: '129',
    quesType: '30,200',
  },
  {
    title: '对于自己不足的地方，我很愿意花更多时间去改进。',
    id: 31,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,66,120',
    quotaId30: '129',
    path200: '0,66,120',
    quotaId200: '129',
    quesType: '30,200',
  },
  {
    title: '遇到任何困难，我通过不懈努力，总能做得越来越好。',
    id: 32,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,66,120',
    quotaId30: '129',
    path200: '0,66,120',
    quotaId200: '129',
    quesType: '30,200',
  },
  {
    title: '你有自己的学习目标吗？',
    id: 33,
    choose: [
      {
        label: '没有自己的学习目标，一切按照老师或父母的来。',
        value: '没有自己的学习目标，一切按照老师或父母的来。',
      },
      {
        label: '我自己有清晰的学习目标。',
        value: '我自己有清晰的学习目标。',
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70',
    quotaId30: '102',
    path200: '0,70',
    quotaId200: '102',
    quesType: '30,200',
    style: 'fixed',
    tips: '以下关于学习过程、情绪感受的描述，请根据第一反应选择符合你情况的选项就好！',
  },
  {
    title: '你是怎么制定学习目标的？',
    id: 34,
    choose: [
      {
        label: '我制定了清晰的学期目标，设定了我要进步的名次。',
        value: '我制定了清晰的学期目标，设定了我要进步的名次。',
        score: 1,
      },
      {
        label: '围绕学期目标，我制定了详细的季度学习计划。',
        value: '围绕学期目标，我制定了详细的季度学习计划。',
        score: 1,
      },
      {
        label: '围绕季度计划，我制定了详细的月度学习计划。',
        value: '围绕季度计划，我制定了详细的月度学习计划。',
        score: 1,
      },
      {
        label: '根据季度计划，我分解了周计划，设定了每周我需要完成的学习任务。',
        value: '根据季度计划，我分解了周计划，设定了每周我需要完成的学习任务。',
        score: 1,
      },
      {
        label: '根据周计划，我分解了日计划，设定了每天我需要完成的学习任务。',
        value: '根据周计划，我分解了日计划，设定了每天我需要完成的学习任务。',
        score: 1,
      },
      {
        label: '从没有按照上述方式来制定学习目标或计划。',
        value: '从没有按照上述方式来制定学习目标或计划。',
        score: 0,
      },
    ],
    value: '',
    type: 'multiSelect',
    path30: '0,70',
    quotaId30: '102',
    path200: '0,70',
    quotaId200: '102',
    quesType: '30,200',
    style: 'fixed',
    countScoreType: 'add',
  },
  {
    title: '平时你会为学习付出努力吗？',
    id: 35,
    choose: [
      {
        label: '我从来都不能为学习付出努力。',
        value: '我从来都不能为学习付出努力。',
        score: 0,
      },
      {
        label: '我很少为学习付出努力。',
        value: '我很少为学习付出努力。',
        score: 1,
      },
      {
        label: '大部分时候，我会为学习付出努力。',
        value: '大部分时候，我会为学习付出努力。',
        score: 2,
      },
      {
        label: '我基本上能为学习付出努力。',
        value: '我基本上能为学习付出努力。',
        score: 3,
      },
      {
        label: '我一直都在全力以赴地为学习付出努力。',
        value: '我一直都在全力以赴地为学习付出努力。',
        score: 4,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,103',
    quotaId30: '104',
    path200: '0,70,103',
    quotaId200: '104',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '学习是一件让我感到痛苦的事情。',
    id: 36,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,103',
    quotaId30: '105',
    path200: '0,70,103',
    quotaId200: '105',
    quesType: '30,200',
  },
  {
    title: '我很厌恶做作业、考试等学习相关的事情。',
    id: 37,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,103',
    quotaId30: '105',
    path200: '0,70,103',
    quotaId200: '105',
    quesType: '30,200',
  },
  {
    title: '我一学习就感觉烦躁，学不进去。',
    id: 38,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,103',
    quotaId30: '105',
    path200: '0,70,103',
    quotaId200: '105',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '你认为是哪些原因导致了你厌学？',
    id: 39,
    choose: [
      {
        label: '不喜欢学习',
        value: '不喜欢学习',
      },
      {
        label: '学习负担太大',
        value: '学习负担太大',
      },
      {
        label: '学科知识太难',
        value: '学科知识太难',
      },
      {
        label: '不喜欢某些学科',
        value: '不喜欢某些学科',
      },
      {
        label: '父母期望太高',
        value: '父母期望太高',
      },
      {
        label: '不喜欢呆在学校',
        value: '不喜欢呆在学校',
      },
      {
        label: '和班里同学关系不好',
        value: '和班里同学关系不好',
      },
      {
        label: '有些讨厌的老师',
        value: '有些讨厌的老师',
      },
      {
        label: '和父母关系不好',
        value: '和父母关系不好',
      },
      {
        label: '没有信心，觉得自己学不好',
        value: '没有信心，觉得自己学不好',
      },
      {
        label: '学习太累了，坚持不下去',
        value: '学习太累了，坚持不下去',
      },
      {
        label: '外面社会诱惑大，想放弃读书到社会上',
        value: '外面社会诱惑大，想放弃读书到社会上',
      },
      {
        label: '为了引起父母或老师等人的注意',
        value: '为了引起父母或老师等人的注意',
      },
      {
        label: '学习没有意义',
        value: '学习没有意义',
      },
      {
        label: '其他',
        value: '其他',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '老师布置的作业直到该交了，我才开始做。',
    id: 40,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,103',
    quotaId30: '106',
    path200: '0,70,103',
    quotaId200: '106',
    quesType: '30,200',
  },
  {
    title: '每天开始学习前，我总是要磨蹭很久才开始。',
    id: 41,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,103',
    quotaId30: '106',
    path200: '0,70,103',
    quotaId200: '106',
    quesType: '30,200',
  },
  {
    title: '我经常把当日要完成的学习任务拖到第二天甚至更晚才做。',
    id: 42,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,103',
    quotaId30: '106',
    path200: '0,70,103',
    quotaId200: '106',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '你认为自己为什么会存在学习拖延？',
    id: 43,
    choose: [
      {
        label: '不喜欢学习',
        value: '不喜欢学习',
      },
      {
        label: '学习负担太大',
        value: '学习负担太大',
      },
      {
        label: '学科知识太难',
        value: '学科知识太难',
      },
      {
        label: '没有信心，觉得自己学不好',
        value: '没有信心，觉得自己学不好',
      },
      {
        label: '学习太累了，坚持不下去',
        value: '学习太累了，坚持不下去',
      },
      {
        label: '害怕失败',
        value: '害怕失败',
      },
      {
        label: '想按时完成学习任务，但不知道怎么学',
        value: '想按时完成学习任务，但不知道怎么学',
      },
      {
        label: '不喜欢某些老师',
        value: '不喜欢某些老师',
      },
      {
        label: '没有时间意识',
        value: '没有时间意识',
      },
      {
        label: '其他',
        value: '其他',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },

  {
    title: '我每天上网/玩游戏时间经常超过4小时。',
    id: 44,
    choose: [
      {
        label: '是',
        value: '是',
        score: -1,
      },
      {
        label: '不是',
        value: '不是',
        score: -1,
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '不能上网/玩游戏时，我会感到坐立不安。',
    id: 45,
    choose: [
      {
        label: '是',
        value: '是',
        score: -1,
      },
      {
        label: '不是',
        value: '不是',
        score: -1,
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我经常熬夜上网/玩游戏。',
    id: 46,
    choose: [
      {
        label: '是',
        value: '是',
        score: -1,
      },
      {
        label: '不是',
        value: '不是',
        score: -1,
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '你能按时完成学习任务吗？',
    id: 47,
    choose: [
      {
        label: '我从来没有按时完成过学习任务。',
        value: '我从来没有按时完成过学习任务。',
        score: 0,
      },
      {
        label: '我偶尔才能按时完成学习任务。',
        value: '我偶尔才能按时完成学习任务。',
        score: 1,
      },
      {
        label: '大部分时候我能按时完成学习任务，但学习效果还有提升空间。',
        value: '大部分时候我能按时完成学习任务，但学习效果还有提升空间。',
        score: 2,
      },
      {
        label: '一直以来，我都能按时保质地完成学习任务。',
        value: '一直以来，我都能按时保质地完成学习任务。',
        score: 3,
      },
      {
        label: '我会动态调节学习任务的执行全过程，总能高质量地提前完成学习任务。',
        value: '我会动态调节学习任务的执行全过程，总能高质量地提前完成学习任务。',
        score: 4,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,107',
    quotaId30: '108',
    path200: '0,70,107',
    quotaId200: '108',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '平时，你采用什么样的方法学习？',
    id: 48,
    choose: [
      {
        label: '我比较随心所欲，想到怎么学就怎么学。',
        value: '我比较随心所欲，想到怎么学就怎么学。',
        score: 0,
      },
      {
        label: '我不知道选择什么样的学习方法，看到同学们怎么学就跟着这样学。',
        value: '我不知道选择什么样的学习方法，看到同学们怎么学就跟着这样学。',
        score: 1,
      },
      {
        label: '我上课专心听讲、认真记笔记，课后按时完成作业并花大量的时间复习，仍感觉进步不大。',
        value: '我上课专心听讲、认真记笔记，课后按时完成作业并花大量的时间复习，仍感觉进步不大。',
        score: 2,
      },
      {
        label: '我会结合各学科特点，在学习的各个环节运用恰当的学习方法，能有效提升学习成绩。',
        value: '我会结合各学科特点，在学习的各个环节运用恰当的学习方法，能有效提升学习成绩。',
        score: 3,
      },
      {
        label: '我总结了一套适合自己的高效学习方法，能系统地深度掌握和应用知识，提高学习效果。',
        value: '我总结了一套适合自己的高效学习方法，能系统地深度掌握和应用知识，提高学习效果。',
        score: 4,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,107',
    quotaId30: '109',
    path200: '0,70,107',
    quotaId200: '109',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '我会把经常犯错的题目整理成错题集，分析犯错原因、定时复习。',
    id: 49,
    choose: [
      {
        label: '有',
        value: '有',
        score: 1,
      },
      {
        label: '没有',
        value: '没有',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我会把遇到的难题整理成难题集，定时复习、检查难题的掌握情况。',
    id: 50,
    choose: [
      {
        label: '有',
        value: '有',
        score: 1,
      },
      {
        label: '没有',
        value: '没有',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '考试前一周，我会主动开始模拟考试。',
    id: 51,
    choose: [
      {
        label: '有',
        value: '有',
        score: 1,
      },
      {
        label: '没有',
        value: '没有',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我会尝试将学过的知识运用到其它学习活动或生活中。',
    id: 52,
    choose: [
      {
        label: '有',
        value: '有',
        score: 1,
      },
      {
        label: '没有',
        value: '没有',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我善于运用思维导图的形式把重点知识结构化，以便系统、全面地掌握知识。',
    id: 53,
    choose: [
      {
        label: '有',
        value: '有',
        score: 1,
      },
      {
        label: '没有',
        value: '没有',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '当你学习忙得焦头烂额，觉得时间不够用时，你会怎么办？',
    id: 54,
    choose: [
      {
        label: '感觉泄气，认为自己处理不好繁重的学习任务，破罐破摔。',
        value: '感觉泄气，认为自己处理不好繁重的学习任务，破罐破摔。',
        score: 0,
      },
      {
        label: '认为学习很重要，即使时间不够用，也得拼命学。',
        value: '认为学习很重要，即使时间不够用，也得拼命学。',
        score: 1,
      },
      {
        label: '知道自己的时间管理出现了问题，主动去寻找父母、老师或同学的帮助，想法改变这种状况。',
        value: '知道自己的时间管理出现了问题，主动去寻找父母、老师或同学的帮助，想法改变这种状况。',
        score: 2,
      },
      {
        label: '先停下学习，静下心检查自己的学习时间安排有没有需要改进的地方，协调学习任务冲突。',
        value: '先停下学习，静下心检查自己的学习时间安排有没有需要改进的地方，协调学习任务冲突。',
        score: 3,
      },
      {
        label:
          '我很少会出现这类情况，学习前我会事先借助工具对学习任务进行优先级排序，统筹安排、推进多项学习任务有序进行。',
        value:
          '我很少会出现这类情况，学习前我会事先借助工具对学习任务进行优先级排序，统筹安排、推进多项学习任务有序进行。',
        score: 4,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,107',
    quotaId30: '110',
    path200: '0,70,107',
    quotaId200: '110',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '害怕考不好，考试前我常常紧张到失眠，或惊醒。',
    id: 55,
    choose: [
      {
        label: '有',
        value: '有',
        score: 0,
      },
      {
        label: '没有',
        value: '没有',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,107',
    quotaId30: '111',
    path200: '0,70,107',
    quotaId200: '111',
    quesType: '30,200',
  },
  {
    title: '考试时，我总想着分数、名次，导致我很紧张甚至影响考试。',
    id: 56,
    choose: [
      {
        label: '有',
        value: '有',
        score: 0,
      },
      {
        label: '没有',
        value: '没有',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,107',
    quotaId30: '111',
    path200: '0,70,107',
    quotaId200: '111',
    quesType: '30,200',
  },
  {
    title: '考试时，即使不热，我也会浑身出汗。',
    id: 57,
    choose: [
      {
        label: '有',
        value: '有',
        score: 0,
      },
      {
        label: '没有',
        value: '没有',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,107',
    quotaId30: '111',
    path200: '0,70,107',
    quotaId200: '111',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '你认为自己为什么会害怕考试？',
    id: 58,
    choose: [
      {
        label: '自我期望高，害怕成绩不如意',
        value: '自我期望高，害怕成绩不如意',
      },
      {
        label: '父母要求高，害怕父母失望或批评',
        value: '父母要求高，害怕父母失望或批评',
      },
      {
        label: '考试氛围严肃，害怕这种气氛',
        value: '考试氛围严肃，害怕这种气氛',
      },
      {
        label: '学习压力太大',
        value: '学习压力太大',
      },
      {
        label: '觉得自己知识掌握不牢，不相信自己能考好',
        value: '觉得自己知识掌握不牢，不相信自己能考好',
      },
      {
        label: '以后考试失败过，害怕再次失败',
        value: '以后考试失败过，害怕再次失败',
      },
      {
        label: '考试前太疲劳',
        value: '考试前太疲劳',
      },
      {
        label: '担心考不好，会被老师或同学看不起',
        value: '担心考不好，会被老师或同学看不起',
      },
      {
        label: '其他',
        value: '其他',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '我感到学习压力非常大，甚至喘不过气来。',
    id: 59,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,107',
    quotaId30: '112',
    path200: '0,70,107',
    quotaId200: '112',
    quesType: '30,200',
  },
  {
    title: '如果我没能按时完成学习任务，我会很烦躁。',
    id: 60,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,107',
    quotaId30: '112',
    path200: '0,70,107',
    quotaId200: '112',
    quesType: '30,200',
  },
  {
    title: '如果考试成绩没有达到预期，我会感到非常焦躁。',
    id: 61,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,107',
    quotaId30: '112',
    path200: '0,70,107',
    quotaId200: '112',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '你认为哪些原因导致了你有学习压力？',
    id: 62,
    choose: [
      {
        label: '自我期望高，害怕成绩不如意',
        value: '自我期望高，害怕成绩不如意',
      },
      {
        label: '父母要求高，害怕父母失望或批评',
        value: '父母要求高，害怕父母失望或批评',
      },
      {
        label: '担心成绩不好，会被老师或同学看不起',
        value: '担心成绩不好，会被老师或同学看不起',
      },
      {
        label: '同学间竞争很激烈',
        value: '同学间竞争很激烈',
      },
      {
        label: '学校里对学习要求很严格',
        value: '学校里对学习要求很严格',
      },
      {
        label: '老师对要求很严',
        value: '老师对要求很严',
      },
      {
        label: '升学竞争激烈',
        value: '升学竞争激烈',
      },
      {
        label: '害怕成绩不好，就是自己能力不行',
        value: '害怕成绩不好，就是自己能力不行',
      },
      {
        label: '其他',
        value: '其他',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '你觉得自己的精力充沛吗？',
    id: 63,
    choose: [
      {
        label: '经常觉得精力跟不上',
        value: '经常觉得精力跟不上',
        score: -1,
      },
      {
        label: '精力时好时坏',
        value: '精力时好时坏',
        score: -1,
      },
      {
        label: '说不上好也说不上坏，一般',
        value: '说不上好也说不上坏，一般',
        score: -1,
      },
      {
        label: '大部分时间精力还可以',
        value: '大部分时间精力还可以',
        score: -1,
      },
      {
        label: '精力一直都很充沛',
        value: '精力一直都很充沛',
        score: -1,
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '你觉得自己睡眠质量怎么样？',
    id: 64,
    choose: [
      {
        label: '失眠，需要使用安眠药才能入睡',
        value: '失眠，需要使用安眠药才能入睡',
      },
      {
        label: '入睡用时长，很难入睡',
        value: '入睡用时长，很难入睡',
      },
      {
        label: '入睡后，稍有动静就醒，醒后很难入睡',
        value: '入睡后，稍有动静就醒，醒后很难入睡',
      },
      {
        label: '总是做梦，醒来时觉得很累',
        value: '总是做梦，醒来时觉得很累',
      },
      {
        label: '只要有心事就彻夜难眠',
        value: '只要有心事就彻夜难眠',
      },
      {
        label: '睡眠没规律，常常熬夜到很晚',
        value: '睡眠没规律，常常熬夜到很晚',
      },
      {
        label: '早上醒来，总觉得还没睡够',
        value: '早上醒来，总觉得还没睡够',
      },
      {
        label: '睡得不错，每次醒来都精神满满',
        value: '睡得不错，每次醒来都精神满满',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '我每天都会抽出特定的时间对一天的学习情况进行反思和总结。',
    id: 65,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,113',
    quotaId30: '114',
    path200: '0,70,113',
    quotaId200: '114',
    quesType: '30,200',
  },
  {
    title: '我掌握了科学的反思方法，能及时觉察学习过程中需要改进的地方。',
    id: 66,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,113',
    quotaId30: '114',
    path200: '0,70,113',
    quotaId200: '114',
    quesType: '30,200',
  },
  {
    title: '我会反思学习上犯的错误，找出解决方案，确保不再犯类似的错误。',
    id: 67,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,113',
    quotaId30: '114',
    path200: '0,70,113',
    quotaId200: '114',
    quesType: '30,200',
  },
  {
    title: '我能够接纳别人对我学习上的建议，有选择性地改善学习。',
    id: 68,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,70,113',
    quotaId30: '114',
    path200: '0,70,113',
    quotaId200: '114',
    quesType: '30,200',
  },
  {
    title: '下面描述的几种情景，哪种比较符合你的情况，请选择一项。',
    id: 69,
    choose: [
      {
        label:
          '上课时，我经常心思不定，不知自己在想什么，也不知老师在讲什么，一点也不能把注意力放在学习中。',
        value:
          '上课时，我经常心思不定，不知自己在想什么，也不知老师在讲什么，一点也不能把注意力放在学习中。',
        score: 0,
      },
      {
        label:
          '上课时，我专心听老师讲课十几分钟后，注意力就会离开课堂或受周围环境的影响，很难再回到学习中。',
        value:
          '上课时，我专心听老师讲课十几分钟后，注意力就会离开课堂或受周围环境的影响，很难再回到学习中。',
        score: 1,
      },
      {
        label:
          '上课时，我会立马进入学习状态，认真听老师讲课，偶尔会有些跑神，但能及时把注意力及时转回到学习中。',
        value:
          '上课时，我会立马进入学习状态，认真听老师讲课，偶尔会有些跑神，但能及时把注意力及时转回到学习中。',
        score: 2,
      },
      {
        label:
          '一到上课，我就能精力十足地投入到学习中，思绪一直跟着老师讲解的内容，不会受周围动静的干扰。',
        value:
          '一到上课，我就能精力十足地投入到学习中，思绪一直跟着老师讲解的内容，不会受周围动静的干扰。',
        score: 3,
      },
      {
        label:
          '上课时，我不仅可以全神贯注地听老师讲课，还能思考和记忆重要的知识点，对周围的一切“视而不见，听而不闻”，一节课下来我还感到精神饱满。',
        value:
          '上课时，我不仅可以全神贯注地听老师讲课，还能思考和记忆重要的知识点，对周围的一切“视而不见，听而不闻”，一节课下来我还感到精神饱满。',
        score: 4,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83',
    quotaId30: '149',
    path200: '0,83',
    quotaId200: '149',
    quesType: '30,200',
    style: 'fixed',
    tips: '以下关于学习情境的描述，请你根据自己的真实情况选择相应的选项！',
  },
  {
    title: '下面描述的几种情景，哪种比较符合你的情况，请选择一项。',
    id: 70,
    choose: [
      {
        label: '我识记过的东西时常忘记，很多时候总是在不断地重复记忆，记忆效果很差。',
        value: '我识记过的东西时常忘记，很多时候总是在不断地重复记忆，记忆效果很差。',
        score: 0,
      },
      {
        label: '我需要花费比别人更多的时间和精力才能准确记住学习内容。',
        value: '我需要花费比别人更多的时间和精力才能准确记住学习内容。',
        score: 1,
      },
      {
        label: '我会使用各种方法识记学习知识，大多时候都可以准确回忆。',
        value: '我会使用各种方法识记学习知识，大多时候都可以准确回忆。',
        score: 2,
      },
      {
        label: '比起同学们，我能在短时间内迅速记住很多知识，过了很久还能全部正确回忆起来。',
        value: '比起同学们，我能在短时间内迅速记住很多知识，过了很久还能全部正确回忆起来。',
        score: 3,
      },
      {
        label: '记忆各类知识时，我能做到过目不忘。',
        value: '记忆各类知识时，我能做到过目不忘。',
        score: 4,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,83',
    quotaId30: '148',
    path200: '0,83',
    quotaId200: '148',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '请从以下选项中选出你最有优势的特点。',
    id: 71,
    choose: [
      {
        label: '唱歌',
        value: '唱歌',
      },
      {
        label: '跳舞',
        value: '跳舞',
      },
      {
        label: '画画',
        value: '画画',
      },
      {
        label: '书法',
        value: '书法',
      },
      {
        label: '乐器',
        value: '乐器',
      },
      {
        label: '体育',
        value: '体育',
      },
      {
        label: '情商高',
        value: '情商高',
      },
      {
        label: '领导力高',
        value: '领导力高',
      },
      {
        label: '创新意识强',
        value: '创新意识强',
      },
      {
        label: '沟通表达能力强',
        value: '沟通表达能力强',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '200',
  },
  {
    title: '目前，我的家庭状况是？',
    id: 72,
    choose: [
      {
        label: '双亲家庭',
        value: '双亲家庭',
      },
      {
        label: '单亲，和父亲一起生活',
        value: '单亲，和父亲一起生活',
      },
      {
        label: '单亲，和母亲一起生活',
        value: '单亲，和母亲一起生活',
      },
      {
        label: '其他，如和奶奶一起生活等',
        value: '其他，如和奶奶一起生活等',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    tips: '以下会描述和生活相关的情境，请根据你第一反应选择就好！',
    isJumpQues: true,
  },
  {
    title: '下面有关父亲和你相处情景的描述，请选择出比较符合实际情况的选项。',
    id: 73,
    choose: [
      {
        label: '父亲常常无缘无故地对我发脾气，说一些否定我的话，甚至会打骂我。',
        value: '父亲常常无缘无故地对我发脾气，说一些否定我的话，甚至会打骂我。',
        score: 0,
      },
      {
        label:
          '父亲很少关心我的学习，也不和我沟通，他没有向我提出什么期望，也不用什么标准去要求我。',
        value:
          '父亲很少关心我的学习，也不和我沟通，他没有向我提出什么期望，也不用什么标准去要求我。',
        score: 1,
      },
      {
        label: '父亲总是过多干涉我的学习，常常要求我无条件服从他的命令，很少听我的想法。',
        value: '父亲总是过多干涉我的学习，常常要求我无条件服从他的命令，很少听我的想法。',
        score: 2,
      },
      {
        label: '父亲对我有求必应，很少向我提学习要求或做什么限制，他经常很在乎我的安全问题。',
        value: '父亲对我有求必应，很少向我提学习要求或做什么限制，他经常很在乎我的安全问题。',
        score: 3,
      },
      {
        label: '父亲能尊重和听取我的观点，既坚持原则又注重培养我的独立性，关心我的学习和成长。',
        value: '父亲能尊重和听取我的观点，既坚持原则又注重培养我的独立性，关心我的学习和成长。',
        score: 4,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,131',
    quotaId30: '132',
    path200: '0,88,131',
    quotaId200: '132',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '下面有关母亲和你相处情景的描述，请选择出比较符合实际情况的选项。',
    id: 74,
    choose: [
      {
        label: '母亲常常无缘无故地对我发脾气，说一些否定我的话，甚至会打骂我。',
        value: '母亲常常无缘无故地对我发脾气，说一些否定我的话，甚至会打骂我。',
        score: 0,
      },
      {
        label:
          '母亲很少关心我的学习，也不和我沟通，她没有向我提出什么期望，也不用什么标准去要求我。',
        value:
          '母亲很少关心我的学习，也不和我沟通，她没有向我提出什么期望，也不用什么标准去要求我。',
        score: 1,
      },
      {
        label: '母亲总是过多干涉我的学习，常常要求我无条件服从她的命令，很少听我的想法。',
        value: '母亲总是过多干涉我的学习，常常要求我无条件服从她的命令，很少听我的想法。',
        score: 2,
      },
      {
        label: '母亲对我有求必应，很少向我提学习要求或做什么限制，她经常很在乎我的安全问题。',
        value: '母亲对我有求必应，很少向我提学习要求或做什么限制，她经常很在乎我的安全问题。',
        score: 3,
      },
      {
        label: '母亲能尊重和听取我的观点，既坚持原则又注重培养我的独立性，关心我的学习和成长。',
        value: '母亲能尊重和听取我的观点，既坚持原则又注重培养我的独立性，关心我的学习和成长。',
        score: 4,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,131',
    quotaId30: '133',
    path200: '0,88,131',
    quotaId200: '133',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '下面有关抚养人和你相处情景的描述，请选择出比较符合实际情况的选项。',
    id: 75,
    choose: [
      {
        label: '抚养人常常无缘无故地对我发脾气，说一些否定我的话，甚至会打骂我。',
        value: '抚养人常常无缘无故地对我发脾气，说一些否定我的话，甚至会打骂我。',
        score: 0,
      },
      {
        label:
          '抚养人很少关心我的学习，也不和我沟通，TA没有向我提出什么期望，也不用什么标准去要求我。',
        value:
          '抚养人很少关心我的学习，也不和我沟通，TA没有向我提出什么期望，也不用什么标准去要求我。',
        score: 1,
      },
      {
        label: '抚养人总是过多干涉我的学习，常常要求我无条件服从TA的命令，很少听我的想法。',
        value: '抚养人总是过多干涉我的学习，常常要求我无条件服从TA的命令，很少听我的想法。',
        score: 2,
      },
      {
        label: '抚养人对我有求必应，很少向我提学习要求或做什么限制，TA经常很在乎我的安全问题。',
        value: '抚养人对我有求必应，很少向我提学习要求或做什么限制，TA经常很在乎我的安全问题。',
        score: 3,
      },
      {
        label: '抚养人能尊重和听取我的观点，既坚持原则又注重培养我的独立性，关心我的学习和成长。',
        value: '抚养人能尊重和听取我的观点，既坚持原则又注重培养我的独立性，关心我的学习和成长。',
        score: 4,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,131',
    quotaId30: '134',
    path200: '0,88,131',
    quotaId200: '134',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '我父母关系很好，很少吵架，生活非常幸福。',
    id: 76,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88',
    quotaId30: '135',
    path200: '0,88',
    quotaId200: '135',
    quesType: '30,200',
  },
  {
    title: '父母经常因为我在学校的表现而发生争吵。',
    id: 77,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88',
    quotaId30: '135',
    path200: '0,88',
    quotaId200: '135',
    quesType: '30,200',
  },
  {
    title: '父母意见不和时，他们会心平气和地讨论出解决办法。',
    id: 78,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88',
    quotaId30: '135',
    path200: '0,88',
    quotaId200: '135',
    quesType: '30,200',
  },
  {
    title: '有些老师总是指责或批评我，我们之间经常会发生一些不愉快的事情。',
    id: 79,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88',
    quotaId30: '136',
    path200: '0,88',
    quotaId200: '136',
    quesType: '30,200',
  },
  {
    title: '只要我学习有进步，有些老师就会表扬我。',
    id: 80,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88',
    quotaId30: '136',
    path200: '0,88',
    quotaId200: '136',
    quesType: '30,200',
  },
  {
    title: '当我没有信心完成某项学习任务时，有些老师会鼓励和支持我。',
    id: 81,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88',
    quotaId30: '136',
    path200: '0,88',
    quotaId200: '136',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '有哪些学科的老师对你学习产生了负面影响？',
    id: 82,
    choose: [
      {
        label: '语文',
        value: '语文',
      },
      {
        label: '数学',
        value: '数学',
      },
      {
        label: '外语',
        value: '外语',
      },
      {
        label: '生物（生命科学）',
        value: '生物（生命科学）',
      },
      {
        label: '化学',
        value: '化学',
      },
      {
        label: '物理',
        value: '物理',
      },
      {
        label: '地理',
        value: '地理',
      },
      {
        label: '历史',
        value: '历史',
      },
      {
        label: '政治（道德与法制）',
        value: '政治（道德与法制）',
      },
      {
        label: '技术',
        value: '技术',
      },
    ],
    value: '',
    type: 'multiSelect',
    path30: '0,88',
    quotaId30: '136',
    path200: '0,88',
    quotaId200: '136',
    quesType: '30,200',
  },
  {
    title: '我现在有正在交往或暗恋的对象。',
    id: 83,
    choose: [
      {
        label: '正在恋爱中',
        value: '正在恋爱中',
      },
      {
        label: '有暗恋的对象',
        value: '有暗恋的对象',
      },
      {
        label: '都没有',
        value: '都没有',
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88',
    quotaId30: '138',
    path200: '0,88',
    quotaId200: '138',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '我经常把时间花在恋爱上，影响了学习时间。',
    id: 84,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,138',
    quotaId30: '139',
    path200: '0,88,138',
    quotaId200: '139',
    quesType: '30,200',
  },
  {
    title: '我们有共同的学习目标，并为之努力奋斗。',
    id: 85,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,138',
    quotaId30: '139',
    path200: '0,88,138',
    quotaId200: '139',
    quesType: '30,200',
  },
  {
    title: '恋爱中产生的情绪波动会对我的学习状态造成影响。',
    id: 86,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,138',
    quotaId30: '139',
    path200: '0,88,138',
    quotaId200: '139',
    quesType: '30,200',
  },
  {
    title: '因为暗恋对象，我变得更加努力学习。',
    id: 87,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,138',
    quotaId30: '140',
    path200: '0,88,138',
    quotaId200: '140',
    quesType: '30,200',
  },
  {
    title: '学习时，我经常因为暗恋对象而分心。',
    id: 88,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,138',
    quotaId30: '140',
    path200: '0,88,138',
    quotaId200: '140',
    quesType: '30,200',
  },
  {
    title: '暗恋对象的情绪波动会对我的学习状态造成影响。',
    id: 89,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,138',
    quotaId30: '140',
    path200: '0,88,138',
    quotaId200: '140',
    quesType: '30,200',
  },
  {
    title: '我渴望有恋爱的对象。',
    id: 90,
    choose: [
      {
        label: '我渴望有',
        value: '我渴望有',
      },
      {
        label: '我不需要有',
        value: '我不需要有',
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,138',
    quotaId30: '141',
    path200: '0,88,138',
    quotaId200: '141',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '我很羡慕周围恋爱的同学，以致于我无法静心学习。',
    id: 91,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,138',
    quotaId30: '141',
    path200: '0,88,138',
    quotaId200: '141',
    quesType: '30,200',
  },
  {
    title: '我希望有个TA可以和我一起努力学习，共同进步。',
    id: 92,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,138',
    quotaId30: '141',
    path200: '0,88,138',
    quotaId200: '141',
    quesType: '30,200',
  },
  {
    title: '我非常希望能够谈恋爱，以致于我没有心思听课或学习。',
    id: 93,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88,138',
    quotaId30: '141',
    path200: '0,88,138',
    quotaId200: '141',
    quesType: '30,200',
  },
  {
    title: '班里同学们都很积极、努力地学习。',
    id: 94,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88',
    quotaId30: '137',
    path200: '0,88',
    quotaId200: '137',
    quesType: '30,200',
  },
  {
    title: '课堂上老师提问时，同学们都踊跃回答问题。',
    id: 95,
    choose: [
      {
        label: '是',
        value: '是',
        score: 1,
      },
      {
        label: '不是',
        value: '不是',
        score: 0,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88',
    quotaId30: '137',
    path200: '0,88',
    quotaId200: '137',
    quesType: '30,200',
  },
  {
    title: '很多同学总想玩手机，我也会受到他们影响。',
    id: 96,
    choose: [
      {
        label: '是',
        value: '是',
        score: 0,
      },
      {
        label: '不是',
        value: '不是',
        score: 1,
      },
    ],
    value: '',
    type: 'select',
    path30: '0,88',
    quotaId30: '137',
    path200: '0,88',
    quotaId200: '137',
    quesType: '30,200',
  },
  {
    title: '以下描述，请选出生活中你出现过的情况。',
    id: 97,
    choose: [
      {
        label: '有时我真想骂人。',
        value: '有时我真想骂人。',
        score: 0,
      },
      {
        label: '有时我也讲假话。 ',
        value: '有时我也讲假话。 ',
        score: 0,
      },
      {
        label: '我有时发怒。',
        value: '我有时发怒。',
        score: 0,
      },
      {
        label: '我有时有点自夸。',
        value: '我有时有点自夸。',
        score: 0,
      },
      {
        label: '有时我也会说说人家的闲话。',
        value: '有时我也会说说人家的闲话。',
        score: 0,
      },
      {
        label: '我喜欢我认识的每一个人。',
        value: '我喜欢我认识的每一个人。',
        score: 0,
      },
      {
        label: '当我犯了错误，我总是愿意承认它。',
        value: '当我犯了错误，我总是愿意承认它。',
        score: 0,
      },
      {
        label: '我从来没有迟到过。',
        value: '我从来没有迟到过。',
        score: 0,
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '你是否愿意参加道道个人成长平台开展的教培机构服务评价征集计划？',
    id: 98,
    choose: [
      {
        label: '愿意',
        value: '愿意',
      },
      {
        label: '不愿意',
        value: '不愿意',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    tips:
      '想知道和你学习成绩相似的同年级学生都参加过哪些教育培训吗？以下是道道个人成长平台开展的教培机构服务评价征集计划，参加后完整回答如下问题（大概2分钟），后续即可得到一份《中学生教培机构服务评价数据分析报告》。请根据你的真实意愿回答就好！',
    isJumpQues: true,
  },
  {
    title: '你不愿意参加的原因是什么？',
    id: 99,
    choose: [],
    value: '',
    type: 'textarea',
    quesType: '30,200',
  },

  {
    title: '你参加教培机构的情况？',
    id: 100,
    choose: [
      {
        label: '有，现在在参加',
        value: '有，现在在参加',
      },
      {
        label: '参加过，现在不参加了',
        value: '参加过，现在不参加了',
      },
      {
        label: '没有参加过',
        value: '没有参加过',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '你培训的科目有？',
    id: 101,
    choose: [
      {
        label: '语文',
        value: '语文',
      },
      {
        label: '数学',
        value: '数学',
      },
      {
        label: '外语',
        value: '外语',
      },
      {
        label: '生物（生命科学）',
        value: '生物（生命科学）',
      },
      {
        label: '化学',
        value: '化学',
      },
      {
        label: '物理',
        value: '物理',
      },
      {
        label: '地理',
        value: '地理',
      },
      {
        label: '历史',
        value: '历史',
      },
      {
        label: '政治（道德与法制）',
        value: '政治（道德与法制）',
      },
      {
        label: '技术',
        value: '技术',
      },
      {
        label: '其它',
        value: '其它',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
  },
  {
    title: '参加培训后，你的成绩提升情况？',
    id: 102,
    choose: [
      {
        label: '无明显提升',
        value: '无明显提升',
        score: 0,
      },
      {
        label: '不确定 ',
        value: '不确定',
        score: 1,
      },
      {
        label: '有小幅提升',
        value: '有小幅提升',
        score: 2,
      },
      {
        label: '有大幅提升',
        value: '有大幅提升',
        score: 3,
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '最值得你推荐的教培机构是？',
    id: 103,
    choose: [],
    value: '',
    type: 'input',
    quesType: '30,200',
  },
  {
    title: '你选择了该机构的什么服务项目？',
    id: 104,
    choose: [],
    value: '',
    type: 'input',
    quesType: '30,200',
  },
  {
    title: '你认为最值得推荐的理由是什么？',
    id: 105,
    choose: [],
    value: '',
    type: 'textarea',
    quesType: '30,200',
  },
  {
    title: '你没有参加教培机构的原因是什么？',
    id: 106,
    choose: [],
    value: '',
    type: 'textarea',
    quesType: '30,200',
  },
];
export default data;
