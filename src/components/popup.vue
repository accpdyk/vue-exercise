<template>
    <div id="mask">

    </div>
    <div class="popup">保存成功</div>
</template>
<style>
   #mask{position: fixed;top: 0;width: 100%;height: 100%;background-color:#CCC;opacity: .5 }
  .popup{    position: absolute;  width: 600px;  border: 1px solid #333;  background-color: #FFF;
      left: 50%;  margin-left: -300px;  top: 200px;  height: 100px;text-align: center;padding-top: 2em
  }
</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{ }
    }
</script>
