<template>
  <div v-show="showLine">
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>
<script>
require('echarts/lib/chart/pie')
// 引入提示框和图例组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
export default {
  data () {
    return {
      showLine: true
    }
  },
  mounted () {
    this.drawLine()
    console.log('1')
    this.showLine = true
  },
  updated () {
    // this.drawLine()
    this.showLine = true
    console.log('2')
  },
  watch: {
    showLine () {
      this.$nextTick(() => {
        // this.drawLine()
        console.log('3')
      })
    }
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      console.log('1', document.getElementById('myChart'))
      myChart.setOption({
        title: { text: '1' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>
