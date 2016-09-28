<template>
    <div class="exam-paper">
        <div class="field">
            <label>出题组卷:</label>
            <span v-for="(index,type) in examType" @click="selectExamType(index,type.key)" class="{{ index ==selectedIndex?'selected':''  }}">{{ type.name }}</span>
        </div>
        <div class="field">
            <label>出题方式</label>
            <a v-link="{name:'question',params:{ type: 'manual'} }" target="_blank">手工出题</a>
            <span v-link="{name:'random',params:{ type: selectedKeyValue} }" target="_blank">随机出题</span>
        </div>
        <router-view></router-view>
        <p>{{ $route.path}} </p>

    </div>
</template>
<style>
   .field{ text-align: left}
   .field span{display: inline-block;width: 80px;line-height: 30px;background-color: #CCC;margin: 12px;font-size: 12px;cursor: pointer;text-align: center}
   .field span.selected{color:#fff;background-color: orangered}
</style>
<script>

    export default{
        data(){
            return{
                examType:[
                    { key:'banjizuoye',name:'班级作业'},
                    { key:'banjiceshi',name:'班级测试'},
                    { key:'banjizhouce',name:'班级周测'},
                    { key:'quanxiaoyuekao',name:'全校月考'},
                    { key:'quanxiaomoni',name:'全校模拟'},
                    { key:'quanxiaoqizhong',name:'全校期中'}
                ],
                selectedIndex:-1,
                selectedKeyValue:''
            }
        },
        methods: {
            selectExamType:function(index,key) {
               this.selectedIndex = index;
               this.selectedKeyValue = key;
            }
        }
    }
</script>
