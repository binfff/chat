<template>
    <div class="comm_table">
        <el-table :data="tableData" style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
            <el-table-column v-for="(item, index) in columList" :key="index" :prop="item.key" :label="item.label"
                align="center" :sortable="item.sortable" :width="item.width">
            </el-table-column>
            <el-table-column v-if="$route.path == '/supplier_management'" label="历史查询" width="100">
                <template slot-scope="scope">
                    <span @click="ViewReport(scope.row)">月报表</span>
                </template>
            </el-table-column>
            <el-table-column v-if="$route.path == '/job_data_management'" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button @click="lookOver(scope.row,false)" type="text" size="small">查看</el-button>
                    <el-button @click="lookOver(scope.row,true)" type="text" size="small">打印</el-button>
                    <el-button @click="deleteRow(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120" v-if="$route.path != '/job_data_management'">
                <template slot-scope="scope">
                    <el-button @click="openUpdate(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="deleteRow(scope.row)" type="text" size="small">删除</el-button>
                    <el-button v-if="$route.path == '/reservoir_area_management'" @click="deleteRow(scope.row)" type="text" size="small">遥控</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
            :page-sizes="[10, 20, 50, 100]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'comm_table',
    data() {
        return {
            tableData: [],
            total: 0,
            pageSize: 10,
            pageNum: 1
        }
    },
    watch: {
        tableData(val) {
            this.total = val.length
        }
    },
    mounted() {
        console.log(this.$route.path)
    },
    props: ['columList'],
    methods: {
        ViewReport(row) {
            this.$emit('ViewReport', row)
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.$emit('changeData', { pageSize: this.pageSize, pageNum: this.pageNum })
        },
        lookOver(row,show){
        this.$emit('lookOver',{data:row,showS:show})
        },
        handleCurrentChange(val) {
            this.pageNum = val;
            this.$emit('changeData', { pageSize: this.pageSize, pageNum: this.pageNum })
        },
        //获取表格数据
        setData(data) {
            this.tableData = data
        },
        //打开编辑表单
        openUpdate(row) {
            let params = {
                title: '编辑',
                data: row
            }
            this.$emit('operation', params)
        },
        //删除
        deleteRow(row) {
            this.$confirm('确认删除此条记录吗？</br>删除记录后，与此相关的一切信息都将被删除', '删除信息', {
                dangerouslyUseHTMLString: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(() => {
                this.$emit('deleteRow', row)
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });;
        },
    }
};
</script>
<style scoped lang="scss">
.el-pagination {
    text-align: right;
}
</style>
