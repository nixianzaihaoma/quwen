import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Nnews from './views/Nnews'
import Npicture from './views/Npicture'
import Njoke from './views/Njoke'
import Nwork from './views/joke/Nwork.vue'
import Nvideo from './views/joke/Nvideo.vue'
import Nrdpic from './views/joke/Nrdpic.vue'
import Ngif from './views/joke/Ngif.vue'
import Npic from './views/joke/Npic.vue'
import Ntags from './views/new/Ntags'
import Ndetail from './views/new/Ndetail'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            children: [{
                    path: '/',
                    name: 'News',
                    component: Nnews
                },
                {
                    path: 'picture',
                    name: 'Picture',
                    component: Npicture
                },
                {
                    path: 'joke',
                    name: 'Jock',
                    component: Njoke
                }
            ]
        },
        {
            path: '/gif',
            name: 'gif',
            component: Ngif
        },
        {
            path: '/work',
            name: 'work',
            component: Nwork
        },
        {
            path: '/video',
            name: 'video',
            component: Nvideo
        },
        {
            path: '/rdpic',
            name: 'rdpic',
            component: Nrdpic
        },
        {
            path: '/pic',
            name: 'pic',
            component: Npic
        },
        {
            path: '/tags',
            name: 'tags',
            component: Ntags
        },
        {
            path: '/detail',
            name: 'detail',
            component: Ndetail
        }


    ]
})