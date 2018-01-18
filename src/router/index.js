import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Meetup from '@/components/Meetup/Meetup'
import Register from '@/components/Student/Register'
import Board from '@/components/Tutor/Board'
import We from '@/components/Tutor/We'
import Createsheet from '@/components/Tutor/Createsheet'
import Sheet from '@/components/Tutor/Sheet'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup,
      beforeEnter: AuthGuard
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
     {
       path: '/test',
       name: 'We',
       component: We
     },

    {
      path: '/createsheet',
      name: 'Createsheet',
      component: Createsheet
    },
     {
       path: '/sheet',
       name: 'Sheet',
       component: Sheet
     }

  ],
  mode: 'history'
})
