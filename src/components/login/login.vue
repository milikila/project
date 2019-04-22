<template>
  <div class="login-template">
    <div class="header">
      <div class="header-title-img" @click="showIndex()">
        <div class="header-click">
          <img class="imgs" :src="IndexImg">
        </div>
      </div>
      <div class="header-about-contents">
        <router-link to = "/" class="header-about">首页</router-link>
        <router-link to = "/" class="header-about">平台简介</router-link>
        <router-link to = "/relation" class="header-about">联系我们</router-link>
        <router-link to = "/partner" class="header-about">我们的伙伴</router-link>
      </div>
      <div class="header-title">
        <div class="header-title-btn"  @click="login()">
          <div class="login-btns">{{title}}</div>
        </div>
        <div class="header-title-btn" @click="changelogin()">
          <Button type="primary">修改</Button>
        </div>
        <div class="header-title-btn" @click="exitlogin()">
          <Button type="primary">退出</Button>
        </div>
      </div>
    </div>
    <div v-show="showLoginBtn">
      <div class="login-content">
        <div class="login-title">
        <div class="login-title-header">{{itemName}}</div>
      </div>
        <div class="login-content-info">
          <div class="login-content-info-list">
            <label class="login-info-username">用户名称&nbsp;</label>
            <input type="text" placeholder='设置名称' class='inputName' v-model="username">
            <!-- <label class="login-content-info-list-tip">{{usernameTip}}</label> -->
          </div>
          <div class="login-content-info-list">
            <label class="login-info-username">用户密码&nbsp;</label>
            <input type="password" placeholder="设置密码" class="inputName" v-model="password">
            <!-- <label class="login-content-info-list-tip"></label> -->
          </div>
          <div class="login-content-info-list" v-show="confirmPassword">
            <label class="login-info-username">确认密码&nbsp;</label>
            <input type="password" placeholder="确认密码" class="inputName" v-model="confirmPsd">
            <!-- <label class="login-content-info-list-tip">{{confirmPsdTip}}</label> -->
          </div>
          <div class="login-content-info-list" v-show="confirmPassword">
            <label class="login-info-username">年龄</label>
            <InputNumber class="inputName"  v-model="value4"></InputNumber>
          </div>
          <div class="login-content-info-list" v-show="confirmPassword">
            <label class="login-info-username">地&nbsp;&nbsp;&nbsp;&nbsp;址&nbsp;&nbsp;</label>
            <input type="text" placeholder="输入地址" class="inputName" v-model="address">
            <!-- <label class="login-content-info-list-tip"></label> -->
          </div>
          <div class="login-content-select">
            <input type="radio" value="1" v-model="picked" checked="checked">
            <label for="one" class="inputTxt">普通用户</label>
            <input type="radio" value="2" v-model="picked">
            <label for="two" class="inputTxt">管理员</label>
          </div>
          <div class="login-btn">
            <div class="login-btn-sucess" v-show="!confirmPassword" @click="loginPage()">登录</div>
            <div class="login-btn-sucess" @click="register()" v-show="confirmPassword">注册</div>
            <div class="login-btn-load" @click="load()">
              <div class="login-btn-load-name" v-if="showLoad">还没注册？走注册>></div>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <div class="login-content"  v-show="changeUserPsd">
     <div class="login-confirm-contents">
        <label class="login-label">修改的用户名</label>
        <Input type="text" class="login-confirm-contents-text" v-model="changeUsername"/>
      </div>
      <div class="login-confirm-contents">
        <label class="login-label">修改的密码</label>
        <Input type="password" class="login-confirm-contents-text" v-model="changePassword"/>
      </div>
      <Button class="login-content-info-sucess" @click="showChangePage()" type="primary">保存</Button>
    </div>
  </div>
</template>
<script>
import Manage from '@/components/manager/manage-index'
export default {
  data () {
    return {
      showBtn: false, // 是否显示登录注册按钮
      confirmPassword: false, // 确认密码框是否显示
      IndexImg: './static/img/logo.png',
      value4: 21,
      picked: '', // 单选框的值
      changeUserPsd: false, // 修改密码框是否显示
      username: '', // 用户名称
      title: this.$store.state.LoginTitle, // header显示名称
      password: '', // 用户密码
      usernameTip: 'ddd', // 提示内容
      confirmPsdTip: '哒哒哒哒哒哒多多多dddddd', // 确认密码提示
      // tipShow: false,
      btnshow: false, // 按钮显示隐藏
      address: '',
      changeUsername: '', // 改变用户名称
      changePassword: '', // 改变用户密码
      showLoginBtn: false, // 登录内容框是否显示
      confirmPsd: '', // 确认密码框内容
      showLoad: true, // 是否显示注册提示
      itemName: '登录页面',
      managerUserPad: {
        username: '',
        password: ''
      }
    }
  },
  watch: {
    picked: function () {
      if (this.picked === '2') {
        this.showLoad = false
        this.itemName = '登录页面'
        this.confirmPassword = false
      } else {
        this.itemName = '登录页面'
        this.showLoad = true
      }
    }
  },
  components: {
    Manage: Manage
  },
  created () {
    this.title = this.$store.state.LoginTitle
  },
  methods: {
    showChangePage () {
      this.changeUserPsd = !this.changeUserPsd
    },
    exitlogin () {
      this.title = '登录/注册'
      this.$router.push({ path: '/' })
      this.btnshow = false
    },
    changelogin () {
      this.changeUserPsd = !this.changeUserPsd
    },
    load () {
      this.confirmPassword = true
      this.showLoad = false
      this.itemName = '注册页面'
    },

    showIndex () {
      this.$router.push({ path: '/' })
    },
    login () {
      this.showLoginBtn = true
    },
    loginPage () {
      if (this.picked === '2' && this.username !== '' && this.password !== '') {
        this.$router.push({path: '/manage'})
        this.title = this.username
        this.managerUserPad.username = this.username
        this.managerUserPad.password = this.password
        this.showLoginBtn = !this.showLoginBtn
        this.$store.commit('updateUsernamePassowrd', this.managerUserPad)
        this.btnshow = true
      } else if (this.picked === '1') {
        this.title = this.username
        this.showLoginBtn = !this.showLoginBtn
      } else {
      }
    },
    register () {}
  }
}
</script>

<style scoped>
.login-template {
  width: 100%;
  height: 65px;
}
.header {
  width: 100%;
  height: auto;
  background: rgba(250, 249, 248, 0.867);
  display: flex;
}
.header-title {
  width: 40%;
  display: flex;
  justify-content: flex-end;
}
.header-about-contents{
  width: 50%;
  display: flex;
  font-weight: bold;
  font-size: 15px;
}
.header-about {
  line-height: 4rem;
  width: 30%;
  text-align: center;
}
.header-title-btn {
  display: flex;
  height: 4rem;
  line-height: 4rem;
  margin-right: 4px;
  align-items: center;
  justify-content: flex-end;
}
.header-title-img {
  width: 40%;
  height: 4rem;
  margin-left: 5%;
}
.header-click {
  /* background: #f00; */
  width: 20%;
  height: 4rem;
}
.imgs {
  width: 4rem;
  height:4rem;
}
.login-btns {
  color: #000;
  width: auto;
  font-size: 20px;
  font-weight: bold;
  padding-right:10px;
  border: 0;
  outline:none;
}
.login-title {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.login-title-header {
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.login-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 545px;
  position: relative;
  z-index: 1000000;
  background: rgba(0,0,0,0.8)
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
</style>
