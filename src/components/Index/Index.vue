<template>
  <div class="Index">
    <div class="Index-search">
      <Button class="yourself" @click="check()"  type="primary">查看募捐</Button>
      <Button class="yourself" @click="join()" type="primary">发起募捐</Button>
      <Input search enter-button="Search" class="Index-search-name" placeholder="Enter something..."  @on-search="searchPage()"/>
    </div>
    <Carousel class="banner" autoplay v-model="value2" loop>
      <CarouselItem>
        <div class="demo-carousel"><img class="demo-carousel-img" :src="bannerImg1"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img class="demo-carousel-img" :src="bannerImg2"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img class="demo-carousel-img" :src="bannerImg3"></div>
      </CarouselItem>
    </Carousel>
    <div class="Index-content">
      <div class="Index-content-title"  v-for="(item,index) in contents" :key="index">
        <div>{{item}}</div>
      </div>
    </div>
    <div class="Index-content-list">
      <div class="Index-content-list-all" v-if="showAll">
        <div class="Index-content-show-list">
          <div class="Index-title">项目列表：</div>
          <div v-for="(contentList, indexs) in jsonp" :key="indexs" class="Index-content-lists" @click="IndexDetails(contentList.content,contentList.id,indexs)">
            <div style="margin-right: 10px" class="Index-content-list-name">{{indexs+1}}</div>
            <div class="Index-content-list-name">{{contentList.name}}</div>
            <div class="Index-content-list-value">{{contentList.value}}</div>
          </div>
        </div>
      </div>
    </div>
    <usersetting :projectId="projectId" v-show="showContent"></usersetting>
  </div>
</template>
<script>
import axios from 'axios'
import usersetting from '@/components/help/usersetting'
export default {
  data () {
    return {
      value2: 0,
      bannerImg1: './static/img/banner/1.jpg',
      bannerImg2: './static/img/banner/2.jpg',
      bannerImg3: './static/img/banner/3.jpg',
      contents: [],
      showContent: false,
      showAll: true,
      indexNumber: -1,
      title: '',
      projectId: '',
      showList: '',
      showAccept: false,
      jsonp: []
    }
  },
  created () {
    this.projectList()
  },
  components: {
    'usersetting': usersetting
  },
  methods: {
    projectList () {
      axios.post('http://localhost/project/getProjects').then((res) => {
        this.jsonp = res.data.data
        console.log(this.jsonp)
      }).catch((res) => {
        console.log('接口返回错误')
      })
    },
    projectListId () {
      axios.post('http://localhost/project/getProject').then((res) => {
        console.log('获得数据', this.jsonp)
      }).catch((res) => {
        console.log('接口返回错误')
      })
    },
    IndexDetails (item, id, indexs) {
      this.indexNumber = indexs
      this.showContent = true
      this.projectId = id
      console.log(this.projectId)
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
  /* height: 50px; */
}
.Index-title {
  font-size: 20px;
  font-weight: bold;
}
.Index-content-list-all {
  width: 100%;
}
.Index-content-lists {
  display: flex;
  width: 100%;
  height: 50px;
  /* justify-content: space-around; */
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
