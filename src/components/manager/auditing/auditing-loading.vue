<template>
  <div class="auditing-loading">
    <Table border ref="selection" :columns="columns7" :data="data6"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="data6.length" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
export default {
  data () {
    return {
      columns7: [
        {
          title: '名称',
          key: '名称',
          width: 100,
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: '介绍内容',
          key: '介绍内容',
          width: 300,
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.content)
            ])
          }
        },
        {
          title: '操作',
          key: 'button',
          width: 300,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.checkContent(params.index, params.contnt)
                  }
                }
              }, '审核通过'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.checkContent(params.index, params.contnt)
                  }
                }
              }, '审核不通过')
            ])
          }
        }
      ],
      data6: []
    }
  },
  created () {
    this.auditing()
  },
  methods: {
    auditing () {
      axios.post('http://localhost/project/getProjects').then((res) => {
        if (res.data.message === 'true') {
          let arrayList = []
          res.data.data.forEach((item) => {
            arrayList.push({ 'name': item.name, 'number': item.number, 'content': item.content, 'endDate': item.endDate, 'startDate': item.startDate, 'id': item.id })
          })
          this.data6 = arrayList
        }
      }).catch((res) => {
        this.$Message.info('接口错误')
      })
    },
    checkContent (index) {
      axios.post('http://localhost/project/checkProject', qs.stringify({
        id: this.data6[index].id,
        param: 1
      })).then((res) => {
        if (res.data.message === 'true') {
          this.$Message.info('操作成功')
        }
      })
    }
  },
  changePage () {
    this.tableData1 = this.data6
  }
}
</script>

<style>
.auditing-loading {
  margin-top: 30px;
}
</style>
