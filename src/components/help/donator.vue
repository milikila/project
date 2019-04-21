<template>
  <div class="donator">
    <div class="donator-title">
      <div class="donator-title-name">募捐</div>
    </div>
    <div class="donator-contents">
      <div class="donator-contents-title">请选择方式：</div>
      <Cascader class="donator-contents-list" :data="data4" :load-data="loadData"></Cascader>
    </div>
    <div class="donator-contents">
      <div class="donator-contents-title">请输入募捐项目名称</div>
      <Input class="donator-contents-list" v-model="projectName" placeholder="Enter something..." clearable />
    </div>。
    <div class="donator-contents">
      <div class="donator-contents-title">请描述募捐项目信息：</div>
      <textarea  class="donator-contents-list" v-model="textarea"></textarea>
    </div>
    <div class="btn"><Button type="primary" @click="list()" long>提交</Button></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projectName: '',
      data4: [
        {
          value: '募捐',
          label: '募捐',
          children: [],
          loading: false
        }
      ],
      textarea: ''
    }
  },
  methods: {
    list () {
      this.showList = !this.showList
    },
    loadData (item, callback) {
      item.loading = true
      setTimeout(() => {
        if (item.value === '募捐') {
          item.children = [
            {
              value: '钱',
              label: '钱'
            },
            {
              value: '物品',
              label: '物品'
            }
          ]
        }
        item.loading = false
        callback()
      }, 1000)
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
  margin-top: 20px;
  display: flex;
  height: 100px;
  width: 80%;
  align-items: center;
  justify-content: center;
}
.donator-contents-title {
  padding-top: 5%;
  width: 100%;
}
.donator-contents-list {
  width: 100%;
}
textarea {
  overflow: auto;
  height: 100px;
}
.btn {
  width: 40%;
  margin-top: 30px;
}
</style>
