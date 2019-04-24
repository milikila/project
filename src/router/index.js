import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/main/index'
import Manage from '@/components/manager/manage-index'
import User from '@/components/manager/user/user'
import HelpUser from '@/components/manager/user/helpUser'
import Donator from '@/components/help/donator'
import relation from '@/components/about/relation'
import partner from '@/components/about/partner'
import DonatorDetails from '@/components/help/donator-details'
import IndexContent from '@/components/Index/index'
import ManagerPsd from '@/components/manager/manager-account/managerpsd'
import RaiseType from '@/components/manager/raiseType/raise-type'
import Auditing from '@/components/manager/auditing/auditing'
import usersetting from '@/components/help/usersetting'
import raiseUse from '@/components/help/raise-use'
import changeRelation from '@/components/manager/change-about/change-relation'
import changePartner from '@/components/manager/change-about/change-partner'
import resultTotal from '@/components/manager/result/result-total'
import resultManage from '@/components/manager/result/result-manage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      // meta: {allowBack: false},
      children: [
        {
          path: '/usersetting',
          component: usersetting
        },
        {
          path: '/relation',
          component: relation
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
          path: '/donatordetails',
          component: DonatorDetails
        },
        {
          path: '/raiseUse',
          component: raiseUse
        },
        {
          path: '/manage',
          component: Manage,
          children: [{
            path: '/user',
            component: User
          },
          {
            path: '/helpUser',
            component: HelpUser
          },
          {
            path: '/resultTotal',
            component: resultTotal
          },
          {
            path: '/resultManage',
            component: resultManage
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
            path: '/managerPsd',
            component: ManagerPsd
          },
          {
            path: '/RaiseType',
            component: RaiseType
          },
          {
            path: '/auditing',
            component: Auditing
          }
          ]
        }
      ]
    }
  ]
})
// let allowBack = true
// router.beforeEach(async (to, next) => {
//   next()
//   if (to.meta.allowBack !== undefined) {
//     allowBack = to.meta.allowBack
//   }
//   if (!allowBack) {
//     history.pushState(null, null, location.href)
//   }
//   this.$store.dispatch('updateAppSetting', {
//     allowBack: allowBack
//   })
// })
