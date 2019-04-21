<template>
  <div class="auditing-loading">
    <div class="auditing-loading-title">未审核</div>
    <div class="auditing-contents">
    <p>当前正在进行第 {{ current + 1 }} 步</p>
    <Steps :current="current">
      <Step title="步骤1"></Step>
      <Step title="步骤2"></Step>
      <Step title="步骤3"></Step>
    </Steps>
    <Button type="primary" class="btn" @click="next">Next step</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0
    }
  },
  methods: {
    next () {
      if (this.current === 3) {
        this.current = 0
      } else {
        this.current += 1
      }
    }
  }
}
</script>

<style>
.auditing {
  width: 100%;
}
.auditing-contents {
  width: 100%;
  display:flex;
  justify-content: space-around;
}
.btn {
  width: 10%;
  margin-top: 2%;
}
</style>
