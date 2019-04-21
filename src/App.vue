<template>
  <div id="app">
    <router-view></router-view>
    <!-- <IndexContent></IndexContent> -->
  </div>
</template>

<script>
// import IndexContent from '@/components/Index/index'
export default {
  data () {
    return {
    }
  },
  // components: {
  //   IndexContent: IndexContent
  // },
  created () {
    if (localStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem('store'))))
    }
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('store', JSON.stringify(this.$store.state))
    })
    // window.addEventListener('beforeunload', () => {
    //   localStorage.removeItem('token')
    // })
  }
}
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
</style>
