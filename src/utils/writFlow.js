import store from '@/store'
const monitorWritFlow = {
  writFlow: resolve => { require(["@/views/writ-flow/monitor/writ-flow"], function(writFlow) { resolve(writFlow);});},
}
const supervisionWritFlow = {
  writFlow: resolve => { require(["@/views/writ-flow/supervision/writ-flow"], function(writFlow) { resolve(writFlow);});},
}
export const writFlow = store.state.DBName === 'CoalSupervisionDB' ? supervisionWritFlow : monitorWritFlow
