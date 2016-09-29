import Vue from 'vue'
import VueValidator from 'vue-validator';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'


Vue.use(VueValidator);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true ;




const router = new VueRouter({
    hashbang:false
});


router.map({
    // '/foo': {
    //   component: userlist,
    //   subRoutes:{
    //       '/bar': {
    //           component: Bar
    //       }
    //   }
    // },
    '/setting':{
        'component': function(resolve) {
            require(['./components/setting.vue'],resolve);
        }
    },
    '/user/:id': {
        name:'user',
        'component': function(resolve) {
            require(['./components/userlist.vue'],resolve);
        }
    },
    '/history': {
        'component': function(resolve) {
            require(['./components/history.vue'],resolve);
        }
    },
    '/exam-paper': {
        'component': function(resolve) {
            require(['./components/exam_paper.vue'],resolve);
        }
    },
    '/question/:type': {
        name: 'question',
        'component': function(resolve) {
            require(['./components/question.vue'],resolve);
        }
    },
    '/random/:type': {
        name:'random',
        'component': function(resolve){
            require(['./components/random.vue'],resolve);
        }
    }

});

//--请求前路由处理

Vue.http.interceptors.push((request, next) => {
    router.app.loading = true;
    next((response) => {
        router.app.loading = false;
        return response
    });
});

router.start(App, '#app');