<template>
  <div id="raiseMoney">
    <div class="raiseMoney-add">
      <Button type="info" @click="addInfo()">增加</Button>
      <Button type="info" @click="exportData()"><Icon type="ios-download-outline"></Icon>导出</Button>
    </div>
    <Table class="table" border ref="table" :columns="columns7" :data="data6"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="data6.length" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
    <div class="raiseMoney-confirm" v-show="showAlert">
      <div class="donator-contents">
        <div class="donator-contents-title">请输入募捐项目类型:</div>
       <Select v-model="model1" class="donator-contents-list">
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
      <div class="raiseMoney-confirm" v-show="chanage">
        <div class="raiseMoney-chanage"></div>
      </div>
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
      projectList: [],
      projectName: '',
      projectNumber: null,
      textarea: '',
      showAlert: false,
      chanage: false,
      name: '',
      number: '',
      columns7: [
        {
          title: '名称',
          'sortable': true,
          width: 150,
          'key': 'name'
        },
        {
          title: '项目介绍',
          width: 400,
          'sortable': true,
          'key': 'content'
        }
      ],
      data6: []
    }
  },
  created () {
    this.donatorProject()
    this.projectListId()
  },
  methods: {
    projectListId () {
      axios.post('http://localhost/project/getProjects').then((res) => {
        if (res.data.message === 'true') {
          let arrayList = []
          res.data.data.forEach((item, index, arr) => {
            arrayList.push({ 'name': item.name, 'number': item.number, 'content': item.content, 'endDate': item.endDate, 'startDate': item.startDate })
          })
          this.data6 = arrayList
          return res
        }
      }).catch((res) => {
        this.$Message.info('接口错误')
      })
    },
    donatorProject () {
      axios.post('http://localhost/type/getTypes').then((res) => {
        if (res.data.message === 'true') {
          this.projectList = res.data.data
        }
      }).catch((res) => {
        this.$Message.info('接口错误')
      })
    },
    handleChange (daterange) {
      this.dataValue = daterange
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
        if (res.data.message === 'true') {
          this.showAlert = !this.showAlert
          this.projectListId()
        }
      }).catch((res) => {
        this.$Message.info('接口错误')
      })
    },
    addInfo () {
      this.showAlert = true
    },
    confirm () {
      this.showAlert = !this.showAlert
    },
    exportData () {
      this.$refs.table.exportCsv({
        filename: 'The original data',
        columns: this.columns7,
        data: this.data6
      })
    },
    changePage () {
      this.tableData1 = this.data6;
    }
  }
}
</script>
<style>
.raiseMoney {
  width: 100%;
  overflow: auto;
}
.raiseMoney-confirm {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 90%;
  background: rgba(0,0,0,0.9);
  z-index: 10000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.raiseMoney-add {
  display: flex;
  margin: 10px 0;
  width: 30%;
  justify-content: space-around;;
}
.raiseMoney-confirm-contents {
  background: #fff;
  width: 60%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.raiseMoney-confirm-title {
  font-size: 15px;
  background: #ccc;
  width: 100%;
  padding: 3px  5px;
  height: 10%;
}
.raiseMoney-confirm-list {
  margin: 10px 0;
}
.raiseMoney-confrim-list-name {
  text-align: center;
}
.raiseMoney-confrim-sucess {
  width: 80%;
  margin-top: 20px;
}
.raiseMoney-change {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  width: 40%;
  text-align: left;
}
.donator-contents-list {
  width: 100%;
}
textarea {
  overflow: auto;
  height: 150px;
}
.btn {
  width: 40%;
  margin-top: 30px;
}
</style>
