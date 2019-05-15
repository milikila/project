<template>
<div>
  <Table border ref="selection" :columns="columns7" :data="data6"></Table>
  <div class="login-content"  v-show="changeUserPsd">
    <div class="login-confirm-contents">
      <label class="login-label">修改用户名</label>
      <Input type="text" class="login-confirm-contents-text" v-model="changeUsername"/>
    </div>
    <div class="login-confirm-contents">
      <label class="login-label">修改密码</label>
      <Input type="password" class="login-confirm-contents-text" v-model="changePassword"/>
    </div>
    <div class="login-confirm-contents">
      <label class="login-label">修改年龄</label>
      <Input type="password" class="login-confirm-contents-text" v-model="changeAge"/>
    </div><div class="login-confirm-contents">
      <label class="login-label">修改地址</label>
      <Input type="password" class="login-confirm-contents-text" v-model="changeAddress"/>
    </div>
    <Button class="login-content-info-sucess" @click="showChangePage()" type="primary">保存</Button>
  </div>
  <div class="userList" v-show="showUserList">
    <div class="userContent">
      <div class="user-title">用户详细信息</div>
      <div class="user-list">
        <div class="user-list-title">用户名：</div>
        <div class="user-list-content">{{changeUsername}}</div>
      </div>
      <div class="user-list">
        <div class="user-list-title">密码：</div>
        <div class="user-list-content">{{changePassword}}</div>
      </div>
      <div class="user-list">
        <div class="user-list-title">年龄：</div>
        <div class="user-list-content">{{changeAge}}</div>
      </div>
      <div class="user-list">
        <div class="user-list-title">地址：</div>
        <div class="user-list-content">{{changeAddress}}</div>
      </div>
      <Button class="login-content-info-sucess" @click="close()" type="primary">关闭</Button>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  data () {
    return {
      showUserList: false,
      changeUserPsd: false,
      userId: 0,
      changeAddress: '', // 修改地址
      changeAge: '', // 修改年龄
      changeUsername: '', // 改变用户名称
      changePassword: '', // 改变用户密码
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
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.noDisableNoUser(params.index)
                  }
                }
              }, '解除禁用'),
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
                    this.userListSee(params.index)
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.changeUser(params.index)
                  }
                }
              }, '修改')
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
    changeUser (index) {
      this.changeAddress = this.data6[index].address
      this.changeAge = this.data6[index].age
      this.changePassword = this.data6[index].password
      this.changeUsername = this.data6[index].name
      this.changeUserPsd = true
      this.userId = this.data6[index].id
    },
    close () {
      this.showUserList = !this.showUserList
    },
    showChangePage () {
      this.changeUserList()
    },
    userListSee (index) {
      this.showUserList = true
      this.changeAddress = this.data6[index].address
      this.changeAge = this.data6[index].age
      this.changePassword = this.data6[index].password
      this.changeUsername = this.data6[index].name
    },
    changeUserList (index) {
      axios.post('http://localhost/user/updateUser',
        qs.stringify({
          username: this.changeUsername,
          password: this.changepassword,
          age: this.changeAge,
          address: this.changeAddress,
          id: this.userId,
          type: '1'
        })).then((res) => {
        if (res.data.message === 'true') {
          this.changeUserPsd = false
          this.userList()
        }
      }).catch((res) => {
        console.log('接口返回错误')
      })
    },
    userList () {
      axios.post('http://localhost/user/getUsers').then((res) => {
        if (res.data.message === 'true') {
          let arrayList = []
          // console.log(res.data.data)
          res.data.data.forEach((item, index, arr) => {
            arrayList.push({ 'name': item.username, 'id': item.id, 'password': item.password, 'address': item.address, 'age': item.age })
          })
          // console.log('2', arrayList)
          this.data6 = arrayList
        }
      }).catch((res) => {
        console.log('接口返回错误')
      })
    },
    disableUser (index) {
      console.log(index, this.data6[index])
      axios.post('http://localhost/user/disableUser', qs.stringify({
        id: this.data6[index].id
      })).then((res) => {
        console.log('1')
      }).catch((res) => {
        console.log('接口返回错误')
      })
    },
    noDisableNoUser (index) {
      axios.post('http://localhost/user/noDisableNoUser', qs.stringify({
        id: this.data6[index].id
      })).then((res) => {
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
.login-content,.userList {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  position: absolute;
  z-index: 1000000;
  background: rgba(0,0,0,1)
}
.userList {
  background: rgba(0,0,0,0.4)
}
.login-content-info {
  width: 100%;
  padding: 30px;
}
 .login-content-info-list {
  width: 100%;
  margin-bottom: 5px;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-wrap: column;
}
.userContent {
  width: 50%;
  height: 50%;
  display: flex;
  background: #fff;
  flex-direction: column;
}
.login-info-username {
    display: flex;
    align-items: none;
    justify-content: none;
    flex-direction: nowrap;
  }
.inputName {
  width: 50%;
  height:30px;
  position: relative;
  color: #229ad1;
}
.login-content-select {
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
}
 .inputTxt {
  margin-top: 10px;
  font-size: 15px;
  vertical-align: middle;
  margin-top: -2px;
}
.login-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login-btn-sucess,
.login-btn-load {
  text-align: center;
  margin-top: 10px;
  width: 60%;
  color: #fff;
  padding-top: 10px;
}
 .login-btn-sucess {
  background: #289dda;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.login-btn-load {
  margin-top: 20px;
  color: #289dda;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-btn-load-name {
  height: 30px;
  font-size: 15px;
  line-height: 30px;
}
.login-confirm-contents {
  display: flex;
  width: 50%;
  margin: 10px;
}
.login-content-info-list-tip {
  padding-left: 10px;
  color: #f00;
  width: 20%;
  opacity: 0.7;
  position: absolute;
  right:5%;
  text-align: left;
}
.login-label {
  width: 25%;
}
.login-info-username {
  width: 10%;
  position: absolute;
  left: 15%;
}
.user-title {
  background: #ccc;
  width: 100%;
  height: 40px;
  font-size: 15px;
  line-height: 40px;
  padding-left: 3%;
}
.user-list {
  display: flex;
  width: 100%;
  height: 20%;
  font-size: 20px;
  justify-content:space-around;
}
.user-list-title {
  width: 20%;
  font-weight: bold;
  text-align: left;
}
.user-list-content {
  width: 70%;
}
</style>
