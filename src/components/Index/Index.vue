<template>
  <div class="Index">
    <div class="Index-search">
      <Button class="yourself" @click="check()"  type="primary">查看募捐</Button>
      <Button class="yourself" @click="join()" type="primary">发起募捐</Button>
      <Input search enter-button="Search" class="Index-search-name" placeholder="Enter something..."  @on-search="searchPage()"/>
    </div>
    <!-- <Carousel class="banner" autoplay v-model="value2" loop>
      <CarouselItem>
        <div class="demo-carousel"><img class="demo-carousel-img" :src="bannerImg1"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img class="demo-carousel-img" :src="bannerImg2"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img class="demo-carousel-img" :src="bannerImg3"></div>
      </CarouselItem>
    </Carousel> -->
    <div class="Index-content">
      <div class="Index-content-title"  v-for="(item,index) in contents" :key="index">
        <div @click="chooseList(index)">{{item}}</div>
      </div>
    </div>
    <div class="Index-content-list">
      <div class="Index-content-list-all" v-if="showAll">
        <div class="Index-content-show-list">
          <div v-for="(contentList, indexs) in jsonp" :key="indexs" class="Index-content-lists" @click="IndexDetails()">
            <div class="Index-content-list-name">{{contentList.name}}</div>
            <div class="Index-content-list-value">{{contentList.value}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value2: 0,
      bannerImg1: './static/img/banner/1.jpg',
      bannerImg2: './static/img/banner/2.jpg',
      bannerImg3: './static/img/banner/3.jpg',
      contents: [],
      showAll: true,
      indexNumber: -1,
      title: '',
      showHelp: false,
      showAccept: false,
      jsonp: [{
        'name': '捐赠',
        'value': 'adfk;afkal;fa'
      },
      {
        'name': '山区捐赠',
        'value': 'adfk;afkal;fa'
      }]
    }
  },
  methods: {
    IndexDetails () {
      this.$router.push({path: '/usersetting'})
    },
    check () {
      this.$router.push({path: '/donatordetails'})
    },
    join () {
      this.$router.push({path: '/donator'})
    },
    searchPage () {
      this.$router.push({path: '/raiseUse'})
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.Index {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: auto;
}
.banner {
  width: 90%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-carousel{
  width: 100%;
  height: 300px;
}
.demo-carousel-img {
  width: 100%;
  height: 300px;
}
.Index-content{
  display: flex;
  width: 30%;
  margin-top: 3%;
  justify-content: flex-start;
}
.Index-content-title {
  padding: 0 3%;
  font-size: 20px;
}
.yourself {
  margin-right: 10px;
}
.Index-search {
  position: relative;
  right: 0;
  width: 98%;
  height: 30px;
  display: flex;
  margin: 10px 0;
  justify-content: flex-end;

}
.Index-search-name {
  width: 25%;
}
.Index-content-list {
  width: 90%;
}
.Index-content-list-all {
  width: 100%;
}
.Index-content-lists {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.Index-content-show-list {
  width: 100%;
}
.Index-content-list-all-help {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
