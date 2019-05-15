<template>
  <div class="auditing-loading">
    <Table border ref="selection" :columns="columns7" :data="data6"></Table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      columns7: [
        {
          title: '名称',
          key: '名称',
          width: 300,
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
          title: 'Button',
          key: 'button',
          width: 200,
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
                    this.auditing(params.index)
                  }
                }
              }, '审核')
            ])
          }
        }
      ],
      data6: [
        {
          name: '1'
        },
        {
          name: '2'
        },
        {
          name: '3'
        }
      ]
    }
  },
  methods: {
    auditing () {
      axios.post('http://localhost/project/checkProject').then((res) => {
        console.log('接口返回成功')
      }).catch((res) => {
        console.log('接口返回错误')
      })
    }
  }
}
</script>

<style>
.auditing {
  width: 100%;
}
</style>
