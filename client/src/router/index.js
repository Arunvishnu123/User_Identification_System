import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/createComponent')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/listComponent')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/editComponent')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
