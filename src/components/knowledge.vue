<template>
    <div>
        <button @click="diyChange">{{ isDiy?'自定义':'取消自定义'}}</button>
        <div class="row" v-if="isDiy">每小题<input type="text" v-model="singleScore" class="score" /> </div>
        <div class="row" v-if="!isDiy">
            <p v-for="n in 10">第（{{n+1}}）题 <input type="text" class="score"  v-model="multScore[n]" value="10"/> </p>
        </div>

        <div>输出结果：{{ multScore | json}}</div>

        <button class="submit" @click="dataSubmit">保存</button>
    </div>


</template>
<style>
   .row{line-height: 36px;}
   .score{height: 24px;text-align: center}
   .submit{width: 200px;height: 30px;}

</style>
<script>

    import { API_ROOT } from '../config'

    export default{
        data(){
            return{
                singleScore:5,
                multScore:[],
                isDiy:true
            }
        },
        methods:{
          diyChange:function(){
              this.isDiy = !this.isDiy;
          },
          dataSubmit:function(){

              //--
              this.$http.post(API_ROOT+'/test/app',{app:12}).then(function(response){
                     alert('保存成功');
              },function(response){

              });
          }
        },
        components:{

        }
    }
</script>
