<template>
    <el-row :gutter="20">
        <el-col :span="12">
            <div id="main" style="width: 100%; height: 400px"></div>
        </el-col>
        <el-col :span="12">
            <div id="main2" style="width: 100%; height: 400px"></div>
        </el-col>
    </el-row>
</template>

<script>
// * 表示导入所有，as 别名
import * as echarts from "echarts";
export default {
    /**
     * vue组件 生命周期函数执行规则:
     *    vue生命周期created中启动异步任务，不会等待异步任务结果，在执行mounted生命周期函数，
     *    如果要在mounted生命周期使用数据，在mounted启动异步任务，接收数据处理后续操作
     */
    mounted() {
        this.drawBar()
        this.drawBar2(0)   // 初始化echarts
    },
    methods: {
        drawBar() {
            const echart = echarts.init(document.getElementById('main'))
            echart.setOption({
                title: {
                    text: '2022年产品销量',
                },
                legend: {
                    data: ['销量', '价格'],
                },
                xAxis: {
                    data: [
                        '衬衫',
                        '羊毛衫',
                        '雪纺衫',
                        '裤子',
                        '高跟鞋',
                        '袜子',
                    ],
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar', // 柱状图
                        data: [5, 20, 36, 10, 10, 20],
                    },
                    {
                        name: '价格',
                        type: 'bar', // 柱状图
                        data: [9.9, 26.9, 38, 35, 43, 58],
                    },
                ],
            })
        },
        drawBar2() {
            const echart = echarts.init(document.getElementById('main2'))
            echart.setOption({
                title: {
                    text: '2023年产品销量',
                },
                legend: {
                    data: ['销量'],
                },
                series: [
                    {
                        name: '销量',
                        type: 'pie', // 柱状图
                        data: [{name:'耐克',value:89},
                        {name:'安踏',value:44},
                        {name:'李宁',value:15},
                        {name:'斐乐',value:46},
                        {name:'北面',value:43},
                        {name:'特步',value:25}
                    ],
                        color: [
                            '#dd6b66',
                            '#759aa0',
                            '#e69d87',
                            '#8dc1a9',
                            '#ea7e53',
                            '#eedd78',
                        ]
                    },
                ],
            })
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
