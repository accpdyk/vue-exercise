<template>
    <div>
        <v-header></v-header>
        <div class="menu" v-if="showMenu">
            <a v-link="{ path: '/exam-paper' }">出题组卷</a>
            <a v-link="{ path: '/history' }">历史出卷</a>
            <a v-link="{ name: 'user',params:{id:123} }">私有题库</a>
            <a v-link="{ path: '/setting'}">设置中心</a>
        </div>
        <!-- 路由外链 -->
        <router-view></router-view>
        <v-footer></v-footer>
        <div v-show="loading" class="loading">数据请求中。。。</div>
    </div>

</template>

<script>

    import headComponent  from './components/header.vue'
    import footerComponent from './components/footer.vue'
    import store from './vuex/store'
    import { increment,decrement } from './vuex/action'
    export default {
      data:function(){
         return { showMenu: true,routeHideName:['question','random'],loading:false}
      } ,
      store:store,
      components:{
         vHeader: headComponent,
         vFooter: footerComponent
      },
      computed:{
          showMenu:function(){
              return !this.routeHideName.includes(this.$route.name);
              //return  this.$route.name !=='random' ;
          }
      }
    }

</script>

<style>
    .menu {float: left;width: 200px;  border:1px solid #999;}
    .menu a{display: block;width:200px;background-color: #CCC;text-align: center;
        line-height: 60px;border-bottom: 1px solid #999;cursor: pointer;color: green;}
    .menu  a.v-link-active{color: #ff7800}
    .loading{position: fixed;opacity: .5;top: 0;width:100%;color: red;height: 100px;z-index: 10;text-align: center}
    /* 必需 */
    .expand-transition {
        transition: all .3s ease;
        height: 30px;
        padding: 10px;
        overflow: hidden;
    }

    /* .expand-enter 定义进入的开始状态 */
    /* .expand-leave 定义离开的结束状态 */
    .expand-enter, .expand-leave {
        height: 0;
        padding: 0 10px;
        opacity: 0;
    }

</style>
