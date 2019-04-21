<template>
  <div>
    <div>
      <Login></Login>
    </div>
    <IndexContent></IndexContent>
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Login from '@/components/login/login'
import IndexContent from '@/components/Index/index'
export default {
  data () {
    return {
    }
  },
  components: {
    Login: Login,
    IndexContent: IndexContent
  },
  methods: {
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.main {
  display: flex;
  flex-direction: column;
  flex-direction: center;
  align-items: center;
}
.banner {
  width: 90%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-carousel  img{
  width: 100%;
  height: 300px;
}
.main-content{
  display: flex;
  width: 20%;
  margin-top: 3%;
  justify-content: flex-start;
}
.main-content-title {
  padding: 0 3%;
  font-size: 20px;
  /* display: flex;
  flex-direction: column; */
}
</style>
