import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/main/index'
import Manage from '@/components/manager/manage-index'
import User from '@/components/manager/user/user'
import Donator from '@/components/help/donator'
import relation from '@/components/about/relation'
import partner from '@/components/about/partner'
import introduce from '@/components/about/introduce'
import IndexContent from '@/components/Index/index'
import RaiseType from '@/components/manager/raiseType/raise-type'
import addraiseType from '@/components/manager/raiseType/addraisetype'
import usersetting from '@/components/help/usersetting'
import changeRelation from '@/components/manager/change-about/change-relation'
import changePartner from '@/components/manager/change-about/change-partner'
import resultTotal from '@/components/manager/result/result-total'
import auditingLoading from '@/components/manager/auditing/auditing-loading.vue'
import auditingFail from '@/components/manager/auditing/auditing-fail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          name: 'usersetting',
          path: '/usersetting',
          component: usersetting
        },
        {
          path: '/relation',
          component: relation
        },
        {
          path: '/introduce',
          component: introduce
        },
        {
          path: '/partner',
          component: partner
        },
        {
          path: '/IndexContent',
          component: IndexContent
        },
        {
          path: '/donator',
          component: Donator
        },
        {
          path: '/manage',
          component: Manage,
          children: [{
            path: '/user',
            component: User
          },
          {
            path: '/resultTotal',
            component: resultTotal
          },
          {
            path: '/changeRelation',
            component: changeRelation
          },
          {
            path: '/changePartner',
            component: changePartner
          },
          {
            path: '/RaiseType',
            component: RaiseType
          },
          {
            path: '/addraiseType',
            component: addraiseType
          },
          {
            path: '/auditingLoading',
            component: auditingLoading
          },
          {
            path: '/auditingFail',
            component: auditingFail
          }
          ]
        }
      ]
    }
  ]
})
