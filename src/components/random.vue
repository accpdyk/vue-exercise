<template>
    <div class="random">
        <div>
            <span class="nav"   v-bind:class="{'selected' : nav_tab }" @click="toggleNav('chapter')">章节</span>
            <span class="nav"   v-bind:class="{'selected' : !nav_tab }" @click="toggleNav('knowledge')">知识</span>
        </div>
        <div class="content" v-show="nav_tab">
            <div class="grade">
                <div class="grade-child" @click="get_grade_one('one')">1</div>
                <div class="grade-child" @click="get_grade_one('two')">2</div>
                <div class="grade-child" @click="get_grade_one('three')">3</div>
                <div class="grade-child" @click="get_grade_one('four')">4</div>
                <div class="grade-child" @click="get_grade_one('five')">5</div>
                <div class="grade-child" @click="get_grade_one('six')">6</div>
                <div class="grade-child" @click="get_grade_one('seven')">7</div>
                <div class="grade-child" @click="get_grade_one('eight')">8</div>
            </div>
            <div>
                 {{content|json}}
            </div>
            <div>&nbsp;</div>
            <hr/>
            <random-foot></random-foot>
        </div>
        <div class="content knowledge" v-show="!nav_tab">
          <!-- 自定义知识--->
          <knowledge></knowledge>
        </div>
    </div>


</template>
<style>
    .random{float: left}
    .random .nav{display: inline-block;margin: 0 24px;width: 100px;line-height:60px;background-color: #CCC;text-align: center;cursor: pointer}
    .nav.selected{background-color: #ff7800;color: #FFF;font-size: 20px;}
    .content{border: solid #FF7800;width: 1000px;height: 500px;margin-top: 2em;padding: 1em}
    .knowledge{border-color:darkgreen}
    .grade-child{
        display: inline-block;width: 80px;line-height: 3.0;border: 1px solid #CCC; margin-right: 2em;
        text-align: center;font-weight: 800;
        cursor: pointer;
    }
    .text{width:80px;height: 30px;vertical-align: middle;margin: 6px 24px;text-align: center}
    .operate{height: 30px;display: inline-block;width: 30px;border: 1px solid #CCC;line-height: 30px;text-align: center;cursor: pointer;
        -webkit-user-select: none;
     }

</style>
<script>

    import randomFoot from './random_foot.vue'
    import knowledge  from './knowledge.vue'

    import { get_grade_one } from '../vuex/action'

    export default{
        data(){
            return {
                nav_tab:true,
                new_class_id:''
            }
        },
        components:{
            randomFoot,knowledge
        },
        methods: {
            toggleNav:function(type) {
                this.nav_tab = (type=='chapter'?true:false);

            }
        },
        vuex:{
            getters:{
              content:function({ random }){return random.grade}
            },
            actions:{
                get_grade_one
            }
        }
    }
</script>
