<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div style="padding:2em">
        <button class="grade-child" @click="showSelect('a')" v-bind:class="{'selected':selectShow.a}">AAA</button>
        <button class="grade-child" @click="showSelect('b')" v-bind:class="{'selected':selectShow.b}">BBB</button>
        <button class="grade-child" @click="showSelect('c')" v-bind:class="{'selected':selectShow.c}">CCC</button>
        <div>
            <div v-if="selectShow.c" transition="expand">
                <span>选项111</span>
                <span class="operate" @click="increment('c')">+</span>
                <input v-model="count.c" class="text" />
                <span class="operate" @click="decrement('c')">-</span>
                <span @click="hideSelect('c')">清除</span>
            </div>

            <div v-if="selectShow.a" transition="expand">
                <span>选项222</span>
                <span class="operate" @click="increment('a')">+</span>
                <input v-model="count.a" class="text"/>
                <span class="operate" @click="decrement('a')">-</span>
                <span @click="hideSelect('a')">清除</span>
            </div>

            <div v-if="selectShow.b" transition="expand">
                <span>选项333</span>
                <span class="operate" @click="increment('b')">+</span>
                <input v-model="count.b" class="text"/>
                <span class="operate" @click="decrement('b')">-</span>
                <span @click="hideSelect('b')">清除</span>
            </div>


        </div>
    </div>
</template>
<style>
  .grade-child.selected{background-color: #FF7800;color:#FFF}
</style>
<script>

    import {increment,decrement } from '../vuex/action'
    export default{
        data(){
            return{
                selectShow:{ a:false,b:false,c:false},
            }
        },
        methods:{
          showSelect:function(element) {
              this.selectShow[element] = true;
          },
          hideSelect:function(element) {
              this.selectShow[element] = false;
          }
        },
        vuex:{
            getters: {
                count: function(state){ return state.count }
            },
            actions: {
                increment,decrement
            }
        }
    }
</script>
