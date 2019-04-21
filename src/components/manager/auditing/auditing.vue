<template>
  <div class="auditing">
    <div class="auditing-contents">
    <Select v-model="contents" style="width:200px">
      <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    </div>
  </div>
</template>

<script>
import auditingFail from '@/components/manager/auditing/auditing-fail.vue'
import auditingSucess from '@/components/manager/auditing/auditing-sucess.vue'
import auditingLoading from '@/components/manager/auditing/auditing-loading.vue'
export default {
  data () {
    return {
      contents: '',
      list: [
        {
          label: '项目审核',
          value: '项目审核'
        },
        {
          label: '申请募捐审核',
          value: '申请募捐审核'
        }
      ]
    }
  },
  methods: {
    showContentsList () {
      this.disable = true
    }
  },
  components: {
    'AuditingFail': auditingFail,
    'AuditingSucess': auditingSucess,
    'AuditingLoading': auditingLoading
  }
}
</script>

<style>
 .auditing {
  width: 100%;
  /* height: 70%; */
  top: 10%;
  position: relative;
}
.auditing-contents {
  height: 50%;
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
  /* margin-top: 0.5rem; */
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
</style>
