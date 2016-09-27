import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
//组件导入
import setting from './components/setting.vue'


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



router.start(App, '#app');