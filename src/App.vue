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
    </div>

</template>

<script>

    import headComponent  from './components/header.vue'
    import footerComponent from './components/footer.vue'
    import store from './vuex/store'
    import { increment,decrement } from './vuex/action'
    export default {
      data:function(){
         return { showMenu: true}
      } ,
      store:store,
      components:{
         vHeader: headComponent,
         vFooter: footerComponent
      },
      computed:{
          showMenu:function(){
              //this.$route.name !=='question' ||
              return  this.$route.name !=='random' ;
          }
      }
    }

</script>

<style>
    .menu {float: left;width: 200px;  border:1px solid #999;}
    .menu a{display: block;width:200px;background-color: #CCC;text-align: center;
        line-height: 60px;border-bottom: 1px solid #999;cursor: pointer;color: green;}
    .menu  a.v-link-active{color: #ff7800}

</style>
