<template>
    <div class="random">
        <div>
            <span class="nav"   v-bind:class="{'selected' : nav_tab }" @click="toggleNav('chapter')">章节</span>
            <span class="nav"   v-bind:class="{'selected' : !nav_tab }" @click="toggleNav('knowledge')">知识</span>
        </div>
        {{ new_class_id }}
        <div class="content" v-show="nav_tab">
            <div class="grade">
                <div class="grade-child" @click="showGrade">1</div>
                <div class="grade-child">2</div>
                <div class="grade-child">3</div>
                <div class="grade-child">4</div>
                <div class="grade-child">5</div>
                <div class="grade-child">6</div>
                <div class="grade-child">7</div>
                <div class="grade-child">8</div>
            </div>
            <div>&nbsp;</div>
            <div>
                {{ countA }}
                <!--<span class="operate" @click="increment">+</span><input v-model="countC" class="text"/><span class="operate" @click="decrement">-</span><br/>-->
                <!--<span class="operate" @click="increment">+</span><input v-model="countB" class="text"/><span class="operate" @click="decrement">-</span><br/>-->
                <span class="operate" @click="increment">+</span><input v-model="countA" class="text"/><span class="operate" @click="decrement">-</span><br/>
                <span class="operate" @click="increment">+</span><input v-model="count" class="text"/><span class="operate" @click="decrement">-</span><br/>
            </div>
        </div>
        <div class="content knowledge" v-show="!nav_tab">这里是知识</div>
    </div>


</template>
<style>
    .random{float: left}
    .random .nav{display: inline-block;margin: 0 24px;width: 100px;line-height:60px;background-color: #CCC;text-align: center;cursor: pointer}
    .nav.selected{background-color: #ff7800;color: #FFF;font-size: 20px;}
    .content{border: solid #FF7800;width: 1000px;height: 800px;margin-top: 2em;padding: 1em}
    .knowledge{border-color:darkgreen}
    .grade-child{
        display: inline-block;width: 80px;line-height: 3.0;border: 1px solid #CCC; margin-right: 2em;
        text-align: center;font-weight: 800;
    }
    .text{width:80px;height: 30px;vertical-align: middle;margin: 6px 24px;text-align: center}
    .operate{height: 30px;display: inline-block;width: 30px;border: 1px solid #CCC;line-height: 30px;text-align: center;cursor: pointer;}

</style>
<script>
    import { increment,decrement} from '../vuex/action'

    export default{
        data(){
            return {
                nav_tab:true,
                numberA:0,
                numberB:0,
                numberC:0,
                numberD:0,
                new_class_id:''
            }
        },
        methods: {
            toggleNav:function(type) {
                this.nav_tab = (type=='chapter'?true:false);

            },
            plus:function(ele) {
                if(ele == 'A') this.numberA = parseInt(this.numberA) + 1;
                if(ele == 'B') this.numberB = parseInt(this.numberB) + 1;
                if(ele == 'C') this.numberC = parseInt(this.numberC) + 1;
                if(ele == 'D') this.numberD = parseInt(this.numberD) + 1;
            },
            minus:function(ele) {
                if(ele == 'A') this.numberA = parseInt(this.numberA) - 1;
                if(ele == 'B') this.numberB = parseInt(this.numberB) - 1;
                if(ele == 'C') this.numberC = parseInt(this.numberC) - 1;
                if(ele == 'D') this.numberD = parseInt(this.numberD) - 1;
            },
            showGrade:function() {
                this.new_class_id =  Math.ceil(Math.random()*100);
            }
        },
        vuex:{
            getters: {
                count: function(state){ return state.count; },
                countA:function(state){ return state.count },
                countB:function(state){ return state.count },
                countC:function(state){ return state.count }
            },
            actions: {
                increment,decrement
            }
        }
    }
</script>
