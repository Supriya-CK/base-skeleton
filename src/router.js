import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function getRouteLayout(name) {
  return () => import(`@/layouts/${name}`);
}

function getRouteComponent(name) {
  return () => import(`@/modules/${name}/${name}`);
}

const DefaultLayout = getRouteLayout('DefaultLayout');
// const DashboardLayout = getRouteLayout('DashboardLayout');

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        redirect: 'home',
      },
      {
        path: 'home',
        component: getRouteComponent('Home'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: getRouteComponent('Dashboard'),
  },
  {
    path: '/auth',
    component: DefaultLayout,
    children: [
      {
        path: '/login',
        component: getRouteComponent('Login'),
      },
    ],
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
