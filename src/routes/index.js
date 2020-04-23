import Vue from 'vue';
import VueRouter from 'vue-router';
import NationsList from '../views/NationsList.vue';
import NationsInfo from '../views/NationsInfo.vue';
import NationSearch from '../views/NationsSearch.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/nations',
        },
        {
            path: '/nations',
            component: NationsList,
        },
        {
            path: '/info/:code',
            component: NationsInfo,
        },
        {
            name: 'search',
            path:'/search/:input',
            component: NationSearch,
        },
        /*{
            path: '*',
            redirect: '/nations/all',
        },*/
    ]
});

export default router;