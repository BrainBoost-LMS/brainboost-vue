import { createRouter, createWebHistory } from 'vue-router';
import RegistrationPage from './src/views/RegistrationPage.vue';

const routes = [
  {
    path: '/register',
    name: 'RegistrationPage',
    component: RegistrationPage,
    meta: { title: 'BrainBoost - Register' }
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'BrainBoost';
  next();
});
export default router;