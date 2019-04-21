<template>
  <div id="result-manage">
    <!-- <div class="result-manage-add">
      <Button type="info">增加</Button>
      <Input search enter-button placeholder="Enter something..." />
    </div> -->
    <Table border ref="selection" :columns="columns7" :data="data6"></Table>
  </div>
</template>

<script>
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
                    this.show(params.index)
                  }
                }
              }, '修改'),
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
              }, '删除')
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
    remove (index) {
      this.data6.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
