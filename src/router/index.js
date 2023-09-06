import { createRouter, createWebHistory } from 'vue-router'
import Listing from '../views/Listing.vue'
import Create from '../views/Create.vue'
import Students from '../views/Students.vue'
import Qoutes from '../views/Qoutes.vue'
import Dashbaord from '../views/Dashboard'
import AddStudent from '../views/AddStudent'
import Edit from '../views/Edit'

const routes = [
  {
    path: '/',
    name: 'Lisitng',
    component: Listing
  },
  {
    path: '/create',
    name: 'Create',
    component: Create

  }
  ,
  {
    path: '/Students',
    name: 'student',
    component: Students

  }
  ,
  {
    path: '/Qoutes',
    name: 'Qoutes',
    component: Qoutes

  }
  ,
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashbaord

  }
  ,
  {
    path: '/AddStudent',
    name: 'AddStudent',
    component: AddStudent

  }
  ,
  {
    path: '/Edit/:id',
    name: 'Edit',
    component: Edit

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
