<template>
    <div>
        <div class="area">
            <div class="resize" id="resize">
                <div class="operate-left" id="left"></div>
            </div>
            <div class="clear"></div>
            <div class="parent">
                <div class="child">A</div>
                <div class="child orange">B</div>
                <div class="child">C</div>
            </div>
        </div>
        <div  style="display: flex">
            <div style=""></div>
        </div>
    </div>
</template>
<style>
.area{
    width: 1400px;height: 600px;border: 2px solid #ddd;
    margin: 60px  auto;
}
    .resize{
        width: 100px;height: 80px;background-color: bisque;
        position: relative;
        top: 100px;left: 100px;
    }
    .operate-left{
        position: absolute;right: -3px;width: 6px;background-color: #ff3228;height: 20px;
        top:30px;cursor: e-resize;
    }
    .operate-top{
        position: absolute;top: -3px;width: 20px;background-color: #ff3228;height: 6px;
        left:40px;cursor: s-resize;
    }
    .clear{clear: both}
    .parent{background-color: #ccc;margin-top: 200px;width: 600px;}
    .child{display: inline-block;width: 200px;text-align: center;}
    .child:first-child{background-color: cadetblue}
    .child:last-child{background-color: rosybrown}
    .orange{background-color: orangered}
</style>

<script>
export default {
  data: function() {
    return {
      startX:0,
      startY:0,
      resizeStartWidth:0

    }
  },
  methods:{
    show(){
      console.log(123);
    },
    startResize(e){
      e.preventDefault();
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.resizeStartWidth = document.getElementById('resize').clientWidth;
      this.addEvent(document,'mousemove',this.resize);
      this.addEvent(document,'mouseup',this.endResize)
    },
    resize(e){
      e.stopPropagation();
      document.getElementById('resize').style.width = (this.resizeStartWidth+e.clientX-this.startX) +'px';
    },
    endResize(e){
        this.removeEvent(document,'mousemove',this.resize);
        this.removeEvent(document,'mouseup',this.endResize);
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
  mounted(){
    this.addEvent(document.getElementById('left'),'mousedown',this.startResize)
  }

}


</script>

