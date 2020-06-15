// [ "select", "date", "multiSelect", "textarea" ]
const data = [
  {
    title: '您是孩子的？',
    id: 1,
    choose: [
      {
        label: '爸爸',
        value: '爸爸',
      },
      {
        label: '妈妈',
        value: '妈妈',
      },
      {
        label: '爷爷',
        value: '爷爷',
      },
      {
        label: '奶奶',
        value: '奶奶',
      },
      {
        label: '外公',
        value: '外公',
      },
      {
        label: '外婆',
        value: '外婆',
      },
      {
        label: '其他',
        value: '其他',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    tips:
      '国内外教育学家、心理学家及经济学家等众多研究发现学生的学习成绩显著受到父母的婚姻状况、教育水平、职业、家庭经济水平等因素影响。为了深入确定影响您孩子学习成绩的原因，请您如实回答以下问题！',
    isJumpQues: true,
  },
  {
    title: '您的出生年月？',
    id: 2,
    choose: [],
    value: '',
    type: 'date',
    quesType: '30,200',
  },
  {
    title: '您的婚姻状况？',
    id: 3,
    choose: [
      {
        label: '初婚',
        value: '初婚',
      },
      {
        label: '再婚',
        value: '再婚',
      },
      {
        label: '复婚',
        value: '复婚',
      },
      {
        label: '离异',
        value: '离异',
      },
      {
        label: '丧偶',
        value: '丧偶',
      },
      {
        label: '其他',
        value: '其他',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '您的最高学历是？',
    id: 4,
    choose: [
      {
        label: '博士后',
        value: '博士后',
      },
      {
        label: '博士',
        value: '博士',
      },
      {
        label: '硕士',
        value: '硕士',
      },
      {
        label: '本科',
        value: '本科',
      },
      {
        label: '大专',
        value: '大专',
      },
      {
        label: '高中',
        value: '高中',
      },
      {
        label: '初中及以下',
        value: '初中及以下',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您配偶的最高学历是？',
    id: 5,
    choose: [
      {
        label: '博士后',
        value: '博士后',
      },
      {
        label: '博士',
        value: '博士',
      },
      {
        label: '硕士',
        value: '硕士',
      },
      {
        label: '本科',
        value: '本科',
      },
      {
        label: '大专',
        value: '大专',
      },
      {
        label: '高中',
        value: '高中',
      },
      {
        label: '初中及以下',
        value: '初中及以下',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您所在的行业和岗位分别是？（填写格式如互联网/产品经理）',
    id: 6,
    choose: [],
    value: '',
    type: 'input',
    quesType: '30,200',
  },
  {
    title: '您配偶所在的行业和岗位分别是？（填写格式如互联网/产品经理）',
    id: 7,
    choose: [],
    value: '',
    type: 'input',
    quesType: '30,200',
  },
  {
    title: '您的家庭年收入是？',
    id: 8,
    choose: [
      {
        label: '100万以上',
        value: '100万以上',
      },
      {
        label: '50-100万',
        value: '50-100万',
      },
      {
        label: '30-50万',
        value: '30-50万',
      },
      {
        label: '15-30万',
        value: '15-30万',
      },
      {
        label: '5-15万',
        value: '5-15万',
      },
      {
        label: '5万以下',
        value: '5万以下',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '目前,您孩子的学习成绩总体表现？',
    id: 9,
    choose: [
      {
        label: '名列前茅（前10%）',
        value: '名列前茅（前10%）',
      },
      {
        label: ' 中等偏上（10%-25%）',
        value: '中等偏上（10%-25%）',
      },
      {
        label: ' 中等（25%-75%）',
        value: '中等（25%-75%）',
      },
      {
        label: ' 中等偏下（75%-90%）',
        value: '中等偏下（75%-90%）',
      },
      {
        label: ' 排名靠后（后90%）',
        value: '排名靠后（后90%）',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '您希望孩子未来能考上以下哪种级别的大学？',
    id: 10,
    choose: [
      {
        label: '清华、北大等C9高校',
        value: '清华、北大等C9高校',
      },
      {
        label: '985',
        value: '985',
      },
      {
        label: '211',
        value: '211',
      },
      {
        label: '其他重本',
        value: '其他重本',
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
    title: '您希望孩子未来能考上以下哪种级别的大学？',
    id: 11,
    choose: [
      {
        label: '清华、北大等C9高校',
        value: '清华、北大等C9高校',
      },
      {
        label: '重点大学',
        value: '重点大学',
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
    title: '您对孩子现在的学习状态感到满意吗？',
    id: 12,
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
    title: '您孩子知道自己存在哪些不足吗？',
    id: 13,
    choose: [
      {
        label: '非常清楚自己的问题,但不需要解决,无所谓',
        value: '非常清楚自己的问题,但不需要解决,无所谓',
      },
      {
        label: '非常迷茫,不知道哪里出了问题',
        value: '非常迷茫,不知道哪里出了问题',
      },
      {
        label: '能发现一些问题,但不确定,也不知道怎么办',
        value: '能发现一些问题,但不确定,也不知道怎么办',
      },
      {
        label: '能发现一些确定的问题,但不知道怎么办',
        value: '能发现一些确定的问题,但不知道怎么办',
      },
      {
        label: '能发现一些确定的问题,并且知道怎么办',
        value: '能发现一些确定的问题,并且知道怎么办',
      },
      {
        label: '非常清楚自己的问题,但不知道怎么办',
        value: '非常清楚自己的问题,但不知道怎么办',
      },
      {
        label: '非常清楚自己的问题,并且知道怎么办',
        value: '非常清楚自己的问题,并且知道怎么办',
      },
      {
        label: '我也不清楚',
        value: '我也不清楚',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '您认为孩子现在的学习情况怎么样？',
    id: 14,
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
        label: '有努力学习,但进步不明显',
        value: '有努力学习,但进步不明显',
      },
      {
        label: '学习基础不好,学习新知识困难',
        value: '学习基础不好,学习新知识困难',
      },
      {
        label: '受周围人影响,无法专注在学习上',
        value: '受周围人影响,无法专注在学习上',
      },
      {
        label: '想努力学习,但总坚持不下去',
        value: '想努力学习,但总坚持不下去',
      },
      {
        label: '有努力学习,并且取得了较好的成绩',
        value: '有努力学习,并且取得了较好的成绩',
      },
      {
        label: '其他',
        value: '其他',
      },
      {
        label: '我也不清楚',
        value: '我也不清楚',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '您在教育孩子的过程中最大的苦恼是？',
    id: 15,
    choose: [
      {
        label: '不知道孩子在想什么',
        value: '不知道孩子在想什么',
      },
      {
        label: '与孩子不能沟通',
        value: '与孩子不能沟通',
      },
      {
        label: '孩子不理解家长的苦心',
        value: '孩子不理解家长的苦心',
      },
      {
        label: '没有时间教育孩子',
        value: '没有时间教育孩子',
      },
      {
        label: '不知道教育方法',
        value: '不知道教育方法',
      },
      {
        label: '孩子不听我们的',
        value: '孩子不听我们的',
      },
      {
        label: '夫妻意见不一致',
        value: '夫妻意见不一致',
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
    title: '通过本次诊断,您期望解决哪些问题？',
    id: 16,
    choose: [
      {
        label: '提高孩子学习成绩',
        value: '提高孩子学习成绩',
      },
      {
        label: '全面了解孩子的优势和弱势',
        value: '全面了解孩子的优势和弱势',
      },
      {
        label: '提高孩子解决问题的能力',
        value: '提高孩子解决问题的能力',
      },
      {
        label: '消除孩子心理困扰,增加幸福感',
        value: '消除孩子心理困扰,增加幸福感',
      },
      {
        label: '解决您和孩子之间的冲突',
        value: '解决您和孩子之间的冲突',
      },
      {
        label: '掌握帮助孩子成长的正确方法',
        value: '掌握帮助孩子成长的正确方法',
      },
      {
        label: '学习怎么成为合格的父母',
        value: '学习怎么成为合格的父母',
      },
      {
        label: '解决夫妻间的教育理念冲突',
        value: '解决夫妻间的教育理念冲突',
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
    title: '您孩子愿意学习吗？',
    id: 17,
    choose: [
      {
        label: '我孩子非常不想学习。',
        value: '我孩子非常不想学习。',
      },
      {
        label: '大部分时候,我孩子都不想学习。',
        value: '大部分时候,我孩子都不想学习。',
      },
      {
        label: '很多时候,我孩子都愿意学习。',
        value: '很多时候,我孩子都愿意学习。',
      },
      {
        label: '通常,我孩子都愿意好好学习。',
        value: '通常,我孩子都愿意好好学习。',
      },
      {
        label: '一直以来,我孩子都有非常强烈的学习意愿。',
        value: '一直以来,我孩子都有非常强烈的学习意愿。',
      },
      {
        label: '我也不了解。',
        value: '我也不了解。',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    tips: '以下关于您孩子学习行为和学校环境的描述，请按照您知道的实际情况选择就好！',
    style: 'fixed',
  },
  {
    title: '您孩子有不想学习的时候吗？',
    id: 18,
    choose: [
      {
        label: '无论何时,我孩子都不会在学习上投入时间。',
        value: '无论何时,我孩子都不会在学习上投入时间。',
      },
      {
        label: '我孩子对学习常常只有“三分钟热度”。',
        value: '我孩子对学习常常只有“三分钟热度”。',
      },
      {
        label: '我孩子能坚持学习一段时间,但觉得有些痛苦。',
        value: '我孩子能坚持学习一段时间,但觉得有些痛苦。',
      },
      {
        label: '我孩子能坚持学习,并且享受这个过程。',
        value: '我孩子能坚持学习,并且享受这个过程。',
      },
      {
        label: '我孩子全身心投入到学习,依然觉得时间不够用,恨不得减少睡眠时间来学习。',
        value: '我孩子全身心投入到学习,依然觉得时间不够用,恨不得减少睡眠时间来学习。',
      },
      {
        label: '我也不了解。',
        value: '我也不了解。',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '您认为您孩子坚持学习的原因是？',
    id: 19,
    choose: [
      {
        label: '对学习学校课程感兴趣',
        value: '对学习学校课程感兴趣',
      },
      {
        label: '为了获得知识,认识和理解世界',
        value: '为了获得知识,认识和理解世界',
      },
      {
        label: '为了取得一定的成就,如考上好学校等',
        value: '为了取得一定的成就,如考上好学校等',
      },
      {
        label: '为了帮助家庭生活得更好',
        value: '为了帮助家庭生活得更好',
      },
      {
        label: '为了实现我们的期望',
        value: '为了实现我们的期望',
      },
      {
        label: '为了让老师或同学们等更认可TA',
        value: '为了让老师或同学们等更认可TA',
      },
      {
        label: '我们或老师等要TA学',
        value: '我们或老师等要TA学',
      },
      {
        label: '学习对未来生活和工作有价值',
        value: '学习对未来生活和工作有价值',
      },
      {
        label: '我孩子不知道为什么要学习',
        value: '我孩子不知道为什么要学习',
      },
      {
        label: '我也不了解',
        value: '我也不了解',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '您孩子有自己的学习目标吗？',
    id: 20,
    choose: [
      {
        label: '没有自己的学习目标,一切按照我们或老师的要求来。',
        value: '没有自己的学习目标,一切按照我们或老师的要求来。',
      },
      {
        label: '我孩子有清晰的学习目标。',
        value: '我孩子有清晰的学习目标。',
      },
      {
        label: '我也不了解。',
        value: '我也不了解。',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '您孩子是怎么制定学习目标的？',
    id: 21,
    choose: [
      {
        label: '我孩子制定了清晰的学期目标,设定了要进步的名次。',
        value: '我孩子制定了清晰的学期目标,设定了要进步的名次。',
      },
      {
        label: '围绕学期目标,我孩子制定了详细的季度学习计划。',
        value: '围绕学期目标,我孩子制定了详细的季度学习计划。',
      },
      {
        label: '围绕季度计划,我孩子制定了详细的月度学习计划。',
        value: '围绕季度计划,我孩子制定了详细的月度学习计划。',
      },
      {
        label: '根据季度计划,我孩子分解了周计划,设定了每周需要完成的学习任务。',
        value: '根据季度计划,我孩子分解了周计划,设定了每周需要完成的学习任务。',
      },
      {
        label: '根据周计划,我孩子分解了日计划,设定了每天需要完成的学习任务。',
        value: '根据周计划,我孩子分解了日计划,设定了每天需要完成的学习任务。',
      },
      {
        label: '孩子从没有按照上述方式来制定学习目标或计划。',
        value: '孩子从没有按照上述方式来制定学习目标或计划。',
      },
      {
        label: '我也不了解。',
        value: '我也不了解。',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '平时您孩子会为学习付出努力吗？',
    id: 22,
    choose: [
      {
        label: '我孩子从来都不能为学习付出努力。',
        value: '我孩子从来都不能为学习付出努力。',
      },
      {
        label: '我孩子很少为学习付出努力。',
        value: '我孩子很少为学习付出努力。',
      },
      {
        label: '大部分时候,我孩子会为学习付出努力。',
        value: '大部分时候,我孩子会为学习付出努力。',
      },
      {
        label: '我孩子基本上能为学习付出努力。',
        value: '我孩子基本上能为学习付出努力。',
      },
      {
        label: '我孩子一直都在全力以赴地为学习付出努力。',
        value: '我孩子一直都在全力以赴地为学习付出努力。',
      },
      {
        label: '我也不了解。',
        value: '我也不了解。',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '您孩子喜欢学习吗？',
    id: 23,
    choose: [
      {
        label: '一直都不喜欢',
        value: '一直都不喜欢',
      },
      {
        label: '大部分时候不喜欢',
        value: '大部分时候不喜欢',
      },
      {
        label: '谈不上喜欢也谈不上讨厌',
        value: '谈不上喜欢也谈不上讨厌',
      },
      {
        label: '大部分时候喜欢',
        value: '大部分时候喜欢',
      },
      {
        label: '一直很喜欢',
        value: '一直很喜欢',
      },
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您孩子相信自己能做好事情吗？',
    id: 24,
    choose: [
      {
        label: '非常不相信',
        value: '非常不相信',
      },
      {
        label: '大部分时候不相信',
        value: '大部分时候不相信',
      },
      {
        label: '偶尔不相信',
        value: '偶尔不相信',
      },
      {
        label: '相信',
        value: '相信',
      },
      {
        label: '非常相信',
        value: '非常相信',
      },
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您孩子害怕接受挑战吗？',
    id: 25,
    choose: [
      {
        label: '非常害怕',
        value: '非常害怕',
      },
      {
        label: '大部分时候会害怕',
        value: '大部分时候会害怕',
      },
      {
        label: '偶尔会害怕',
        value: '偶尔会害怕',
      },
      {
        label: '一点也不害怕',
        value: '一点也不害怕',
      },
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您孩子学习时会拖拖拉拉的吗？',
    id: 26,
    choose: [
      {
        label: '一直都这样',
        value: '一直都这样',
      },
      {
        label: '大部分时间会这样',
        value: '大部分时间会这样',
      },
      {
        label: '偶尔会这样',
        value: '偶尔会这样',
      },
      {
        label: '从不这样',
        value: '从不这样',
      },
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您孩子能按时完成学习任务吗？',
    id: 27,
    choose: [
      {
        label: '我孩子从来没有按时完成过学习任务。',
        value: '我孩子从来没有按时完成过学习任务。',
      },
      {
        label: '我孩子偶尔才能按时完成学习任务。',
        value: '我孩子偶尔才能按时完成学习任务。',
      },
      {
        label: '大部分时候我孩子能按时完成学习任务,但学习效果还有提升空间。',
        value: '大部分时候我孩子能按时完成学习任务,但学习效果还有提升空间。',
      },
      {
        label: '一直以来,我孩子都能按时保质地完成学习任务。',
        value: '一直以来,我孩子都能按时保质地完成学习任务。',
      },
      {
        label: '我孩子会动态调节学习任务的执行全过程,总能高质量地提前完成学习任务。',
        value: '我孩子会动态调节学习任务的执行全过程,总能高质量地提前完成学习任务。',
      },
      {
        label: '我也不了解。',
        value: '我也不了解。',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '您孩子在学习时会使用合适的学习方法吗？',
    id: 28,
    choose: [
      {
        label: '我孩子不会使用任何学习方法。',
        value: '我孩子不会使用任何学习方法。',
      },
      {
        label: '我孩子看同学怎么学,TA就跟着怎么学。',
        value: '我孩子看同学怎么学,TA就跟着怎么学。',
      },
      {
        label: '我孩子知道学习方法有问题,但不知道怎么改进。',
        value: '我孩子知道学习方法有问题,但不知道怎么改进。',
      },
      {
        label: '我孩子会使用适合自己的学习方法。',
        value: '我孩子会使用适合自己的学习方法。',
      },
      {
        label: '我也不了解。',
        value: '我也不了解。',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '当您孩子学习忙得焦头烂额,觉得时间不够用时,TA会怎么办？',
    id: 29,
    choose: [
      {
        label: '感觉泄气,认为自己处理不好繁重的学习任务,破罐破摔。',
        value: '感觉泄气,认为自己处理不好繁重的学习任务,破罐破摔。',
      },
      {
        label: '认为学习很重要,即使时间不够用,也得拼命学。',
        value: '认为学习很重要,即使时间不够用,也得拼命学。',
      },
      {
        label: '知道自己的时间管理出现了问题,主动去寻找我们、老师或同学的帮助,想法改变这种状况。',
        value: '知道自己的时间管理出现了问题,主动去寻找我们、老师或同学的帮助,想法改变这种状况。',
      },
      {
        label: '先停下学习,静下心检查自己的学习时间安排有没有需要改进的地方,协调学习任务冲突。',
        value: '先停下学习,静下心检查自己的学习时间安排有没有需要改进的地方,协调学习任务冲突。',
      },
      {
        label:
          '我孩子很少会出现这类情况,学习前TA会事先借助工具对学习任务进行优先级排序,统筹安排、推进多项学习任务有序进行。',
        value:
          '我孩子很少会出现这类情况,学习前TA会事先借助工具对学习任务进行优先级排序,统筹安排、推进多项学习任务有序进行。',
      },
      {
        label: '我也不了解。',
        value: '我也不了解。',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '您孩子有考试焦虑吗？',
    id: 30,
    choose: [
      {
        label: '只要考试就会很焦虑',
        value: '只要考试就会很焦虑',
      },
      {
        label: '大部分考试会感到焦虑',
        value: '大部分考试会感到焦虑',
      },
      {
        label: '偶尔才会焦虑',
        value: '偶尔才会焦虑',
      },
      {
        label: '从不会焦虑',
        value: '从不会焦虑',
      },
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您孩子学习压力大吗？',
    id: 31,
    choose: [
      {
        label: '一直有很大压力',
        value: '一直有很大压力',
      },
      {
        label: '大部分时候会有压力',
        value: '大部分时候会有压力',
      },
      {
        label: '偶尔会有压力',
        value: '偶尔会有压力',
      },
      {
        label: '从不会有压力',
        value: '从不会有压力',
      },
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您孩子在学习过程中会定时反思自己吗？',
    id: 32,
    choose: [
      {
        label: '从来没有反思过',
        value: '从来没有反思过',
      },
      {
        label: '偶尔才会反思',
        value: '偶尔才会反思',
      },
      {
        label: '大部分时候知道反思',
        value: '大部分时候知道反思',
      },
      {
        label: '一直都在定时反思',
        value: '一直都在定时反思',
      },
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您孩子能把注意力投入到学习中吗？',
    id: 33,
    choose: [
      {
        label: '一点也不能',
        value: '一点也不能',
      },
      {
        label: '大部分时候不能',
        value: '大部分时候不能',
      },
      {
        label: '偶尔不能',
        value: '偶尔不能',
      },
      {
        label: '一直都能',
        value: '一直都能',
      },
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '与同龄人相比,您孩子的记忆力怎么样？',
    id: 34,
    choose: [
      {
        label: '与很多同龄人相比,非常差',
        value: '与很多同龄人相比,非常差',
      },
      {
        label: '比一些同龄人差',
        value: '比一些同龄人差',
      },
      {
        label: '和大部分同龄人差不多',
        value: '和大部分同龄人差不多',
      },
      {
        label: '明显比其他同龄人强',
        value: '明显比其他同龄人强',
      },
      {
        label: '很强,能做到过目不忘',
        value: '很强,能做到过目不忘',
      },
      {
        label: '我也不清楚',
        value: '我也不清楚',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您孩子的推理能力怎么样？',
    id: 35,
    choose: [
      {
        label: '非常差',
        value: '非常差',
      },
      {
        label: '有些差',
        value: '有些差',
      },
      {
        label: '和大部分同龄人差不多',
        value: '和大部分同龄人差不多',
      },
      {
        label: '明显比其他同龄人强',
        value: '明显比其他同龄人强',
      },
      {
        label: '我也不清楚',
        value: '我也不清楚',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您孩子精力充沛吗？',
    id: 36,
    choose: [
      {
        label: '经常觉得精力跟不上',
        value: '经常觉得精力跟不上',
      },
      {
        label: '精力时好时坏',
        value: '精力时好时坏',
      },
      {
        label: '说不上好也说不上坏,一般',
        value: '说不上好也说不上坏,一般',
      },
      {
        label: '大部分时间精力还可以',
        value: '大部分时间精力还可以',
      },
      {
        label: '精力一直都很充沛',
        value: '精力一直都很充沛',
      },
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您孩子睡眠质量怎么样？',
    id: 37,
    choose: [
      {
        label: '失眠,需要使用安眠药才能入睡',
        value: '失眠,需要使用安眠药才能入睡',
      },
      {
        label: '入睡用时长,很难入睡',
        value: '入睡用时长,很难入睡',
      },
      {
        label: '入睡后,稍有动静就醒,醒后很难入睡',
        value: '入睡后,稍有动静就醒,醒后很难入睡',
      },
      {
        label: '总是做梦,醒来时觉得很累',
        value: '总是做梦,醒来时觉得很累',
      },
      {
        label: '只要有心事就彻夜难眠',
        value: '只要有心事就彻夜难眠',
      },
      {
        label: '睡眠没规律,常常熬夜到很晚',
        value: '睡眠没规律,常常熬夜到很晚',
      },
      {
        label: '早上醒来,总觉得还没睡够',
        value: '早上醒来,总觉得还没睡够',
      },
      {
        label: '睡得不错,每次醒来都精神满满',
        value: '睡得不错,每次醒来都精神满满',
      },
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'multiSelect',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '您孩子会沉迷于网络/游戏吗？',
    id: 38,
    choose: [
      {
        label: '非常沉迷',
        value: '非常沉迷',
      },
      {
        label: '大部分时候会沉迷',
        value: '大部分时候会沉迷',
      },
      {
        label: '偶尔会沉迷',
        value: '偶尔会沉迷',
      },
      {
        label: '没有沉迷',
        value: '没有沉迷',
      },
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '学校老师对您孩子的学习有负面影响吗？',
    id: 39,
    choose: [
      {
        label: '有很严重的负面影响',
        value: '有很严重的负面影响',
      },
      {
        label: '有一些负面影响',
        value: '有一些负面影响',
      },
      {
        label: '谈不上是好还是坏的影响',
        value: '谈不上是好还是坏的影响',
      },
      {
        label: '都是良性影响',
        value: '都是良性影响',
      },
      {
        label: '我也不清楚',
        value: '我也不清楚',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '班里同学对您孩子的学习有负面影响吗？',
    id: 40,
    choose: [
      {
        label: '有很严重的负面影响',
        value: '有很严重的负面影响',
      },
      {
        label: '有一些负面影响',
        value: '有一些负面影响',
      },
      {
        label: '谈不上是好还是坏的影响',
        value: '谈不上是好还是坏的影响',
      },
      {
        label: '都是良性影响',
        value: '都是良性影响',
      },
      {
        label: '我也不清楚',
        value: '我也不清楚',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您孩子现在有正在交往或暗恋的对象吗？',
    id: 41,
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
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '恋爱/暗恋对您孩子的学习有负面影响吗？',
    id: 42,
    choose: [
      {
        label: '有很严重的负面影响',
        value: '有很严重的负面影响',
      },
      {
        label: '有一些负面影响',
        value: '有一些负面影响',
      },
      {
        label: '谈不上是好还是坏的影响',
        value: '谈不上是好还是坏的影响',
      },
      {
        label: '促进了孩子努力学习',
        value: '促进了孩子努力学习',
      },
      {
        label: '我也不清楚',
        value: '我也不清楚',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '您孩子渴望有恋爱的对象吗？',
    id: 43,
    choose: [
      {
        label: '渴望有',
        value: '渴望有',
      },
      {
        label: '不需要有',
        value: '不需要有',
      },
      {
        label: '我也不知道',
        value: '我也不知道',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '渴望恋爱对您孩子的学习有负面影响吗？',
    id: 44,
    choose: [
      {
        label: '有很严重的负面影响',
        value: '有很严重的负面影响',
      },
      {
        label: '有一些负面影响',
        value: '有一些负面影响',
      },
      {
        label: '谈不上是好还是坏的影响',
        value: '谈不上是好还是坏的影响',
      },
      {
        label: '促进了孩子努力学习',
        value: '促进了孩子努力学习',
      },
      {
        label: '我也不清楚',
        value: '我也不清楚',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我对孩子有清晰的教育目标。',
    id: 45,
    choose: [
      {
        label: '有',
        value: '有',
      },
      {
        label: '没有',
        value: '没有',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    tips: '三、以下会收集您的教育行为、及孩子所处的家庭环境，请选择符合实际情况的选项就好！',
  },
  {
    title: '在尊重孩子意见和学习情况的基础上,我对孩子提出了合适的学习期望。',
    id: 46,
    choose: [
      {
        label: '有',
        value: '有',
      },
      {
        label: '没有',
        value: '没有',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '日常生活中,我经常主动引导孩子认识学习的重要性。',
    id: 47,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我会运用适当的方法培养孩子的学习兴趣。',
    id: 48,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我经常鼓励孩子要努力学习。',
    id: 49,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我会积极关注孩子的个性成长,并给予正面引导。',
    id: 50,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我能做到自己的行为和对孩子的期望相符合,以身作则。',
    id: 51,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我经常通过生活中的细节或案例引导孩子树立正确的价值观。',
    id: 52,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我会带领孩子一起思考人生的价值和意义。',
    id: 53,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我会引导孩子要相信自己能解决学习中遇到的困难。',
    id: 54,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我相信孩子有能力取得好成绩和名次。',
    id: 55,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '不管孩子学习成绩好坏,我从不怀疑孩子的学习能力。',
    id: 56,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我相信孩子通过努力可以变得越来越好。',
    id: 57,
    choose: [
      {
        label: '有',
        value: '有',
      },
      {
        label: '没有',
        value: '没有',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我常常给孩子传递“努力付出比智力更能影响学习”的信念。',
    id: 58,
    choose: [
      {
        label: '有',
        value: '有',
      },
      {
        label: '没有',
        value: '没有',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我经常引导孩子要更加注重事情的过程而非结果。',
    id: 59,
    choose: [
      {
        label: '有',
        value: '有',
      },
      {
        label: '没有',
        value: '没有',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我会引导孩子一起制定恰当的学习目标。',
    id: 60,
    choose: [
      {
        label: '有',
        value: '有',
      },
      {
        label: '没有',
        value: '没有',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '平时,我会有意识地培养孩子养成良好的学习习惯。',
    id: 61,
    choose: [
      {
        label: '有',
        value: '有',
      },
      {
        label: '没有',
        value: '没有',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我会帮助孩子掌握科学、合适的学习方法。',
    id: 62,
    choose: [
      {
        label: '有',
        value: '有',
      },
      {
        label: '没有',
        value: '没有',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '孩子遇到学习困难时,我会先引导孩子独立思考,尝试自己解决。',
    id: 63,
    choose: [
      {
        label: '有',
        value: '有',
      },
      {
        label: '没有',
        value: '没有',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我能主动引导孩子制定详细的学习计划。',
    id: 64,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我会随时检查孩子的学习进展。',
    id: 65,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我能遵守和孩子制定的行为规则。',
    id: 66,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我经常监督孩子的上网时间。',
    id: 67,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我们的家庭收入可以满足家庭日常开销。',
    id: 68,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '我重视教育投入,能满足孩子的学习需求。',
    id: 69,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '孩子经常会担心家里的经济情况。',
    id: 70,
    choose: [
      {
        label: '是',
        value: '是',
      },
      {
        label: '不是',
        value: '不是',
      },
      {
        label: '不确定',
        value: '不确定',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    isJumpQues: true,
  },
  {
    title: '下面有关您和孩子相处情景的描述,请选择出比较符合实际情况的选项。',
    id: 71,
    choose: [
      {
        label: '我常常无缘无故地对孩子发脾气,说一些否定TA的话,甚至会打骂TA。',
        value: '我常常无缘无故地对孩子发脾气,说一些否定TA的话,甚至会打骂TA。',
      },
      {
        label: '我很少关心孩子的学习,也不和TA沟通,更不用什么标准去要求TA。',
        value: '我很少关心孩子的学习,也不和TA沟通,更不用什么标准去要求TA。',
      },
      {
        label: '我总是过多干涉孩子的学习,常常要求TA无条件服从命令,很少听孩子的想法。',
        value: '我总是过多干涉孩子的学习,常常要求TA无条件服从命令,很少听孩子的想法。',
      },
      {
        label: '我对孩子有求必应,很少向孩子提学习要求或做什么限制,经常很在乎孩子的安全问题。',
        value: '我对孩子有求必应,很少向孩子提学习要求或做什么限制,经常很在乎孩子的安全问题。',
      },
      {
        label: '我能尊重和听取孩子的观点，既坚持原则又注重培养TA的独立性，关心孩子的学习和成长。',
        value: '我能尊重和听取孩子的观点，既坚持原则又注重培养TA的独立性，关心孩子的学习和成长。',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '下面有关您配偶和孩子相处情景的描述,请选择出比较符合实际情况的选项。',
    id: 72,
    choose: [
      {
        label: '我配偶常常无缘无故地对孩子发脾气,说一些否定TA的话,甚至会打骂TA。',
        value: '我配偶常常无缘无故地对孩子发脾气,说一些否定TA的话,甚至会打骂TA。',
      },
      {
        label: '我配偶很少关心孩子的学习,也不和TA沟通,更不用什么标准去要求TA。',
        value: '我配偶很少关心孩子的学习,也不和TA沟通,更不用什么标准去要求TA。',
      },
      {
        label: '我配偶总是过多干涉孩子的学习,常常要求TA无条件服从命令,很少听孩子的想法。',
        value: '我配偶总是过多干涉孩子的学习,常常要求TA无条件服从命令,很少听孩子的想法。',
      },
      {
        label: '我配偶对孩子有求必应,很少向孩子提学习要求或做什么限制,经常很在乎孩子的安全问题。',
        value: '我配偶对孩子有求必应,很少向孩子提学习要求或做什么限制,经常很在乎孩子的安全问题。',
      },
      {
        label:
          '我配偶能尊重和听取孩子的观点，既坚持原则又注重培养TA的独立性，关心孩子的学习和成长。',
        value:
          '我配偶能尊重和听取孩子的观点，既坚持原则又注重培养TA的独立性，关心孩子的学习和成长。',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    style: 'fixed',
  },
  {
    title: '您和配偶关系融洽吗？',
    id: 73,
    choose: [
      {
        label: '一点也不融洽',
        value: '一点也不融洽',
      },
      {
        label: '大部分时候不融洽',
        value: '大部分时候不融洽',
      },
      {
        label: '不确定',
        value: '不确定',
      },
      {
        label: '谈不上好也谈不上坏',
        value: '谈不上好也谈不上坏',
      },
      {
        label: '基本上融洽',
        value: '基本上融洽',
      },
      {
        label: '非常融洽',
        value: '非常融洽',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title:
      '假设一种场景：“某次考试成绩发下来了,孩子回家带着一脸不开心告诉你TA考的不理想。”您会如何回答？',
    id: 74,
    choose: [
      {
        label: '怎么了？这次没考好都怪题目太难了,不怪你,不要难过了！',
        value: '怎么了？这次没考好都怪题目太难了,不怪你,不要难过了！',
      },
      {
        label: '现在知道难受了,平时为什么不好好复习？一点都不让我省心！',
        value: '现在知道难受了,平时为什么不好好复习？一点都不让我省心！',
      },
      {
        label: '快把书包放下,洗洗手,赶紧过来吃饭了！',
        value: '快把书包放下,洗洗手,赶紧过来吃饭了！',
      },
      {
        label: '从这次考试成绩来看,你有些知识还没有掌握牢固,下次不要犯同样的错误了。',
        value: '从这次考试成绩来看,你有些知识还没有掌握牢固,下次不要犯同样的错误了。',
      },
      {
        label:
          '看到你不开心,我会担心。我知道你平时努力学习,希望能拿到好成绩。你可以和我说说你的心情,我们一起分析这次考试不理想的原因。',
        value:
          '看到你不开心,我会担心。我知道你平时努力学习,希望能拿到好成绩。你可以和我说说你的心情,我们一起分析这次考试不理想的原因。',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    style: 'fixed',
  },

  {
    title: '您是否愿意参加道道个人成长平台开展的教培机构服务评价征集计划？',
    id: 75,
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
      '想知道和您孩子学习成绩相似的同年级学生都参加过哪些教育培训吗？以下是道道个人成长平台开展的教培机构服务评价征集计划，参加后完整回答如下问题（大概2分钟），后续即可得到一份《中学生教培机构服务评价数据分析报告》。请根据您的真实意愿回答就好！',
    isJumpQues: true,
  },
  {
    title: '您孩子不愿意参加的原因是什么？',
    id: 76,
    choose: [],
    value: '',
    type: 'textarea',
    quesType: '30,200',
  },

  {
    title: '您孩子参加教培机构的情况？',
    id: 77,
    choose: [
      {
        label: '有,现在在参加',
        value: '有,现在在参加',
      },
      {
        label: '参加过,现在不参加了',
        value: '参加过,现在不参加了',
      },
      {
        label: '没有参加过',
        value: '没有参加过',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
    tips:
      '想知道和您孩子学习成绩相似的同年级学生都参加过哪些教育培训吗？以下是道道个人成长平台开展的教培机构服务评价征集计划，参加后完整回答如下问题（大概2分钟），后续即可得到一份《中学生教培机构服务评价数据分析报告》。请根据真实意愿回答就好！',
    isJumpQues: true,
  },
  {
    title: '您孩子培训的科目有？',
    id: 78,
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
    title: '参加补习班后,您孩子的学习成绩有明显提升。',
    id: 79,
    choose: [
      {
        label: '无明显提升',
        value: '无明显提升',
      },
      {
        label: '不确定',
        value: '不确定',
      },
      {
        label: '有小幅提升',
        value: '有小幅提升',
      },
      {
        label: '有大幅提升',
        value: '有大幅提升',
      },
    ],
    value: '',
    type: 'select',
    quesType: '30,200',
  },
  {
    title: '最值得您推荐的教培机构是？',
    id: 80,
    choose: [],
    value: '',
    type: 'input',
    quesType: '30,200',
  },
  {
    title: '您孩子选择了教培机构的哪些服务项目？',
    id: 81,
    choose: [],
    value: '',
    type: 'input',
    quesType: '30,200',
  },
  {
    title: '您认为最值得推荐的理由是什么？',
    id: 82,
    choose: [],
    value: '',
    type: 'textarea',
    quesType: '30,200',
    maxLength: 600,
  },
  {
    title: '您孩子没有参加教培机构的原因是什么？',
    id: 83,
    choose: [],
    value: '',
    type: 'textarea',
    quesType: '30,200',
  },
];
export default data;
