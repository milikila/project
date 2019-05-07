<template>
  <Table border ref="selection" :columns="columns7" :data="data6"></Table>
</template>
<script>
import axios from 'axios'
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
                    this.disableUser(params.index)
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
                    this.noDisableNoUser(params.index)
                  }
                }
              }, '解除禁用')
            ])
          }
        }
      ],
      data6: []
    }
  },
  created () {
    this.userList()
  },
  methods: {
    userList () {
      axios.post('http://localhost/user/getUsers').then((res) => {
        if (res.data.message === 'true') {
          let arrayList = []
          // console.log(res.data.data)
          res.data.data.forEach((item, index, arr) => {
            arrayList.push({'name': item.username})
          })
          // console.log('2', arrayList)
          this.data6 = arrayList
        }
      }).catch((res) => {
        console.log('接口返回错误')
      })
    },
    disableUser (index) {
      console.log(index, this.data6[index].name)
      axios.post('http://localhost/user/disableUser', {
        username: this.data6[index].name
      }).then((res) => {
        console.log('1')
      }).catch((res) => {
        console.log('接口返回错误')
      })
    },
    noDisableNoUser (index) {
      axios.post('http://localhost/user/noDisableNoUser', {
        username: this.data6[index].name
      }).then((res) => {
        console.log('1')
      }).catch((res) => {
        console.log('接口返回错误')
      })
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
