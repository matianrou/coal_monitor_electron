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
        name: '责令撤出作业人员命令书',
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
        name: '查封(扣押)决定书',
        page: 'let110'
      },
      {
        id: '45',
        name: '延长查封（扣押）期限决定书',
        page: 'let1100'
      },
      {
        id: '46',
        name: '查封(扣押)处理决定书',
        page: 'let1101'
      },
      {
        id: '56',
        name: '停供电(停供民用爆炸物品)决定书',
        page: 'let111'
      },
      {
        id: '37',
        name: '停供电(停供民用爆炸物品)函告书',
        page: 'let112'
      },
      {
        id: '38',
        name: '解除停供电(停供民用爆炸物品)通知书',
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
        id: '14',
        name: '案件结案报告',
        page: 'let213'
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
      }
    ],
    monitorPaperType: [
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
        name: '检查方案(复查)',
        page: 'let103'
      },
      {
        id: '13',
        name: '复查意见书',
        page: 'let104'
      },
      {
        id: '1111',
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
        name: '查封(扣押)决定书',
        page: 'let110'
      },
      {
        id: '34',
        name: '解除查封(扣押)决定书',
        page: 'let111'
      },
      {
        id: '37',
        name: '停供电(停供民用爆炸物品)通知书',
        page: 'let112'
      },
      {
        id: '38',
        name: '解除停供电(停供民用爆炸物品)通知书',
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
      {
        id: '36',
        name: '案件处理呈报书',
        page: 'let203'
      },
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
        id: '39',
        name: '行政决定履行催告书',
        page: 'let208'
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
        id: '11111111',
        name: '罚款收缴',
        page: 'let212'
      },
      {
        id: '14',
        name: '案件结案报告',
        page: 'let213'
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
        id: '18',
        name: '强制执行申请书',
        page: 'let301'
      },
      {
        id: '10',
        name: '行政复议申请笔录',
        page: 'let302'
      },
      {
        id: '41',
        name: '不予受理行政复议申请决定书',
        page: 'let303'
      },
      {
        id: '11',
        name: '行政复议调查笔录',
        page: 'let304'
      },
      {
        id: '12',
        name: '行政复议决定书',
        page: 'let305'
      },
      {
        id: '35',
        name: '移送案件呈报书',
        page: 'let400'
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
        id: '21',
        name: '影音证据',
        page: 'let406'
      },
    ]
  }
}
