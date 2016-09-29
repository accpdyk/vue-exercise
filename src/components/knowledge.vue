<template>
    <button @click="diyChange">{{ isDiy?'自定义':'取消自定义'}}</button>
    <div class="row" v-if="isDiy">每小题<input type="text" v-model="singleScore" class="score" /> </div>
    <div class="row" v-if="!isDiy">
        <p v-for="n in 10">第（{{n+1}}）题 <input type="text" class="score" value="3" /> </p>
    </div>
</template>
<style>
   .row{line-height: 36px;}
   .score{height: 24px;text-align: center}
</style>
<script>

    export default{
        data(){
            return{
                singleScore:5,
                isDiy:true
            }
        },
        methods:{
          diyChange:function(){
              this.isDiy = !this.isDiy;
          }
        },
        components:{ }
    }
</script>
