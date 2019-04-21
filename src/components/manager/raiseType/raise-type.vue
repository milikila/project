<template>
  <div id="raiseMoney">
    <div class="raiseMoney-add">
      <Button type="info" @click="addInfo()">增加</Button>
      <Input search enter-button class="raiseMoney-search" placeholder="Enter something..." />
    </div>
    <Table border ref="selection" :columns="columns7" :data="data6"></Table>
    <div class="raiseMoney-confirm" v-show="showAlert">
      <div class="raiseMoney-confirm-contents">
        <div class="raiseMoney-confirm-title">增加捐助种类</div>
        <div class="raiseMoney-confirm-list">
          <label class="raiseMoney-confrim-list-name">名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</label>
          <Input v-model="value14" placeholder="Enter something..." clearable style="width: 200px" />
        </div>
        <div>
          <label>项目介绍</label>
          <textarea style="width: 200px; height: 100px"></textarea>
        </div>
        <Button class="raiseMoney-confrim-sucess" type="primary" @click="confirm()">完成</Button>
      </div>
    </div>
    <div class="raiseMoney-confirm" v-show="chanage">
      <div class="raiseMoney-chanage"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showAlert: false,
      chanage: false,
      value14: '',
      columns7: [
        {
          title: '种类',
          key: '种类',
          width: 300,
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: 'Action',
          key: 'action',
          width: 200,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data6: [
        {
          name: '1'
        },
        {
          name: '2'
        },
        {
          name: '3'
        }
      ]
    }
  },
  methods: {
    remove (index) {
      // this.data6.splice(index, 1)
    },
    addInfo () {
      this.showAlert = true
    },
    show (index) {
    },
    confirm () {
      this.showAlert = !this.showAlert
    }
  }
}
</script>

<style>
.raiseMoney {
  width: 100%;
  /* height: 100%; */
  overflow: auto;
}
.raiseMoney-confirm {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 90%;
  background: rgba(0,0,0,0.1);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.raiseMoney-add {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}
.raiseMoney-confirm-contents {
  background: #fff;
  width: 30%;
  height: 50%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
}
.raiseMoney-confirm-title {
  font-size: 15px;
  background: #ccc;
  width: 100%;
  padding: 3px  5px;
  height: 10%;
}
.raiseMoney-confirm-list {
  margin: 10px 0;
}
.raiseMoney-confrim-list-name {
  text-align: center;
}
.raiseMoney-confrim-sucess {
  width: 80%;
  margin-top: 20px;
}
.raiseMoney-change {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
