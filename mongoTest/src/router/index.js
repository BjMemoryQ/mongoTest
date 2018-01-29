import Vue from 'vue'
import Router from 'vue-router'
import message from '@/components/message'
import login from '@/components/login'
import logup from '@/components/logup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'message',
      component: message,
      children: [{
      	path: '/login',
    	name: 'login',
    	component: login
      }, {
    	path: '/logup',
    	name: 'logup',
    	component: logup
	  }]
    }
  ]
})
