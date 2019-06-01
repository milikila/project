<template>
  <div class="Index">
    <div class="Index-search">
      <!-- <Button class="yourself" @click="check()"  type="primary">查看募捐</Button> -->
      <Button class="yourself" @click="join()" type="primary">发起募捐</Button>
      <!-- <AutoComplete
        v-model="value1"
        :data="data1"
        @on-search="searchPage()"
        placeholder="请输入要搜索的项目名称"
        style="width:200px">
      </AutoComplete> -->
    </div>
    <Carousel class="banner" autoplay v-model="value2" loop>
      <!-- <CarouselItem>
        <div class="demo-carousel"><img class="demo-carousel-img" :src="bannerImg1"></div>
      </CarouselItem> -->
      <CarouselItem>
        <div class="demo-carousel"><img class="demo-carousel-img" :src="bannerImg2"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img class="demo-carousel-img" :src="bannerImg3"></div>
      </CarouselItem>
    </Carousel>
    <div class="Index-content">
      <div class="Index-content-title"  v-for="(item, index) in contents" :key="index">     
        <div>项目名称：{{item}}</div>
      </div>
    </div>
    <div class="Index-content-list">
      <div class="Index-content-list-all" v-if="showAll">
        <div class="Index-content-show-list">
          <div class="Index-title">项目列表：</div>
          <div class="Index-content-contents">
            <div v-for="(contentList, indexs) in jsonp" :key="indexs" class="Index-content-lists" @click="IndexDetails(contentList.content,contentList.id,indexs)">
            <div class="index-content-img"><img :src="projectImg"/></div>
              <div class="Index-content-list-name">项目名称：{{contentList.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="paihang">
        <div class="marquee">
          <div class="marquee_title">
            <span>实时热点</span>
          </div>
          <div class="marquee_box">
            <ul class="marquee_list" :class="{marquee_top:animate}">
              <li v-for="(item,indexs) in marqueeList" :key="indexs">{{item.name}}</li>
            </ul>
          </div>
        </div>
        <div class="bang">
          <div>排行榜</div>
          <div>
            <Table stripe :columns="columns1" :data="tableData"></Table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      value2: 0,
      value1: '',
      data1: [],
      bannerImg1: './static/img/banner/1.jpg',
      bannerImg2: './static/img/banner/2.jpg',
      bannerImg3: './static/img/banner/3.jpg',
      contents: [],
      projectImg: './static/img/project.jpg',
      showContent: false,
      showAll: true,
      indexNumber: -1,
      title: '',
      projectId: null,
      showList: '',
      showAccept: false,
      jsonp: [],
      animate: false,
      marqueeList: [
        {
          name: '1军电视空间开发'
        },
        {
          name: '2水电费'
        },
        {
          name: '3第三方库收到货否'
        },
        {
          name: '4iOS'
        }
      ],
      columns1: [
        {
          title: '',
          key: 'number',
          width: 20
        },
        {
          title: '机构',
          key: 'name',
          width: 200
        },
        {
          title: '得分',
          key: 'age'
        },
        {
          title: '趋势',
          key: 'address'
        }
      ],
      tableData: [
        {
          number: '1',
          name: '北京光华慈善基金会',
          age: 100,
          address: '持平 0'
        },
        {
          number: '2',
          name: '北京万通公益基金会',
          age: 100,
          address: '持平 0'
        },
        {
          number: '3',
          name: '福建省正荣公益基金会',
          age: 100,
          address: '持平 0'
        }
      ]
    }
  },
  created () {
    this.projectList()
    setInterval(this.showMarquee, 2000)
  },
  activated () {
    this.$nextTick(() => {
      this.projectList()
    })
  },
  watch: {},
  methods: {
    projectList () {
      axios.post('http://localhost/project/getProjects').then((res) => {
        if (res.data.message === 'true') {
          this.jsonp = res.data.data
          let selectContent
          res.data.data.forEach(function (item) {
            selectContent.push({'name': item.name})
          })
          this.data1 = selectContent
        }
      }).catch((res) => {
        this.$Message.info('接口错误')
      })
    },
    searchPage (value) {
      this.data1 = !value ? [] : [
        value,
        value + value,
        value + value + value
      ]
    },
    IndexDetails (item, id, indexs) {
      this.indexNumber = indexs
      this.showContent = true
      this.projectId = id
      this.$router.push({name: 'usersetting', params: {projectId: this.projectId, jsonp: this.jsonp}})
    },
    check () {
      this.$router.push({path: '/donatordetails'})
    },
    join () {
      this.$router.push({path: '/donator'})
    },
    showMarquee () {
      this.animate = true
      setTimeout(() => {
        this.marqueeList.push(this.marqueeList[0])
        this.marqueeList.shift()
        this.animate = false
      }, 500)
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  font-size: 20px;
}
.Index {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
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
  display: flex;
}
.Index-title {
  font-size: 20px;
  font-weight: bold;
}
.Index-content-contents {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.Index-content-list-all {
  width: 65%;
  padding-top: 20px;
  display: flex;
}
.Index-content-lists {
  display: flex;
  width: 30%;
  margin-top: 30px;
  flex-direction: column;
}
.Index-content-show-list {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.Index-content-list-all-help {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.marquee {
  width: 100%;
  height: 50px;
  align-items: center;
  color: #3a3a3a;
  background-color: white;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
}

.marquee_title {
  padding: 0 20px;
  height: 21px;
  font-size: 14px;
  border-right: 1px solid #d8d8d8;
  align-items: center;
}

.marquee_box {
  display: block;
  position: relative;
  width: 60%;
  height: 30px;
  overflow: hidden;
}

.marquee_list {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}
.marquee_top {
  transition: all 0.5s;
  margin-top: -30px;
}
.marquee_list li {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  padding-left: 20px;
}
.marquee_list li span {
  padding: 0 2px;
}
.index-content-img {
  width: 200px;
  height: 100px;
}
.index-content-img img {
  width: 200px;
  height: 100px;
}
.Index-content-list-name {
  width: 200px;
  text-align: center;
}
.paihang {
  width: 35%;
}
.bang {
  margin-left: 20px;
}
</style>
