// 码表仓库
export default {
  state: {
    supervisionPaperType: [ // 监管文书编号及页面对应
      {
        id: '22',
        name: '检查方案',
        page: 'let100',
      },
      {
        id: '1',
        name: '现场检查记录',
        page: 'let101'
      },
      {
        id: '2',
        name: '现场处理决定书',
        page: 'let102'
      },
      {
        id: '13',
        name: '复查意见书',
        page: 'let104'
      },
      {
        id: '3',
        name: '撤出作业人员命令书',
        page: 'let106'
      },
      {
        id: '23',
        name: '抽样取证通知书',
        page: 'let107'
      },
      {
        id: '25',
        name: '先行登记保存证据通知书',
        page: 'let108'
      },
      {
        id: '27',
        name: '先行登记保存证据处理决定书',
        page: 'let109'
      },
      {
        id: '32',
        name: '查封（扣押）决定书',
        page: 'let110'
      },
      {
        id: '45',
        name: '延长查封（扣押）期限决定书',
        page: 'let114'
      },
      {
        id: '46',
        name: '查封（扣押）处理决定书',
        page: 'let115'
      },
      {
        id: '56',
        name: '停供电（停供民用爆炸物品）决定书',
        page: 'let111'
      },
      {
        id: '37',
        name: '停供电（停供民用爆炸物品）函告书',
        page: 'let112'
      },
      {
        id: '38',
        name: '解除停供电（停供民用爆炸物品）通知书',
        page: 'let113'
      },
      {
        id: '4',
        name: '立案决定书',
        page: 'let201'
      },
      {
        id: '5',
        name: '调查询问笔录',
        page: 'let202'
      },
      {
        id: '47',
        name: '行政执法决定法制审核意见书',
        page: 'let203'
      },
      {
        id: '48',
        name: '集体讨论记录',
        page: 'let215'
      },
      {
        id: '36',
        name: '案件处理呈报书',
        page: 'let216'
      },
      {
        id: '6',
        name: '行政处罚告知书',
        page: 'let204'
      },
      {
        id: '8',
        name: '行政处罚决定书',
        page: 'let206'
      },
      {
        id: '9',
        name: '送达收执',
        page: 'let207'
      },
      {
        id: '57',
        name: '询问通知书',
        page: 'let217'
      },
      {
        id: '30',
        name: '陈述、申辩笔录',
        page: 'let205'
      },
      {
        id: '28',
        name: '听证通知书',
        page: 'let209'
      },
      {
        id: '29',
        name: '不予受理听证申请通知书',
        page: 'let210'
      },
      {
        id: '7',
        name: '听证笔录',
        page: 'let211'
      },
      {
        id: '49',
        name: '听证会报告书',
        page: 'let218'
      },
      {
        id: '50',
        name: '罚款缴纳催告书',
        page: 'let212'
      },
      {
        id: '51',
        name: '加处罚款决定书',
        page: 'let220'
      },
      {
        id: '52',
        name: '延期（分期）缴纳罚款决定书',
        page: 'let219'
      },
      {
        id: '15',
        name: '执法案卷（首页）及目录',
        page: 'let214'
      },
      {
        id: '53',
        name: '行政强制执行事先催告书',
        page: 'let309'
      },
      {
        id: '18',
        name: '强制执行申请书',
        page: 'let301'
      },
      {
        id: '54',
        name: '行政执法有关事项审批报告',
        page: 'let310'
      },
      {
        id: '19',
        name: '移送书',
        page: 'let401'
      },
      {
        id: '20',
        name: '涉嫌犯罪案件移送书',
        page: 'let402'
      },
      {
        id: '55',
        name: '鉴定委托书',
        page: 'let406'
      },
      {
        id: '14',
        name: '案件结案报告',
        page: 'let213'
      },
    ],
    monitorPaperType: [//监察文书编号及页面对应
      {
        id: '22',
        name: '检查方案',
        page: 'let100'
      },
      {
        id: '1',
        name: '现场检查笔录',
        page: 'let101'
      },
      {
        id: '2',
        name: '现场处理决定书',
        page: 'let102'
      },
      {
        id: '42',
        name: '检查方案（复查）',
        page: 'let103'
      },
      {
        id: '13',
        name: '复查意见书',
        page: 'let104'
      },
      {
        id: '44',
        name: '隐患整改',
        page: 'let105'
      },
      {
        id: '3',
        name: '撤出作业人员命令书',
        page: 'let106'
      },
      {
        id: '23',
        name: '抽样取证通知书',
        page: 'let107'
      },
      {
        id: '25',
        name: '先行登记保存证据通知书',
        page: 'let108'
      },
      {
        id: '27',
        name: '先行登记保存证据处理决定书',
        page: 'let109'
      },
      {
        id: '32',
        name: '查封（扣押）决定书',
        page: 'let110'
      },
      {
        id: '46',
        name: '延长查封（扣押）期限决定书',
        page: 'let114'
      },
      {
        id: '47',
        name: '查封（扣押）处理决定书',
        page: 'let115'
      },
      // 2022.1.1去掉
      // { 
      //   id: '34',
      //   name: '解除查封（扣押）决定书',
      //   page: 'let111'
      // },
      {
        id: '48',
        name: '停供电（停供民用爆炸物品）决定书',
        page: 'let111'
      },
      {
        id: '37',
        name: '停供电（停供民用爆炸物品）通知书',
        page: 'let112'
      },
      {
        id: '38',
        name: '解除停供电（停供民用爆炸物品）通知书',
        page: 'let113'
      },
      {
        id: '4',
        name: '立案决定书',
        page: 'let201'
      },
      {
        id: '5',
        name: '调查取证笔录',
        page: 'let202'
      },
      // 2022.1.1去掉
      // {
      //   id: '36',
      //   name: '案件处理呈报书',
      //   page: 'let203'
      // },
      {
        id: '6',
        name: '行政处罚告知书',
        page: 'let204'
      },
      {
        id: '30',
        name: '陈述、申辩笔录',
        page: 'let205'
      },
      {
        id: '49',
        name: '行政执法决定法制审核意见书',
        page: 'let215'
      },
      {
        id: '36',
        name: '案件处理呈报书',
        page: 'let203'
      },
      {
        id: '50',
        name: '集体讨论记录',
        page: 'let216'
      },
      {
        id: '8',
        name: '行政处罚决定书',
        page: 'let206'
      },
      {
        id: '9',
        name: '送达收执',
        page: 'let207'
      },
      // 2022.1.1去掉
      // {
      //   id: '39',
      //   name: '行政决定履行催告书',
      //   page: 'let208'
      // },
      {
        id: '28',
        name: '听证通知书',
        page: 'let209'
      },
      {
        id: '29',
        name: '不予受理听证申请通知书',
        page: 'let210'
      },
      {
        id: '7',
        name: '听证笔录',
        page: 'let211'
      },
      {
        id: '51',
        name: '罚款缴纳催告书',
        page: 'let217'
      },
      {
        id: '52',
        name: '加处罚款决定书',
        page: 'let218'
      },
      {
        id: '53',
        name: '延期（分期）缴纳罚款决定书',
        page: 'let219'
      },
      {
        id: '15',
        name: '执法案卷（首页）及目录',
        page: 'let214'
      },
      {
        id: '31',
        name: '执法案件公开裁定记录',
        page: 'let300'
      },
      {
        id: '54',
        name: '行政强制执行事先催告书',
        page: 'let309'
      },
      {
        id: '18',
        name: '强制执行申请书',
        page: 'let301'
      },
      // 2022/1/1去掉
      // {
      //   id: '10',
      //   name: '行政复议申请笔录',
      //   page: 'let302'
      // },
      // {
      //   id: '41',
      //   name: '不予受理行政复议申请决定书',
      //   page: 'let303'
      // },
      // {
      //   id: '11',
      //   name: '行政复议调查笔录',
      //   page: 'let304'
      // },
      // {
      //   id: '12',
      //   name: '行政复议决定书',
      //   page: 'let305'
      // },
      // {
      //   id: '35',
      //   name: '移送案件呈报书',
      //   page: 'let400'
      // },
      {
        id: '19',
        name: '移送书',
        page: 'let401'
      },
      {
        id: '20',
        name: '涉嫌犯罪案件移送书',
        page: 'let402'
      },
      {
        id: '55',
        name: '行政执法有关事项审批报告',
        page: 'let408'
      },
      {
        id: '21',
        name: '影音证据',
        page: 'let406'
      },
      {
        id: '45',
        name: '监察执法报告',
        page: 'let407'
      },
      {
        id: '14',
        name: '案件结案报告',
        page: 'let213'
      },
      {
        id: '43',
        name: '罚款收缴',
        page: 'let212'
      },
    ],
    // 意见建议书文书号码表
    opinionSuggestionPaperType: [
      {
        id: '15',
        name: '执法案卷（首页）及目录',
        page: 'let214'
      },
      {
        id: '16',
        name: '加强和改善安全监管建议书',
        page: 'let501'
      },
      {
        id: '17',
        name: '加强和改善安全管理意见书',
        page: 'let502'
      },
    ],
    // 监察有文书号的文书及对应字段
    monitorPaperNumberType: [
      {
        docTypeNo: '2', // 现场处理决定书let102
        docString: '处',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '13', // 复查意见书let104
        docString: '复',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '3', // 撤出作业人员命令书let106
        docString: '撤',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '23', // 抽样取证通知书let107
        docString: '抽',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '25', // 先行登记保存证据通知书let108
        docString: '保',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '27', // 先行登记保存证据处理决定书let109
        docString: '保处',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '32', // 查封（扣押）决定书let110
        selectedType: '查封',
        docString: '查',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx3', 'cellIdx4']
      },
      {
        docTypeNo: '32', // 查封（扣押）决定书let110
        selectedType: '扣押',
        docString: '扣',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx3', 'cellIdx4']
      },
      {
        docTypeNo: '46', // 延长查封（扣押）期限决定书let114
        selectedType: '查封',
        docString: '延查',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '46', // 延长查封（扣押）期限决定书let114
        selectedType: '扣押',
        docString: '延扣',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '47', // 查封（扣押）处理决定书let115
        selectedType: '查封',
        docString: '查处',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '47', // 查封（扣押）处理决定书let115
        selectedType: '扣押',
        docString: '扣处',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '34', // 解除查封（扣押）决定书let111
        selectedType: '查封',
        docString: '解查',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '34', // 解除查封（扣押）决定书
        selectedType: '扣押',
        docString: '解扣',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '48', // 停供电(停供民用爆炸物品)决定书let111
        docString: '停决',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '37', // 停供电（停供民用爆炸物品）通知书let112
        docString: '停',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx3', 'cellIdx4']
      },
      {
        docTypeNo: '38', // 解除停供电（停供民用爆炸物品）通知书let113
        docString: '解停',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx3', 'cellIdx4']
      },
      {
        docTypeNo: '4', // 立案决定书let201
        docString: '立',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '6', // 行政处罚告知书let204
        docString: '告',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '8', // 行政处罚决定书let206
        docString: '罚',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '9', // 送达收执let207
        docString: '送',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '39', // 行政决定履行催告书let208
        docString: '催',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '28', // 听证通知书let209
        docString: '听',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '29', // 不予受理听证申请通知书let210
        docString: '不听',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '51', // 罚款缴纳催告书let217
        docString: '催缴',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '52', // 加处罚款决定书let218
        docString: '加罚',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '53', // 延期（分期）缴纳罚款决定书let219
        docString: '缴决',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx3', 'cellIdx4']
      },
      {
        docTypeNo: '54', // 行政强制执行事先催告书let309
        docString: '催告',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '18', // 强制执行申请书let301
        docString: '执',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '41', // 不予受理行政复议申请决定书let303
        docString: '复不受',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '12', // 行政复议决定书let305
        docString: '复决',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '19', // 移送书let401
        docString: '移',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '20', // 涉嫌犯罪案件移送书let402
        docString: '涉',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
    ],
    // 监管有文书号的文书及对应字段
    supervisionPaperNumberType: [
      {
        docTypeNo: '2', // 现场处理决定书let102
        docString: '处',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '13', // 复查意见书let104
        docString: '复',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '3', // 撤出作业人员命令书let106
        docString: '撤',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '23', // 抽样取证通知书let107
        docString: '抽',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '25', // 先行登记保存证据通知书let108
        docString: '保',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '27', // 先行登记保存证据处理决定书let109
        docString: '保处',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '32', // 查封（扣押）决定书let110
        selectedType: '查封',
        docString: '查',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '32', // 查封（扣押）决定书let110
        selectedType: '扣押',
        docString: '扣',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '45', // 延长查封（扣押）期限决定书let114
        selectedType: '查封',
        docString: '延查',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '45', // 延长查封（扣押）期限决定书let114
        selectedType: '扣押',
        docString: '延扣',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '46', // 查封（扣押）处理决定书let115
        selectedType: '查封',
        docString: '查处',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '46', // 查封（扣押）处理决定书let115
        selectedType: '扣押',
        docString: '扣处',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '34', // 解除查封（扣押）决定书let111
        selectedType: '查封',
        docString: '解查',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '34', // 解除查封（扣押）决定书
        selectedType: '扣押',
        docString: '解扣',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '56', // 停供电(停供民用爆炸物品)决定书let111
        docString: '停决',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '37', // 停供电（停供民用爆炸物品）通知书let112
        docString: '停',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx3', 'cellIdx4']
      },
      {
        docTypeNo: '38', // 解除停供电（停供民用爆炸物品）通知书let113
        docString: '解停',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx4', 'cellIdx5']
      },
      {
        docTypeNo: '4', // 立案决定书let201
        docString: '立',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '6', // 行政处罚告知书let204
        docString: '告',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '8', // 行政处罚决定书let206
        docString: '罚',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '9', // 送达收执let207
        docString: '送',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '39', // 行政决定履行催告书let208
        docString: '催',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '28', // 听证通知书let209
        docString: '听',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '29', // 不予受理听证申请通知书let210
        docString: '不听',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '50', // 罚款缴纳催告书let217
        docString: '催缴',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '51', // 加处罚款决定书let218
        docString: '加罚',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '52', // 延期（分期）缴纳罚款决定书let219
        docString: '缴决',
        paperNumberFields: ['cellIdx1', 'cellIdx2', 'cellIdx3', 'cellIdx4']
      },
      {
        docTypeNo: '53', // 行政强制执行事先催告书let309
        docString: '催告',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '18', // 强制执行申请书let301
        docString: '执',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '41', // 不予受理行政复议申请决定书let303
        docString: '复不受',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '12', // 行政复议决定书let305
        docString: '复决',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '19', // 移送书let401
        docString: '移',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
      {
        docTypeNo: '20', // 涉嫌犯罪案件移送书let402
        docString: '涉',
        paperNumberFields: ['cellIdx0', 'cellIdx1', 'cellIdx2', 'cellIdx3']
      },
    ],
    // 监察有落款的文书field为对应文书中落款字段
    monitorInscribe: [
      {
        docTypeNo: '2',
        name: '现场处理决定书',
        field: 'cellIdx15'
      },
      {
        docTypeNo: '13',
        name: '复查意见书',
        field: 'cellIdx23'
      },
      {
        docTypeNo: '3',
        name: '撤出作业人员命令书',
        field: 'cellIdx28'
      },
      {
        docTypeNo: '23',
        name: '抽样取证通知书',
        field: 'cellIdx23'
      },
      {
        docTypeNo: '25',
        name: '先行登记保存证据通知书',
        field: 'cellIdx22'
      },
      {
        docTypeNo: '27',
        name: '先行登记保存证据处理决定书',
        field: 'cellIdx18'
      },
      {
        docTypeNo: '32',
        name: '查封（扣押）决定书',
        field: 'cellIdx19'
      },
      {
        docTypeNo: '46',
        name: '延长查封（扣押）期限决定书',
        field: 'cellIdx26'
      },
      {
        docTypeNo: '47',
        name: '查封（扣押）处理决定书',
        field: 'cellIdx28'
      },
      {
        docTypeNo: '48',
        name: '停供电（停供民用爆炸物品）决定书',
        field: 'cellIdx21'
      },
      {
        docTypeNo: '37',
        name: '停供电（停供民用爆炸物品）通知书',
        field: 'cellIdx20'
      },
      {
        docTypeNo: '38',
        name: '解除停供电（停供民用爆炸物品）通知书',
        field: 'cellIdx17'
      },
      {
        docTypeNo: '4',
        name: '立案决定书',
        field: 'cellIdx14'
      },
      {
        docTypeNo: '6',
        name: '行政处罚告知书',
        field: 'cellIdx20'
      },
      {
        docTypeNo: '8',
        name: '行政处罚决定书',
        field: 'cellIdx20'
      },
      {
        docTypeNo: '9',
        name: '送达收执',
        field: 'cellIdx13'
      },
      {
        docTypeNo: '28',
        name: '听证通知书',
        field: 'cellIdx37'
      },
      {
        docTypeNo: '29',
        name: '不予受理听证申请通知书',
        field: 'cellIdx19'
      },
      {
        docTypeNo: '51',
        name: '罚款缴纳催告书',
        field: 'cellIdx26'
      },
      {
        docTypeNo: '52',
        name: '加处罚款决定书',
        field: 'cellIdx35'
      },
      {
        docTypeNo: '53',
        name: '延期（分期）缴纳罚款决定书',
        field: 'cellIdx38'
      },
      {
        docTypeNo: '54',
        name: '行政强制执行事先催告书',
        field: 'cellIdx28'
      },
      {
        docTypeNo: '18',
        name: '强制执行申请书',
        field: 'cellIdx33'
      },
      {
        docTypeNo: '19',
        name: '移送书',
        field: 'cellIdx22'
      },
      {
        docTypeNo: '20',
        name: '涉嫌犯罪案件移送书',
        field: 'cellIdx25'
      },
      {
        docTypeNo: '16',
        name: '加强和改善安全监管建议书',
        field: 'cellIdx18'
      },
      {
        docTypeNo: '17',
        name: '加强和改善安全管理意见书',
        field: 'cellIdx17'
      },
    ],
    // 监管有落款的文书
    supervisionInscribe: [
      {
        docTypeNo: '2',
        name: '现场处理决定书',
        field: 'cellIdx18'
      },
      {
        docTypeNo: '13',
        name: '复查意见书',
        field: 'cellIdx24'
      },
      {
        docTypeNo: '3',
        name: '撤出作业人员命令书',
        field: 'cellIdx30'
      },
      {
        docTypeNo: '23',
        name: '抽样取证通知书',
        field: 'cellIdx23'
      },
      {
        docTypeNo: '25',
        name: '先行登记保存证据通知书',
        field: 'cellIdx22'
      },
      {
        docTypeNo: '27',
        name: '先行登记保存证据处理决定书',
        field: 'cellIdx19'
      },
      {
        docTypeNo: '32',
        name: '查封（扣押）决定书',
        field: 'cellIdx22'
      },
      {
        docTypeNo: '45',
        name: '延长查封（扣押）期限决定书',
        field: 'cellIdx26'
      },
      {
        docTypeNo: '46',
        name: '查封（扣押）处理决定书',
        field: 'cellIdx28'
      },
      {
        docTypeNo: '56',
        name: '停供电（停供民用爆炸物品）决定书',
        field: 'cellIdx21'
      },
      {
        docTypeNo: '37',
        name: '停供电（停供民用爆炸物品）函告书',
        field: 'cellIdx16'
      },
      {
        docTypeNo: '38',
        name: '解除停供电（停供民用爆炸物品）通知书',
        field: 'cellIdx16'
      },
      {
        docTypeNo: '4',
        name: '立案决定书',
        field: 'cellIdx15'
      },
      {
        docTypeNo: '6',
        name: '行政处罚告知书',
        field: 'cellIdx20'
      },
      {
        docTypeNo: '8',
        name: '行政处罚决定书',
        field: 'cellIdx20'
      },
      {
        docTypeNo: '9',
        name: '送达收执',
        field: 'cellIdx13'
      },
      {
        docTypeNo: '57',
        name: '询问通知书',
        field: 'cellIdx20'
      },
      {
        docTypeNo: '28',
        name: '听证通知书',
        field: 'cellIdx32'
      },
      {
        docTypeNo: '29',
        name: '不予受理听证申请通知书',
        field: 'cellIdx16'
      },
      {
        docTypeNo: '50',
        name: '罚款缴纳催告书',
        field: 'cellIdx26'
      },
      {
        docTypeNo: '51',
        name: '加处罚款决定书',
        field: 'cellIdx35'
      },
      {
        docTypeNo: '52',
        name: '延期（分期）缴纳罚款决定书',
        field: 'cellIdx38'
      },
      {
        docTypeNo: '53',
        name: '行政强制执行事先催告书',
        field: 'cellIdx28'
      },
      {
        docTypeNo: '18',
        name: '强制执行申请书',
        field: 'cellIdx30'
      },
      {
        docTypeNo: '19',
        name: '移送书',
        field: 'cellIdx22'
      },
      {
        docTypeNo: '20',
        name: '涉嫌犯罪案件移送书',
        field: 'cellIdx27'
      },
      {
        docTypeNo: '55',
        name: '鉴定委托书',
        field: 'cellIdx13'
      },
    ],
  }
}
