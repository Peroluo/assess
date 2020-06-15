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
    style: 'default',
  },
  {
    title: '目前，你的学习成绩总体表现？',
    id: 2,
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
    style: 'fixed',
  },
  {
    title: '您的出生年月？（填写格式如1970年9月）',
    id: 3,
    choose: [],
    value: '',
    type: 'date',
    quesType: '30,200',
  },
  {
    title: '下描述，请选出生活中您出现过的情况。（可多选）',
    id: 4,
    choose: [
      {
        label: '有时我真想骂人。',
        value: '有时我真想骂人。',
      },
      {
        label: '有时我也讲假话。 ',
        value: '有时我也讲假话。 ',
      },
      {
        label: '我有时发怒。',
        value: '我有时发怒。',
      },
      {
        label: '我有时有点自夸。',
        value: '我有时有点自夸。',
      },
      {
        label: '有时我也会说说人家的闲话。',
        value: '有时我也会说说人家的闲话。',
      },
      {
        label: '我喜欢我认识的每一个人。',
        value: '我喜欢我认识的每一个人。',
      },
      {
        label: '当我犯了错误，我总是愿意承认它。',
        value: '当我犯了错误，我总是愿意承认它。',
      },
      {
        label: '我从来没有迟到过。',
        value: '我从来没有迟到过。',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'default',
  },
  {
    title: '下描述，请选出生活中您出现过的情况。（可多选）',
    id: 5,
    choose: [
      {
        label: '有时我真想骂人。',
        value: '有时我真想骂人。',
      },
      {
        label: '有时我也讲假话。 ',
        value: '有时我也讲假话。 ',
      },
      {
        label: '我有时发怒。',
        value: '我有时发怒。',
      },
      {
        label: '我有时有点自夸。',
        value: '我有时有点自夸。',
      },
      {
        label: '有时我也会说说人家的闲话。',
        value: '有时我也会说说人家的闲话。',
      },
      {
        label: '我喜欢我认识的每一个人。',
        value: '我喜欢我认识的每一个人。',
      },
      {
        label: '当我犯了错误，我总是愿意承认它。',
        value: '当我犯了错误，我总是愿意承认它。',
      },
      {
        label: '我从来没有迟到过。',
        value: '我从来没有迟到过。',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '下描述，请选出生活中您出现过的情况。（可多选）',
    id: 6,
    choose: [
      {
        label: '有时我真想骂人。',
        value: '有时我真想骂人。',
      },
      {
        label: '有时我也讲假话。 ',
        value: '有时我也讲假话。 ',
      },
      {
        label: '我有时发怒。',
        value: '我有时发怒。',
      },
      {
        label: '我有时有点自夸。',
        value: '我有时有点自夸。',
      },
      {
        label: '有时我也会说说人家的闲话。',
        value: '有时我也会说说人家的闲话。',
      },
      {
        label: '我喜欢我认识的每一个人。',
        value: '我喜欢我认识的每一个人。',
      },
      {
        label: '当我犯了错误，我总是愿意承认它。',
        value: '当我犯了错误，我总是愿意承认它。',
      },
      {
        label: '我从来没有迟到过。',
        value: '我从来没有迟到过。',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
    atLeast: 3,
    atLeastNUm: '三',
  },
  {
    title: '我参加的辅导机构有哪些？',
    id: 7,
    choose: [],
    value: '',
    type: 'textarea',
    quesType: '30,200',
  },
];
export default data;
