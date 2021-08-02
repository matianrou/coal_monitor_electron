<!-- 企业信息 组件 -->
<template>
  <div>
    <ul class="enterprisedata">
      <p>企业信息</p>
      <li>
        <span>企业名称：</span>
        <span>{{corpData.corpName}}</span>
      </li>
      <li>
        <span>企业类型：</span>
        <span>{{corpData.corpTypeName}}</span>
      </li>
      <li>
        <span>所在区域：</span>
        <span>{{corpData.corpCountryName}}</span>
      </li>
      <li>
        <span>经营地址：</span>
        <span>{{corpData.address}}</span>
      </li>
      <li>
        <span>负&nbsp;&nbsp;责&nbsp;&nbsp;人：</span>
        <span>{{corpData.legalName}}</span>
      </li>
      <li>
        <span>联系电话：</span>
        <span>{{corpData.tel}}</span>
      </li>
      <!-- <li style="display: none;">
        <tr>
          <td colspan="4" style="height:20px;">
            <input type="hidden" id="hid_curr_corp_id" value="{corpId}" />
            <input type="hidden" id="hid_curr_plan_id" value="{planId}" />
            <input type="hidden" id="hid_curr_case_id" value="{caseId}" />
            <input type="hidden" id="hid_curr_case_type" value="{caseType}" />
          </td>
        </tr>
      </li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: "OrgInformation",
  props: {
    corpData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.enterprisedata {
  width: 100%;
  height: 180px;
  border-collapse: collapse;
  background: #fff;
  color: #000;
  border-radius: 10px;
  margin: 0px;
  padding: 0px;
  li {
    width: 50%;
    height: 45px;
    line-height: 45px;
    display: flex;
    float: left;
    border-bottom: 1px solid #ccc;
    text-indent: 30px;
    font-size: 18px;
  }
  li span:nth-child(2) {
    text-indent: 0;
  }
  p {
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-indent: 30px;
    color: #fff;
    font-size: 20px;
    background: #4f83e9;
    margin: 0px;
  }
}
</style>
