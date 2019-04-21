<template>
  <div class="managepsd">
    <div class="managepsd-content-info">
      <div class="managepsd-content-info-list">
        <label class="managepsd-content-info-name">用户名称&nbsp;</label>
        <Input type="text"  v-model="username" readonly = "readonly"/>
        <Button class="managepsd-content-info-btn" type="primary" @click="changeusername()">修改</Button>
      </div>
      <div class="managepsd-content-info-list">
        <label class="managepsd-content-info-name">用户密码&nbsp;</label>
        <Input type="password" v-model="password" readonly = "readonly"/>
        <Button class="managepsd-content-info-btn" type="primary" @click="changePsd()">修改</Button>
      </div>
      <Button class="managepsd-content-info-sucess" type="primary" @click="control()">保存</Button>
    </div>
    <div class="confirm" v-show="showConfirm">
      <div class="confirm-contents ">
        <h1>请输入要修改的用户名</h1>
        <!-- <label class="managepsd-content-info-name">用户名称&nbsp;</label> -->
        <Input type="text" class="confirm-contents-text" v-model="changeUsername"/>
        <Button class="managepsd-content-info-sucess"   @click="UnshowConfirm()" type="primary">保存</Button>
      </div>
    </div>
    <div class="confirm" v-show="changeConfirm">
      <div class="confirm-contents ">
        <h1>请输入要修改的密码</h1>
        <Input type="text" class="confirm-contents-text" v-model="changePassword"/>
        <Button class="managepsd-content-info-sucess" type="primary" @click="controlPsd()">保存</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: this.$store.state.managerPsd.username,
      password: this.$store.state.managerPsd.password,
      showConfirm: false,
      changeConfirm: false,
      changeUsername: '',
      changePassword: '',
      controluserpsd: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    changeusername () {
      this.showConfirm = true
    },
    UnshowConfirm () {
      this.showConfirm = false
      this.username = this.changeUsername
    },
    changePsd () {
      this.changeConfirm = true
    },
    controlPsd () {
      this.changeConfirm = false
      this.password = this.changePassword
    },
    control () {
      this.controluserpsd.username = this.username
      this.controluserpsd.password = this.password
      this.$store.commit('updateUsernamePassowrd', this.controluserpsd)
    }
  }
}
</script>
<style scoped>
.managepsd{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column
}
.managepsd-content-info {
  width: 70%;
  height: 100%;
}
.managepsd-content-info-list {
  display: flex;
  height: 2rem;
  margin: 2rem 0;
  line-height: 2rem;
  /* flex-direction: column; */
}
.managepsd-content-info-name {
  width: 20%;
}
.managepsd-content-info-btn {
  height: 2rem;
  margin-left:1rem;
}
.managepsd-content-info-sucess,.confirm-contents-text {
  margin-top: 10px;
  width: 60%;
}
.confirm {
  width: 100%;
  height:100%;
  background: rgba(0,0,0,0.1);
  position: absolute;
  z-index: 10000000;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
}
.confirm-contents {
  background: #fff;
  width: 40%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column
}
</style>
