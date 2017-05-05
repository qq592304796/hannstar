import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home.vue'

/*导航router*/
import merchant from '../page/merchant/merchant.vue'
import Merchandise from '../page/Merchandise/Merchandise.vue'
import user from '../page/user/user.vue'
import adverList from '../page/Advertising/adverList.vue'

import eFriend from '../components/userChild/eFriend.vue'

Vue.use(Router)

export default new Router({
	linkActiveClass:'active',
	routes:[
		{
			path:'/home',
			component:home,
			children:[
				{
					path:'user',component:user,
					children:[
						{path:'eFriend',component:eFriend}
					]
				},
				{
					path:'merchant',component:merchant
				},
				{
					path:'adverList',component:adverList
				},
				{
					path:'Merchandise',component:Merchandise
				}
			]
		},


	]
})
