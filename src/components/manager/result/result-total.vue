<template>
  <div class="histogram">
    <ve-histogram :data="chartData" width="800px" height="400px"></ve-histogram>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      chartData: {
        columns: ['名称', '数量'],
        rows: []
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.post('http://localhost/statistics/getData').then((res) => {
        if (res.data.message) {
          let arryList = []
          let totalList = []
          for (var i = 0; i < res.data.data.names.length; i++) {
            arryList.push(res.data.data.names[i])
          }
          for (var j = 0; j < res.data.data.totals.length; j++) {
            arryList.push(res.data.data.totals[j])
          }
          for (var z = 0; z < arryList.length / 2; z++) {
            totalList.push({'名称': arryList[z], '数量': arryList[arryList.length / 2 + z]})
          }
          this.chartData.rows = totalList
        } else {
          this.$Message.info('接口成功，但返回值出错')
        }
      }).catch((res) => {
        this.$Message.info('接口错误')
      })
    }
  }
}
</script>
<style scoped>
</style>
