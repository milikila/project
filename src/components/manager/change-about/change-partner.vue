<template>
  <div class="change-partner">
    <div class=""></div>
    <div class="change-partner-editor" v-show="showEditor">
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
      showIndexNumber: 1,
      showEditor: false
    }
  },
  created () {
  }
}
</script>
<style>
quill-editor {
  margin-top: 40px;
  width: 50%;
  height: 50%;
}
.change-partner-list {
  display: flex;
  height: 3rem;
  line-height: 3rem;
}
.change-btn {
  height: 2rem;
  margin-top: 0.5rem;
}
.change-partner-editor {
  margin-top: 60px;
}
</style>
