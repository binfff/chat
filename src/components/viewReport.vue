<template>
  <div class="viewReport">
    <div class="supplier">
      <el-row>
        <el-col :span="6">
          <span>取货单号：</span>
          <span>{{ supplierInfo.PickupNo }}</span>
        </el-col>
        <el-col :span="6">
          <span>状态：</span>
          <span>{{ supplierInfo.status }}</span>
        </el-col>
        <el-col :span="6">
          <span>销售单号：</span>
          <span>{{ supplierInfo.SalesOrderNo }}</span>
        </el-col>
        <el-col :span="6">
          <span>子订单：</span>
          <span>{{ supplierInfo.SubOrder }}</span>
        </el-col>
      </el-row>
    </div>
    <div>
      <img src="@/assets/images/u486.png" style="width: 100%;" alt="" srcset="">
      <el-table :data="tableData" border height="200" :summary-method="getSummaries" show-summary style="width: 100%;"
        :show-header="false">
        <el-table-column prop="id" label="ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="amount2" label="数值 2（元）">
        </el-table-column>
        <el-table-column prop="amount3" label="数值 3（元）">
        </el-table-column>
      </el-table>
    </div>
    <div>
      <h2 style="text-align: left;">历史订单</h2>
      <el-table :data="tableData" style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
        <el-table-column v-for="(item, index) in columList" :key="index" :prop="item.key" :label="item.label"
          align="center" :sortable="item.sortable" :width="item.width">
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-row>
        <el-col :span="24">
          <el-button type="primary" @click="exportFn()">导出</el-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-button @click="closeFn('ruleForm')">取消</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { viewReport } from '@/assets/js/columList/view_report.js';
export default {
  name: 'viewReport', //月报表
  data() {
    return {
      columList: viewReport,
      supplierInfo: {
        PickupNo: "1000000000",
        status: "已取货",
        SalesOrderNo: "1234123421",
        SubOrder: "3214321432"
      },
      tableData: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }]
    }
  },
  methods: {
    setData(data,row){
      this.supplierInfo=row
       this.tableData=data;
    },
    exportFn(){

    },
    closeFn(){
        this.$emit('close')
    }
  }
};
</script>
<style lang="scss" scoped>
.viewReport {
  max-height: 65vh;
  overflow-y: auto;

  div {
    margin-top: 20px;
  }
}
</style>
