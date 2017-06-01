<template>
  <div class="main">
    <div class="right">
      <div class="operate"><button class="btn btn-primary">选择题</button></div>
      <div class="operate"><button class="btn btn-success">简答题</button></div>
       <div class="operate">
         <input type="text" class="text" v-model="childNum">
       </div>
    </div>
    <div class="left">
      <div class="objective">
        <div class="question" v-for="n in 10"><span class="index">{{n}}.</span><span>[ A ]</span><span>[ B ]</span><span>[ C ]</span><span>[ D ]</span></div>
      </div>
      <div class="objective" v-for="item in objective">
        <div>{{item.name}}({{item.total}}分)</div>
        <template v-for="(n,index) in item.children">
          <div class="ver">
            <span class="index">{{index+1}}</span>
            <span  @click="showPoint">[ A ]</span>
            <span  @click="showPoint">[ B ]</span>
            <span  @click="showPoint">[ C ]</span>
            <span  @click="showPoint">[ D ]</span>
          </div>
          <div class="ver" v-if="(index+1)%5 ==0"></div>
        </template>
      </div>
      <div class="subjective" v-for="(item,s_i) in subjective">
        <div>{{item.name}}(共计{{item.num}}题，{{item.total}}分)</div>
        <div v-for="child in item.children" class="child">
            {{child.index}}({{child.score}}分)
        </div>
      </div>
      <div class="test">
        <div>听力题</div>
        <div class="parent">
          <div class="line" v-for="(item,index) in childRows" :style="item" @click="showPoint">{{index+1}}.</div>
        </div>
      </div>
      <div class="resize-area" :style="resizeStyle">
        <div class="operate"></div>
      </div>
      <!--<div contenteditable="true" class="edit-div"  @webkitEditableContentChanged="show" @blur="editDone">19</div>-->
    </div>

 </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{width: 1600px;height: 900px;   position: relative;}
  .right{
    border-right: 1px solid #CCC;
    width: 200px;
    position: fixed;
    height: 100%;
    padding-top: 12px;
  }
  .left{
    margin-left: 210px;
    height: 800px;
    overflow: hidden;
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
    margin-top: 24px;
  }
  .objective .question{line-height: 20px;margin: 0;padding: 0;font-size: 12px;color: red;display: inline-block;margin-right: 12px}
  .objective .question span{margin-left: 6px}
  .question .index{color: #333;display: inline-block;width: 20px;text-align: center}
  .ver{display: inline-block;line-height: 1.0;text-align: center;width: 24px}
  .ver span{font-size: 12px;color: red;display: inline-block;width: 24px;}
  .ver .index{color: #333}
  .subjective,.test{border: 1px solid #333;width: 49%;margin: 12px 0;padding: 12px;line-height: 2.0}
  .subjective .child{border-bottom: 1px solid red;}
  .subjective .other{
    width: 100%;height: 200px;border: 1px solid red;
  }
  .test{
    display:table;  /* 调教webkit*/
    word-spacing:-1em;
  }.test .parent{width:650px}
  .line{line-height: 24px;border-bottom: 1px solid red;display: inline-block; word-spacing:0; }
  .resize-area{
    position: absolute;
    border:1px dashed #999;
    height: 24px;
  }
  .resize-area .operate{
    right: -5px;
    width: 10px;
    background-color: cadetblue;
    position: absolute;
    height: 24px;
    top:50%;
    margin-top: -12px;
    cursor: e-resize;
  }
</style>

<script>
  import Vue from 'vue';
  import Hammer from 'hammer';
  Vue.use(Hammer);

  export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      paper:{"paper":{"question":[{"name":"选择题","score":"3","diy":"N","num":"12","nameError":"","numError":"","scoreError":"","total":"36","type":"objective","children":[{"index":1,"o_index":1,"score":"3","id":"2295"},{"index":2,"o_index":2,"score":"3","id":"2296"},{"index":3,"o_index":3,"score":"3","id":"2297"},{"index":4,"o_index":4,"score":"3","id":"2298"},{"index":5,"o_index":5,"score":"3","id":"2299"},{"index":6,"o_index":6,"score":"3","id":"2300"},{"index":7,"o_index":7,"score":"3","id":"2301"},{"index":8,"o_index":8,"score":"3","id":"2302"},{"index":9,"o_index":9,"score":"3","id":"2303"},{"index":10,"o_index":10,"score":"3","id":"2304"},{"index":11,"o_index":11,"score":"3","id":"2305"},{"index":12,"o_index":12,"score":"3","id":"2306"}]},{"name":"填空题","score":"3","diy":"N","num":"6","nameError":"","numError":"","scoreError":"","total":"18","type":"subjective","children":[{"index":13,"s_index":1,"score":"3","id":"2308"},{"index":14,"s_index":2,"score":"3","id":"2309"},{"index":15,"s_index":3,"score":"3","id":"2310"},{"index":16,"s_index":4,"score":"3","id":"2311"},{"index":17,"s_index":5,"score":"3","id":"2312"},{"index":18,"s_index":6,"score":"3","id":"2313"}]},{"name":"解答题","children":[{"score":"8","error":"","index":19,"s_index":7,"id":"2315"},{"score":"8","error":"","index":20,"s_index":8,"id":"2316"},{"score":"8","error":"","index":21,"s_index":9,"id":"2317"},{"score":"10","error":"","index":22,"s_index":10,"id":"2318"},{"score":"10","error":"","index":23,"s_index":11,"id":"2319"},{"score":"10","error":"","index":24,"s_index":12,"id":"2320"},{"score":"12","error":"","index":25,"s_index":13,"id":"2321"}],"score":"","diy":"Y","num":"7","nameError":"","numError":"","scoreError":"","total":"66","type":"subjective"}],"question_index":{"restart":"N","childIndexFirst":"N"}}},
      childNum:1,
      parentLength:650,
      childMidLength:5,
      resizeStyle:{}
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
    },
    addClass:function(event){
      event.target.style.borderColor='#CCC'
    },
    showPoint:function(event){
      let obj = event.target.getBoundingClientRect();
      console.log(obj);
      this.resizeStyle = {
        width:event.target.style.width,
        top:obj.top+'px',
        left:obj.left+'px'
      };
    },
    addEvent( obj, type, fn ) {
      if ( obj.attachEvent ) {
        obj['e'+type+fn] = fn;
        obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
        obj.attachEvent( 'on'+type, obj[type+fn] );
      } else
        obj.addEventListener( type, fn, false );
    },
    removeEvent( obj, type, fn ) {
      if ( obj.detachEvent ) {
        obj.detachEvent( 'on'+type, obj[type+fn] );
        obj[type+fn] = null;
      } else
        obj.removeEventListener( type, fn, false );
    }
  },
  created(){

  },
  computed:{
    objective:function(){
      let temp = [];
      this.paper.paper.question.forEach(function(item){
        if(item.type=='objective') temp.push(item);
      });
      return temp;
    },
    subjective:function(){
      let temp = [];
      this.paper.paper.question.forEach(function(item){
        //if(item.type =='subjective') temp.push(item)
      });
      return temp;
    },
    childRows:function(){
      let temp = [];
      if(this.childNum ==1){
        temp.push({width:'100%'});
        return temp;
      }
      let total = this.parentLength - this.childMidLength*this.childNum;
      for(let i=0;i<this.childNum;i++){
        let obj = {
          width:(total/this.childNum)+'px',
        };
        if(i>0)obj.marginLeft = '5px';
        temp.push(obj);
      }
      return temp;
    }
  }
}



</script>


