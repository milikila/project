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
              }, 'Delete')
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
          name: 'Jon Snow'
        }
      ]
    }
  },
  methods: {
    remove (index) {
      // this.data6.splice(index, 1)
    }
  }
}
</script>
<style scoped>
Table {
  width: 90%;
  display: flex;
  margin-left: 20px;
}
</style>
