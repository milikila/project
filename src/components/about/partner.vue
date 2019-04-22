<template>
  <div class="relation">
    <div class="relation-about-contents">
      <div class="relation-title">我们的伙伴</div>
      <div class="relation-contents">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tel: '',
      email: '',
      address: '',
      relation: {
        tel: '',
        email: '',
        address: ''
      }
    }
  },
  watch: {
    tel: function () {
      this.tel = this.$store.state.about.tel
    },
    address: function () {
      this.address = this.$store.state.about.address
    },
    email: function () {
      this.email = this.$store.state.about.email
    }
  },
  created () {
    this.tel = this.$store.state.about.tel
    this.address = this.$store.state.about.address
    this.email = this.$store.state.about.email
  },
  methods: {
  }
}
</script>
<style scoped>
.relation {
  top: 4rem;
  left: 0;
  right: 0;
  bottom: 0;
  width:100%;
  z-index: 10000000;
  display: flex;
  justify-content: center;
  position: absolute;
  background: #fff;
}
.relation-about-contents {
  margin-top: 20px;
  background: #eaebea;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-left: 3%;
}
.relation-title {
  font-size: 20px;
}
.relation-contents-list {
  display: flex;
  line-height: 3rem;
}
.relation-contents-list-name {
  font-size: 15px;
  padding: 1% 0;
}
</style>
