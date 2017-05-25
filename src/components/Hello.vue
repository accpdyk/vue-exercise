<template>
  <div class="hello">
    <div class="main">
      <div class="child" @mousedown="setDown" >
        ddd
      </div>
    </div>
    <svg id="svg">
      <rect x="100" y="50" width="300" height="200" style="fill: #ff7800;stroke-width:3;stroke:rgb(0,0,0)" @click="show" />
      <g fill="none" stroke="black"  >
        <title>SVG Title Demo example</title>
        <path stroke="blue" d="M5 20 1215 0" />
        <path stroke-dasharray="5,10" d="M100 350 1000 350" stroke-width="1" stroke="red" id="line"/>
      </g>
      <use xlink:href="#line" x="50" y="50"/>
      <text x="10" y="20" style="fill:red;">这里有几行文字：
        <tspan x="10" y="45">这是第一行文字。</tspan>
        <tspan x="10" y="70">第二行文字在这里。</tspan>
      </text>
    </svg>
 </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #svg{
    width: 900px;height: 300px;border: solid;
  }
  .main{
    width: 1000px;height: 600px;background-color: antiquewhite;
    border:solid;position: relative;
  }
  .child{
    position: absolute;right: -15px;
    top:300px;background-color: #FF7800;width: 30px;height: 30px;
    cursor: e-resize;
  }
</style>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isMouseDown:'N'
    }
  },
  methods: {
    show:function(){
      alert('test')
    },
    setDown:function(event){
      console.log(event);
    },
    resizeDiv:function(event){

      if(this.isMouseDown == 'Y'){
        console.log(this.isMouseDown);
     }
    }

  }
}
</script>


