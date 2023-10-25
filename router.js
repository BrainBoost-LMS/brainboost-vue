import { createRouter, createWebHistory } from 'vue-router';
import RegistrationPage from './src/views/RegistrationPage.vue';

const routes = [
  {
    path: '/register',
    name: 'RegistrationPage',
    component: RegistrationPage,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;