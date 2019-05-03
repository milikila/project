<template>
  <Table border ref="selection" :columns="columns7" :data="data6"></Table>
</template>
<script>
export default {
  data () {
    return {
      columns7: [
        {
          title: 'Name',
          key: 'name',
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
          title: 'Action',
          key: 'action',
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
                    this.show(params.index)
                  }
                }
              }, '详细信息'),
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
                    this.show(params.index)
                  }
                }
              }, '禁用'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '解除禁用')
            ])
          }
        }
      ],
      data6: [
        {
          name: 'John Brown'
        },
        {
          name: 'Jim Green'
        },
        {
          name: 'Joe Black'
        },
        {
          name: 'Jon Snow'
        }
      ]
    }
  },
  methods: {
    show (index) { // 显示用户的信息
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}`
      })
    },
    remove (index) {
      // this.data6.splice(index, 1)
    }
  }
}
</script>
<style scoped>
table {
  width: 90%;
  display: flex;
  margin-left: 20px;
}
</style>
