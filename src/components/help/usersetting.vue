<template>
  <div class="usersetting">
    <div class="usersetting-content">
      <div class="usersetting-including">
        <div class="usersetting-including-title">
          <span>{{projectContent.name}}的项目介绍</span>
        </div>
        <div class="usersetting-including-content">
          <div class="usersetting-including-content-title">项目详细介绍</div>
          <span>{{projectContent.content}}</span>
        </div>
        <div class="usersetting-including-content">
          <span>开始时间：{{projectContent.startDate | dataDate}}</span>
        </div>
        <div class="usersetting-including-content">
          <span>结束时间：{{projectContent.endDate | dataDate}}</span>
        </div>
      </div>
      <div class="usersetting-contents">
        <div class="usersetting-select">
          <div class="usersetting-select-title">请填写数量:</div>
          <Input v-model="number" placeholder="Enter something..." clearable style="width: 400px" />
        </div>
        <div class="usersetting-btn">
          <Button type="primary" @click="submit()" long>SUBMIT</Button>
        </div>
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
      value14: '',
      value8: '',
      number: null,
      indexNumber: '',
      jsonp: this.$route.params.jsonp,
      projectContent: {}
    }
  },
  created () {
    this.getprojectList()
  },
  filters: {
    dataDate: function (value) {
      return value.substring(0, 10)
    }
  },
  methods: {
    getprojectList () {
      axios.post('http://localhost/project/getProject', qs.stringify({
        id: this.$route.params.projectId
      })).then((res) => {
        if (res.data.message === 'true') {
          this.projectContent = res.data.data
        }
      }).catch((res) => {
        this.$Message.info('接口错误')
      })
    },
    submit () {
      this.ctbProject()
    },
    ctbProject () {
      axios.post('http://localhost/project/ctbProject', qs.stringify({
        id: this.$route.params.projectId,
        userId: this.$store.state.userid,
        param: this.number
      })).then((res) => {
        if (res.data.message === 'true') {
          this.$Message.info('募捐成功')
          this.$router.push({path: '/'})
        }
      }).catch((res) => {
        this.$Message.info('接口错误')
      })
    }
  }
}
</script>

<style>
.usersetting {
    width:100%;
    top: 3.8rem;
    left:0;
    right: 0;
    height: 1880px;
    bottom: 0;
    background: #fff;
    position: absolute;
    z-index: 100;
    overflow: auto;
}
.usersetting-content {
  width: 90%;
  display: flex;
  margin-left: 5%;
  align-content: center;
  justify-content: center;
}
.usersetting-including {
  width: 50%;
  font-size: 20px;
  display: flex;
  margin-top: 50px;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}
.usersetting-including-title {
  font-size: 25px;
  font-weight: bold;
}
.usersetting-including-content {
  margin-top: 30px;
  padding-left: 30px;
}
.usersetting-including-content-title {
  font-weight: bold;
}
.usersetting-contents {
  width:50%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.usersetting-select {
  width: 90%;
  display: flex;
  justify-content: center;
}
.usersetting-select-title {
  width: 50%;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
}
.usersetting-btn {
  width: 80%;
  margin-top: 20px;
}
.ivu-input, .ivu-input-default {
  border: 2px solid #ccc;
}
</style>
