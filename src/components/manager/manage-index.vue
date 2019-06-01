<template>
  <div class="manage">
    <header class="title">管理员</header>
    <div class="manage-index">
      <Row class="Row">
        <Menu :theme="theme3" accordion>
          <Submenu name="用户管理">
            <template slot="title">
              <Icon type="ios-people"/>用户管理
            </template>
            <MenuItem name="账户管理" to="/user">账户管理</MenuItem>
          </Submenu>
          <Submenu name="募捐项目管理">
            <template slot="title">
              <Icon type="ios-happy-outline"/>募捐项目管理
            </template>
            <MenuItem name="募捐项目管理" to="/RaiseType">募捐项目管理</MenuItem>
            <MenuItem name="募捐项目类型增加" to="/addraiseType">募捐项目类型</MenuItem>
          </Submenu>
          <Submenu name="募捐审核">
            <template slot="title">
              <Icon type="ios-heart"/>募捐审核
            </template>
            <MenuItem name="募捐审核" to="/auditingLoading">募捐通过审核</MenuItem>
            <MenuItem name="募捐未通过审核" to="/auditingFail">募捐未通过审核</MenuItem>
          </Submenu>
          <Submenu name="募捐结果统计">
            <template slot="title">
              <Icon type="md-stats" />募捐结果统计
            </template>
            <MenuItem name="募捐结果统计" to="/resultTotal">募捐结果统计</MenuItem>
          </Submenu>
          <Submenu name="修改网站介绍">
            <template slot="title">
              <Icon type="md-stats" />修改联系方式
            </template>
            <MenuItem name="修改网站介绍" to="/changeRelation">修改联系方式</MenuItem>
            <MenuItem name="修改我们伙伴页面" to="/changePartner">修改我们伙伴页面</MenuItem>
          </Submenu>
        </Menu>
      </Row>
      <div class="manage-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      theme3: 'light'
    }
  }
}
</script>
<style scoped>
* {
  font-size:15px;
}
.manage-index {
  display: flex;
  top: 3.9rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  width: 100%;
  height: 1000px;
}
/* .title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(39, 63, 201);
  font-size: 40px;
} */
.manage-content {
  display: flex;
  width: 90%;
  margin-left: 20px;
}
</style>
