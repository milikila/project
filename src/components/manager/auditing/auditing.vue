<template>
  <div class="auditing">
    <div class="auditing-contents">
      <Select v-model="contents" style="width:200px">
        <Option v-for="item in list" :value="item.value" @click.native="selectOption(item.value)" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div class="aduiting-list">
      <auditingSucess v-show="showSucessContent"></auditingSucess>
      <auditingFail v-show="showFailContent"></auditingFail>
    </div>
  </div>
</template>

<script>
import auditingFail from '@/components/manager/auditing/auditing-fail.vue'
import auditingSucess from '@/components/manager/auditing/auditing-sucess.vue'
export default {
  data () {
    return {
      contents: '',
      showSucessContent: false,
      showFailContent: false,
      list: [
        {
          label: '审核通过',
          value: '审核通过'
        },
        {
          label: '审核未通过',
          value: '审核未通过'
        }
      ]
    }
  },
  methods: {
    selectOption (item) {
      if (item === '审核通过') {
        this.showSucessContent = true
        this.showFailContent = false
      } else {
        this.showSucessContent = false
        this.showFailContent = true
      }
    }
  },
  components: {
    'AuditingFail': auditingFail,
    'AuditingSucess': auditingSucess
  }
}
</script>

<style>
 .auditing {
  width: 100%;
  top: 10%;
  position: relative;
}
.auditing-contents {
  height: 10%;
  width: 70%;
  display: flex;
  flex-direction: column;
}
.dropDown {
  border: solid #ccc 1px;
  width: 60%;
  height: 2.5rem;
  line-height: 2.5rem;
  padding-left: 0.2rem;
}
.auditing-list {
  height: 50%;
  width:100%;
}
.contents-list {
  width: 60%;
  height: 50px;
  display:flex;
  border: solid #ccc 1px;
}
.contents-list:last-child {
  border-right: 0;
}
.listchecked {
  display: flex;
  width: 35%;
  height: 3rem;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  border-right: solid #ccc 1px;
  border-radius: 3%;
}
.addActive {
  background: #4d27b8;
  color: #fff;
}
.contents {
  margin-top: 2%;
}
.aduiting-list {
  position: absolute;
  height: auto;
  width: 100%;

}
</style>
