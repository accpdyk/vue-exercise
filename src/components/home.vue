<template>
  <div class="main">
    <div class="right">
      <div class="operate"><button class="btn btn-primary">选择题</button></div>
      <div class="operate"><button class="btn btn-success">简答题</button></div>

    </div>
    <div class="left">
      <div class="objective">
        <div class="question" v-for="n in 10"><span class="index">{{n}}.</span><span>[ A ]</span><span>[ B ]</span><span>[ C ]</span><span>[ D ]</span></div>
        <div style="border-bottom: 5px dashed">&nbsp;</div>
      </div>

      <!---->
      <!--<div contenteditable="true" class="edit-div"  @webkitEditableContentChanged="show" @blur="editDone">19</div>-->
    </div>

 </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{width: 1600px;height: 900px}
  .right{
    border-right: 1px solid #CCC;
    width: 200px;
    position: fixed;
    height: 100%;
    padding-top: 12px;
  }
  .left{
    margin-left: 210px;
  }
  .edit-div{
    -webkit-user-modify: read-write-plaintext-only;
    border:solid;width: 200px;height: 200px;text-align: left;
  }
  .operate{margin-bottom: 12px}
  .objective{
    border: 1px solid #333;
    width: 49%;
    padding: 1em;
  }
  .objective .question{line-height: 20px;margin: 0;padding: 0;font-size: 12px;color: red;display: inline-block;margin-right: 12px}
  .objective .question span{margin-left: 6px}
  .question .index{color: #333;display: inline-block;width: 20px;text-align: center}
</style>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isMouseDown:'N',
      num:1
    }
  },
  methods: {
    addText:function(){
      this.num++;
      console.log(this.num);
    },
    show:function(event){
      console.log(event.target)
    },
    editDone:function(event){
      console.log(event.target)
    }

  }
}


var selection = window.getSelection();

</script>


