import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//组件导入
import setting from './components/setting.vue'


// new Vue({
//   el: 'body',
//   components: { App }
// })


Vue.use(VueRouter);


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
    }

});



router.start(App, '#app');