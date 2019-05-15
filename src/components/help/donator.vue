<template>
  <div class="donator">
    <div class="donator-title">
      <div class="donator-title-name">募捐</div>
    </div>
    <div class="donator-contents">
      <div class="donator-contents-title">请输入募捐项目类型:</div>
       <Select v-model="model1" class="donator-contents-list"  @on-change="selectOption">
        <Option v-for="(item, index) in projectList" :value="item.id" :key="index">{{ item.typename }}</Option>
        </Select>
    </div>
    <div class="donator-contents">
      <div class="donator-contents-title">请输入募捐项目名称</div>
      <Input class="donator-contents-list" v-model="projectName" placeholder="Enter something..." clearable />
    </div>
    <div class="donator-contents">
      <div class="donator-contents-title">请输入数量：</div>
      <Input class="donator-contents-list" v-model="projectNumber" placeholder="Enter something..." clearable />
    </div>
    <div class="donator-contents donator-contents-another">
      <div class="donator-contents-title">请描述募捐项目信息：</div>
      <textarea  class="donator-contents-list textarea" v-model="textarea"></textarea>
    </div>
    <div class="donator-contents">
      <div class="donator-contents-title">开始-结束时间：</div>
      <Date-picker class="donator-contents-list"
      @on-change="handleChange"
      type="daterange"
      format="yyyy/MM/dd"
      placeholder="请选择时间段"
      placement="bottom-end">
      </Date-picker>
    </div>
    <div class="btn"><Button type="primary" @click="list()" long>提交</Button></div>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  data () {
    return {
      userid: this.$store.state.userid,
      model1: '',
      starttime: '',
      endtime: '',
      dataValue: null,
      projectList: {},
      projectName: '',
      projectNumber: null,
      textarea: ''
    }
  },
  created () {
    this.donatorProject()
  },
  methods: {
    donatorProject () {
      axios.post('http://localhost/type/getTypes').then((res) => {
        console.log(res.data.data)
        this.projectList = res.data.data
        console.log(this.projectList)
      }).catch((res) => {
        console.log('接口返回错误')
      })
    },
    selectOption (e) {
      console.log(e.e.target.key)
      console.log(this.userid)
    },
    handleChange (daterange) {
      this.dataValue = daterange
      console.log(this.dataValue)
      for (var i = 0; i < this.dataValue.length - 1; i++) {
        this.starttime = this.dataValue[i]
        this.endtime = this.dataValue[i + 1]
      }
    },
    list () {
      this.showList = !this.showList
      this.donatorList()
    },
    donatorList () {
      axios.post('http://localhost/project/saveProject',
        qs.stringify({
          checkId: '',
          name: this.projectName,
          number: this.projectNumber,
          userId: parseInt(this.userid),
          content: this.textarea,
          endDate: this.endtime,
          startDate: this.starttime,
          type_id: parseInt(this.model1)
        })).then((res) => {
        console.log(res.data.message)
        this.$router.push({path: '/'})
      }).catch((res) => {
        console.log('接口返回错误')
      })
    }
  }
}
</script>

<style scoped>
.donator {
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 3.9rem;
  z-index: 100;
  position: absolute;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.donator-title {
  font-size: 20px;
}
.donator-contents {
  display: flex;
  height: 80px;
  width: 80%;
  align-items: center;
  justify-content: center;
}
.donator-contents-another {
  height: 200px;
  display: flex;
  justify-content: space-around;
}
.donator-contents-title {
  /* padding-top: 5%; */
  width: 40%;
  text-align: left;
}
.donator-contents-list {
  width: 100%;
}
/* .textarea {
  height: 300px;
} */
textarea {
  overflow: auto;
  height: 150px;
}
.btn {
  width: 40%;
  margin-top: 30px;
}
</style>
