<template>
  <div class="usersetting">
    <div class="usersetting-including">募捐活动具体介绍内容</div>
    <div class="usersetting-contents">
    <div class="usersetting-select">
      <div class="usersetting-select-title">请选择方式:</div>
      <Cascader style="width: 400px" :data="data4" :load-data="loadData"></Cascader>
    </div>
    <div class="usersetting-select">
      <div class="usersetting-select-title">请填写数量/金额:</div>
      <Input v-model="value14" placeholder="Enter something..." clearable style="width: 400px" />
    </div>
    <div class="usersetting-select userset-remark">
      <div class="usersetting-select-title">请填写备注:</div>
      <Input v-model="value8" style="width: 400px" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
    </div>
    <div class="usersetting-btn"><Button type="primary" long>SUBMIT</Button></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value14: '',
      value8: '',
      data4: [
        {
          value: '募捐',
          label: '募捐',
          children: [],
          loading: false
        },
        {
          value: '筹款',
          label: '筹款',
          children: [],
          loading: false
        }
      ],
      indexNumber: ''
    }
  },
  watch: {
    model1: function () {
      if (this.model1 === '捐款') {
        this.indexNumber = '1'
        console.log(this.indexNumber)
      } else {
        this.indexNumber = '2'
        console.log(this.indexNumber)
      }
    }
  },
  methods: {
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
        } else if (item.value === '筹款') {
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

<style>
.usersetting {
    width:100%;
    /* height:100%; */
    top: 3.8rem;
    left:0;
    right: 0;
    bottom: 0;
    background: #fff;
    position: absolute;
    z-index: 100;
    overflow: auto;
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
}
.usersetting-including {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  /* margin-left: 10%; */
  /* margin-top: 5%; */
  display: flex;
  justify-content: center;
  /* line-height: 20px; */
  /* flex-direction: column; */
}
.usersetting-select-title {
  width: 50%;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
}
.usersetting-contents {
  display: flex;
  /* width: 90%; */
  /* margin-left: 10%; */
}
.usersetting-btn {
  width: 80%;
}
</style>
