<template>
  <div class="change-relation">
    <div class="change-relation-list">
      <div>联系方式：</div>
      <div class="change-tel" v-html="tel">
      </div>
      <Button class="change-btn" @click="changetel()" type="primary">修改</Button>
    </div>
    <div class="change-relation-list">
      <div>地址：</div>
      <div class="change-tel"  v-html="address">
      </div>
      <Button class="change-btn" type="primary" @click="changeaddress()">修改</Button>
    </div>
    <div class="change-relation-list">
      <div>电子邮箱：</div>
      <div class="change-tel" v-html="email">
      </div>
      <Button class="change-btn"  type="primary" @click="changeemail()">修改</Button>
    </div>
    <div class="change-relation-editor" v-show="showEditor">
      <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
  </div>
  <Button class="change-btn" type="primary" @click="sucess()">保存</Button>
</div>
</template>
<script>
export default {
  data () {
    return {
      content: null,
      editorOption: {},
      tel: '',
      email: '',
      showIndexNumber: 1,
      address: '',
      showEditor: false,
      relation: {
        tel: '',
        email: '',
        address: ''
      }
    }
  },
  created () {
    this.tel = this.$store.state.about.tel
    this.address = this.$store.state.about.address
    this.email = this.$store.state.about.email
    // console.log(this.tel)
  },
  methods: {
    onEditorBlur () { // 失去焦点事件
    },
    onEditorFocus () { // 获得焦点事件
    },
    onEditorChange () { // 内容改变事件
    },
    changetel () {
      this.showEditor = true
      this.showIndexNumber = 1
    },
    changeaddress () {
      this.showEditor = true
      this.showIndexNumber = 2
    },
    sucess () {
      this.showEditor = false
      if (this.showIndexNumber === 1) {
        this.tel = this.content
        this.relation.tel = this.tel
        this.relation.address = this.$store.state.about.address
        this.relation.email = this.$store.state.about.email
        this.$store.commit('updateabout', this.relation)
      } else if (this.showIndexNumber === 2) {
        this.address = this.content
        this.relation.address = this.address
        this.relation.tel = this.$store.state.about.tel
        this.relation.email = this.$store.state.about.email
        this.$store.commit('updateabout', this.relation)
      } else {
        this.email = this.content
        this.relation.email = this.email
        this.relation.address = this.$store.state.about.address
        this.relation.tel = this.$store.state.about.tel
        this.$store.commit('updateabout', this.relation)
      }
    },
    changeemail () {
      this.showEditor = true
      this.showIndexNumber = 3
    }
  }
}
</script>
<style>
quill-editor {
  margin-top: 40px;
  width: 50%;
  height: 50%;
}
.change-relation-list {
  display: flex;
  height: 3rem;
  line-height: 3rem;
}
.change-btn {
  height: 2rem;
  margin-top: 0.5rem;
}
.change-relation-editor {
  margin-top: 60px;
}
</style>
