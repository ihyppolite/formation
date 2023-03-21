import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonneDetailsView from '../views/PersonneDetailsView.vue'
import PersonneShowView from '../views/PersonneShowView.vue'
import AdresseView from '@/views/AdresseView.vue'
import TableauView from '../views/TableauView.vue'

const routes = [
  //alias
  {
    path: '/',
    name: 'home',
    component: HomeView,
    alias: ['/home', '/accueil']
  },
  {
    path: '/adresse',
    name: 'adresse',
    component: AdresseView
  },
  {
    path: '/personne',
    props :true ,
    name: 'personne-show',
    component: PersonneShowView
  },
  {
    path: '/tableau/:id',
    props: true,
    name: 'tableau',
    component: TableauView
  },
  {
    path: '/personne/:id',
    props :true ,
    name: 'personne-details',
    component: PersonneDetailsView
  },
 
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  // redirection 
  {
    path: '/person',
    redirect: '/personne'

  },
  {
    path: '/adresse/:rue/:codePostal/:ville',
    redirect: (chemin) => {
      return { path: '/adresse', query: { ...chemin.params } }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
