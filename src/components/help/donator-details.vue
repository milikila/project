<template>
  <div class="donator-details">
    <div class="donator-details-title">募捐详情页面</div>
    <div class="donator-details-contents">
      <div class="donator-details-list">
        <div class="donator-details-list-name">
          <label>名称：</label>
          <div>dafadfaf</div>
        </div>
        <div class="donator-details-list-contents">
          <div class="donator-details-list-name donator-details-list-contents-details">
            <label>募捐详情</label>
            <div class="donator-details-">开始时间：</div>
            <div class="">结束时间：</div>
            <div class="">发布人</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
.donator-details {
  display: flex;
  top: 3.9rem;
  position: absolute;
  /* justify-content: center; */
  z-index: 100;
  flex-direction: column;
  background: #fff;
  align-items: center;
  width: 100%;
  height: 100%;
}
.donator-details-title {
  font-size: 20px;
}
.donator-details-contents {
  display: flex;
}
.donator-details-list-name {
  display: flex;
}
.donator-details-list-contents-details{
  display: flex;
  flex-direction: column;
}
</style>
