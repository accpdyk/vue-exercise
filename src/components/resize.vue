<template>
  <div>
    <div class="resizable draggy-idle" id="parent">
    <div id="child" class="child">d</div>
    </div>
  </div>
</template>
<style>
.child{
  width: 300px;border: 1px solid;
  margin: 100px 0 ;
}
</style>

<script>
export default {
  data: function() {
    return {}
  },
  methods:{
    show:function(){
      console.log(123);
    }
  },
  mounted(){
    var obj  = document.getElementById('child');
    console.log(obj);
    var resizable = new Resizable(obj, {
      within: document.getElementById('parent'),
      handles: 's, se, e',
      threshold: 10,
      draggable: false
    });
    resizable.on('resize', function(){
      console.log(456);
    });
  }
}



function ResizerDemo(element) {
  element = $(element);
  let handler = $('<div class="resizerDemo-handler"></div>');
  let info = $('<div class="resizerDemo-info"></div>');

  element.append(handler);
  element.append(info);

  let hammer = new Hammer(element[0], {recognizers: [
    [Hammer.Pan, { threshold: 0}]
  ]});

  let startWidth;
  element.on('mousedown', function(e){
    e.preventDefault();
  });
  hammer.on('panstart', function(e) {
    startWidth = element[0].clientWidth;
  });

  hammer.on('panmove', function(e) {
    element[0].style.width = (startWidth + e.deltaX) + 'px';
    info.html(element[0].clientWidth + 'px x ' + element[0].clientHeight + 'px');
  })
}


</script>

