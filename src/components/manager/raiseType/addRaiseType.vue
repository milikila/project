<template>
  <div class="addraiseType">
    <label>添加项目类型：</label>
    <Input v-model="modelValue" placeholder="Enter something..." style="width: 300px" />
    <Button type="primary" @click="savetype()">保存</Button>
    <div class="addraiseType">
      <label>想要修改项目类型：</label>
      <Select v-model="model" style="width:200px" @on-change="selectList(model)">
        <Option v-for="(item, index) in savetype"  :value="item.id" :key="index">{{ item.typename }}</Option>
      </Select>
      <div>
    <div class="addraiseType">
      <label>修改成的项目类型：</label>
      <Select v-model="mode2" style="width:200px" @on-change="selectLists(mode2)">
        <Option v-for="(item, index) in updatetype" :value="item.value" :key="index">{{ item.value }}</Option>
      </Select>
      </div>
    </div>
      <Button type="primary" @click="changetype()">保存</Button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  data () {
    return {
      modelValue: '',
      valueid: 1,
      updateid: null,
      model: null,
      mode2: '',
      savetype: [
      ],
      updatetype: [
        {
          value: '桌椅'
        },
        {
          value: '文具'
        },
        {
          value: '玩具'
        }
      ]
    }
  },
  created () {
    this.selecttype ()
  },
  methods: {
    savetype () {
      this.addType()
    },
    changetype () {
      this.updateType ()
    },
    selectList () {
      console.log(this.model)
    },
    selectLists () {
    },
    selecttype () {
      axios.post('http://localhost/type/getTypes'
        ).then((res) => {
        if (res.data.message === 'true') {
          this.$Message.info('查询成功')
          this.savetype = res.data.data
        } else {
          this.$Message.info('查询失败')
        }
      }).catch((res) => {
        this.$Message.info('接口返回失败')
      })
    },
    addType () {
      axios.post('http://localhost/type/saveType', qs.stringify({
        typename: this.modelValue
      })).then((res) => {
        if (res.data.message === 'true') {
          this.$Message.info('添加成功')
        } else {
          this.$Message.info('添加失败')
        }
      }).catch((res) => {
        this.$Message.info('接口返回失败')
      })
    },
    updateType () {
      axios.post('http://localhost/type/updateType', qs.stringify({
        id: this.model,
        typename: this.mode2
      })).then((res) => {
        if (res.data.message === 'true') {
          this.$Message.info('添加成功')
        } else {
          this.$Message.info('添加失败')
        }
      }).catch((res) => {
        this.$Message.info('接口返回失败')
      })
    }
  }
}
</script>
<style>

</style>
