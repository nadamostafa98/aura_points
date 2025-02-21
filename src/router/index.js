//import necessary methods from vue-router
import Vue from 'vue';
import VueRouter from 'vue-router';
/* Create a new router with an array of all the possible paths that will be used throughout the project */


  //array of all routes, each has a name to be easily identified in the code, a path and the component vue that id redirects to 
  Vue.use(VueRouter);

  const routes = [ 
    {
      path: '/',
      name: 'homepage',
      component: () => import('../components/HomePage.vue'),
      props:true
    },
  ];

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });

export default router;
