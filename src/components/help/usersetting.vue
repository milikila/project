<template>
  <div class="usersetting">
    <div class="usersetting-including">募捐活动具体介绍内容</div>
    <div class="usersetting-contents">
    <div class="usersetting-select">
    </div>
    <div class="usersetting-select">
      <div class="usersetting-select-title">请填写数量:</div>
      <Input v-model="number" placeholder="Enter something..." clearable style="width: 400px" />
    </div>
    <div class="usersetting-select">
      <div class="usersetting-select-title">请填写金额:</div>
      <Input v-model="value14" placeholder="Enter something..." clearable style="width: 400px" />
    </div>
    <!-- <div class="usersetting-select userset-remark">
      <div class="usersetting-select-title">请填写备注:</div>
      <Input v-model="value8" style="width: 400px" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
    </div> -->
    <div class="usersetting-btn"><Button type="primary" long>SUBMIT</Button></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['projectId'],
  data () {
    return {
      value14: '',
      value8: '',
      number: null,
      indexNumber: ''
    }
  },
  created () {
    console.log('3', this.projectId)
  },
  methods: {
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
