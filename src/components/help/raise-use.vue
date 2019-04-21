<template>
  <div class="use-details">
    <div class="use-back"></div>
    <div class="use-details-title">
      <div class="use-details-title-name">捐赠使用用途</div>
    </div>
    <div class="use-details-contents">
      <div class="use-details-contents-list">捐款项目列表</div>
      <div class="use-details-contents-list-details">
        详情： 000000000
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.use-details {
  background: #fff;
  top: 3.9rem;
  left: 0;
  right:0;
  bottom: 0;
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.use-details-title-name {
  font-size: 30px;
  font-weight: bold;
}
.use-details-contents {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.use-details-contents-list {
  font-size: 20px;
}
</style>
