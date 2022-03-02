<!-- 弹窗 企业详细信息 -->
<template>
  <el-dialog
    title="企业基本信息查看"
    :close-on-click-modal="false"
    :show-close="false"
    append-to-body
    :visible="visible"
    top="2vh"
    width="900px"
    class="org-info-detail-dialog">
    <div v-loading="loading" class="org-info-detail-main">
      <el-tabs>
        <el-tab-pane label="煤矿基本信息">
          <div class="org-detail-main-content">
            <div v-if="corpInfo" class="session-div">
              <div class="session-title">
                <span>{{ corpInfo.corpName || '' }}煤矿基本信息</span>
              </div>
              <div class="session-content">
                <el-row class="session-content-row">
                  <el-col
                    :span="24"
                    class="col-span"
                    :title="`煤矿名称: ${corpInfo.corpName || ''}`"
                  >
                    <span class="title">煤矿名称</span>
                    <span class="content">{{ corpInfo.corpName || '' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="24"
                    class="col-span"
                    :title="`煤矿地址: ${corpInfo.address || ''}`"
                  >
                    <span class="title">煤矿地址</span>
                    <span class="content">{{ corpInfo.address || '' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="24"
                    class="col-span"
                    :title="`所在区县: ${corpInfo.areaInfo || ''}`"
                  >
                    <span class="title">所在区县</span>
                    <span class="content">{{ corpInfo.areaInfo || '' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="24"
                    class="col-span"
                    :title="`上级企业名称: ${corpInfo.parentIdName || ''}`"
                  >
                    <span class="title">上级企业名称</span>
                    <span class="content">{{ corpInfo.parentIdName || '' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`主管政府部门级别: ${corpInfo.corpTypeName || ''}`"
                  >
                    <span class="title">主管政府部门级别</span>
                    <span class="content">{{ corpInfo.corpTypeName || '' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`许可证状态: ${corpInfo.xkzStatusNameZs || ''}`"
                  >
                    <span class="title">许可证状态</span>
                    <span class="content">{{ corpInfo.xkzStatusNameZs || '' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`法定代表人: ${corpInfo.legalName || ''}`"
                  >
                    <span class="title">法定代表人</span>
                    <span class="content">{{ corpInfo.legalName || '' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`法定代表电话: ${corpInfo.legalTel || ''}`"
                  >
                    <span class="title">法定代表电话</span>
                    <span class="content">{{ corpInfo.legalTel || '' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`煤矿类型: ${corpInfo.parentTypeName || ''}`"
                  >
                    <span class="title">煤矿类型</span>
                    <span class="content">{{ corpInfo.parentTypeName || '' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`经济类型: ${corpInfo.economyTypeName || ''}`"
                  >
                    <span class="title">经济类型</span>
                    <span class="content">{{ corpInfo.economyTypeName || '' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`质量标准化等级: ${corpInfo.standardClassName || ''}`"
                  >
                    <span class="title">质量标准化等级</span>
                    <span class="content">{{ corpInfo.standardClassName || '' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`允许最大采深（米）: ${corpInfo.ayxkcsxxbg || '0'}`"
                  >
                    <span class="title">允许最大采深（米）</span>
                    <span class="content">{{ corpInfo.ayxkcsxxbg || '0' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`矿井状况: ${corpInfo.mineStatusZsName || ''}`"
                  >
                    <span class="title">矿井状况</span>
                    <span class="content">{{ corpInfo.mineStatusZsName || '' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`矿井井型: ${corpInfo.mineClassName || ''}`"
                  >
                    <span class="title">矿井井型</span>
                    <span class="content">{{ corpInfo.mineClassName || '' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`设计生产能力（万吨）: ${corpInfo.designOutput || '0'}`"
                  >
                    <span class="title">设计生产能力（万吨）</span>
                    <span class="content">{{ corpInfo.designOutput || '0' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`核定产能(万吨/年): ${corpInfo.provedOutput || '0'}`"
                  >
                    <span class="title">核定产能(万吨/年)</span>
                    <span class="content">{{ corpInfo.provedOutput || '0' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`开拓方式: ${corpInfo.mineMinestyleName || ''}`"
                  >
                    <span class="title">开拓方式</span>
                    <span class="content">{{ corpInfo.mineMinestyleName || '' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                  >
                    <span class="title"> </span>
                    <span class="content"> </span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`开采类型: ${corpInfo.mineMinetypeName || ''}`"
                  >
                    <span class="title">开采类型</span>
                    <span class="content">{{ corpInfo.mineMinetypeName || '' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`运输方式: ${corpInfo.mineTransmitstyleName || ''}`"
                  >
                    <span class="title">运输方式</span>
                    <span class="content">{{ corpInfo.mineTransmitstyleName || '' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`供电方式: ${corpInfo.minePowerstyleName || ''}`"
                  >
                    <span class="title">供电方式</span>
                    <span class="content">{{ corpInfo.minePowerstyleName || '' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`通风方式: ${corpInfo.mineVentilatestyleName || ''}`"
                  >
                    <span class="title">通风方式</span>
                    <span class="content">{{ corpInfo.mineVentilatestyleName || '' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`主要灾害类型: ${corpInfo.mineGeohazardtypeName || ''}`"
                  >
                    <span class="title">主要灾害类型</span>
                    <span class="content">{{ corpInfo.mineGeohazardtypeName || '' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                  >
                    <span class="title"> </span>
                    <span class="content"> </span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`矿井地质类型: ${corpInfo.akjdzlxName || ''}`"
                  >
                    <span class="title">矿井地质类型</span>
                    <span class="content">{{ corpInfo.akjdzlxName || '' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`水文地质类型: ${corpInfo.hydrogeologicalTypeName || ''}`"
                  >
                    <span class="title">水文地质类型</span>
                    <span class="content">{{ corpInfo.hydrogeologicalTypeName || '' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`瓦斯等级: ${corpInfo.mineWsGradeName || ''}`"
                  >
                    <span class="title">瓦斯等级</span>
                    <span class="content">{{ corpInfo.mineWsGradeName || '' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`煤层自燃倾向性: ${corpInfo.mineFireName || ''}`"
                  >
                    <span class="title">煤层自燃倾向性</span>
                    <span class="content">{{ corpInfo.mineFireName || '' }}</span>
                  </el-col>
                </el-row>
                <el-row class="session-content-row" style="border-bottom: 1px solid #7DCEFD;">
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`煤尘爆炸性: ${corpInfo.grimeExplosiveName || ''}`"
                  >
                    <span class="title">煤尘爆炸性</span>
                    <span class="content">{{ corpInfo.grimeExplosiveName || '' }}</span>
                  </el-col>
                  <el-col
                    :span="12"
                    class="col-span"
                    :title="`是否有冲击地压: ${corpInfo.rockburstName || ''}`"
                  >
                    <span class="title">是否有冲击地压</span>
                    <span class="content">{{ corpInfo.rockburstName || '' }}</span>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="其他信息">
          <div class="org-detail-main-content">
            <div class="org-detail-table-main">
              <div class="session-title">
                <span>采煤工作面信息</span>
              </div>
              <el-table
                :data="zfCmgzmInfoList"
                style="width: 100%;"
                border
                :header-cell-style="{background: '#DEF3FF', color: '#606266'}">
                <el-table-column
                  prop="workfaceName"
                  label="工作面名称"
                  header-align="center"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="mineLayer"
                  header-align="center"
                  align="center"
                  label="开采煤层">
                </el-table-column>
                <el-table-column
                  prop="mineGatherstyleName"
                  header-align="center"
                  align="center"
                  label="采煤工艺">
                </el-table-column>
                <el-table-column
                  prop="mineTunnelsupporstyleName"
                  header-align="center"
                  align="center"
                  label="巷道支护方式">
                </el-table-column>
              </el-table>
            </div>
            <div class="org-detail-table-main">
              <div class="session-title">
                <span>掘进工作面信息</span>
              </div>
              <el-table
                :data="zfJjgzmInfoList"
                style="width: 100%;"
                border
                :header-cell-style="{background: '#DEF3FF', color: '#606266',}">
                <el-table-column
                  prop="workfaceName"
                  label="工作面名称"
                  header-align="center"
                  align="center">
                </el-table-column>
                <el-table-column
                  prop="mineTunnelGeotype"
                  header-align="center"
                  align="center"
                  label="开采煤层">
                </el-table-column>
                <el-table-column
                  prop="mineTunnelProcessName"
                  header-align="center"
                  align="center"
                  label="掘进方式">
                </el-table-column>
                <el-table-column
                  prop="mineTunnelsupporstyleName"
                  header-align="center"
                  align="center"
                  label="支护方式">
                </el-table-column>
              </el-table>
            </div>
            <div class="org-detail-table-main">
              <div class="session-title">
                <span>证照信息</span>
              </div>
              <el-table
                :data="zfZzInfoList"
                style="width: 100%;"
                border
                :header-cell-style="{background: '#DEF3FF', color: '#606266',}">
                <el-table-column
                  prop="credTypeName"
                  label="证照类型"
                  header-align="center"
                  align="center"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="credId"
                  header-align="center"
                  align="center"
                  label="证照编号">
                </el-table-column>
                <el-table-column
                  prop="effectiveTime"
                  header-align="center"
                  align="center"
                  label="生效时间"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="expireTime"
                  header-align="center"
                  align="center"
                  label="失效时间"
                  width="180">
                </el-table-column>
              </el-table>
            </div>
            <div class="org-detail-table-main">
              <div class="session-title">
                <span>从业人员统计信息（年报）</span>
              </div>
              <el-table
                :data="zfCyrytjInfoList"
                style="width: 100%;"
                border
                :header-cell-style="{background: '#DEF3FF', color: '#606266'}">
                <el-table-column
                  prop="reportYear"
                  label="报告年度"
                  header-align="center"
                  align="center" >
                </el-table-column>
                <el-table-column
                  prop="cyrytZs"
                  header-align="center"
                  align="center"
                  label="总数">
                </el-table-column>
                <el-table-column
                  prop="cyrytJxcyrs"
                  header-align="center"
                  align="center"
                  label="井下从业人数">
                </el-table-column>
                <el-table-column
                  prop="cyrytZzrs"
                  header-align="center"
                  align="center"
                  label="中专及以上人数">
                </el-table-column>
                <el-table-column
                  prop="cyrytGz"
                  header-align="center"
                  align="center"
                  label="高中">
                </el-table-column>
                <el-table-column
                  prop="cyrytCz"
                  header-align="center"
                  align="center"
                  label="初中">
                </el-table-column>
                <el-table-column
                  prop="cyrytCzyx"
                  header-align="center"
                  align="center"
                  label="初中以下">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="close">返回</el-button>
    </span>
  </el-dialog>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
export default {
  name: "OrgInfoDetail",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    corpData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      loading: false,
      DBName: this.$store.state.DBName,
      corpInfo: null,
      zfCmgzmInfoList: [], // 采煤工作面信息
      zfJjgzmInfoList: [], // 掘进工作面信息
      zfZzInfoList: [], // 证照信息
      zfCyrytjInfoList: [], // 从业人员统计信息（年报）
    };
  },
  async created() {
    await this.getData()
  },
  methods: {
    close () {
      this.$emit('close', {page: 'orgInfoDetail'})
    },
    async getData () {
      // 获取煤矿所有信息
      this.loading = true
      let corpId = this.corpData.corpId
	    // 企业基本信息
      let corpBase = await this.getDatabase('baseInfo')
      let corpBaseData = await corpBase.find(item => item.corpId === corpId && item.delFlag !== '1')
      // 采煤工作面信息
      let zfCmgzmInfo = await this.getDatabase('zfCmgzmInfo')
      let zfCmgzmInfoData = await zfCmgzmInfo.findAll(item => item.corpId === corpId && item.delFlag !== '1')
      // 掘进工作面信息
      let zfJjgzmInfo = await this.getDatabase('zfJjgzmInfo')
      let zfJjgzmInfoData = await zfJjgzmInfo.findAll(item => item.corpId === corpId && item.delFlag !== '1')
	    // 证照信息
      let zfZzInfo = await this.getDatabase('zfZzInfo')
      let zfZzInfoData = await zfZzInfo.findAll(item => item.corpId === corpId && item.delFlag !== '1')
	    // 从业人员信息
      let zfCyrytjInfo = await this.getDatabase('zfCyrytjInfo')
      let zfCyrytjInfoData = await zfCyrytjInfo.findAll(item => item.corpId === corpId && item.delFlag !== '1')
      // 需要验证：上级企业编码parentIdName,允许最大采深（米）ayxkcsxxbg,
      corpBaseData.areaInfo = `${corpBaseData.provinceName || ''}-${corpBaseData.cityName || ''}-${corpBaseData.countryName || ''}`
      this.corpInfo = corpBaseData
      this.zfCmgzmInfoList = zfCmgzmInfoData
      this.zfJjgzmInfoList = zfJjgzmInfoData
      this.zfZzInfoList = zfZzInfoData
      this.zfCyrytjInfoList = zfCyrytjInfoData
      this.loading = false
    }
  },
};
</script>

<style lang="scss" scoped>
.org-info-detail-main {
  .org-detail-main-content {
    height: 73vh;
    position: relative;
    overflow-y: auto;
    .session-title {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 20px;
    }
    .session-content {
      padding: 0px;
      // overflow: auto;
      font-size: 15px;
      .session-content-row {
        border-right: 1px solid #7DCEFD;
      }
      .col-span {
        // overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        display: flex;
        min-height: 40px;
        line-height: 40px;
        border-left: 1px solid #7DCEFD;
        border-top: 1px solid #7DCEFD;
      }
      .col-span-right{
        // overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        display: flex;
        min-height: 40px;
        line-height: 40px;
        border-left: 1px solid #7DCEFD;
        border-top: 1px solid #7DCEFD;
        border-bottom: 1px solid #7DCEFD;
        
      }
      .title {
        color: #606266;
        // font-size: 16px;
        font-weight: 500;
        display: flex;
        width: 160px;
        align-items: center;
        justify-content: center;
        background: #DEF3FF;
      }
      .content {
        display: inline-block;
        padding: 0 7px;
        flex: 1;
        width: 100%;
        color: #909399;
      }
      span {
        display: inline-block;
        // margin-left: 10px;
      }
    }
    .org-detail-table-main {
      margin-bottom: 15px;
    }
  }
}
.org-info-detail-dialog {
  /deep/ .el-dialog__body {
    padding: 0 20px;
  }
}
</style>