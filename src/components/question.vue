<template>
    <ul v-dnd-list :dnd-list="rows" :dnd-horizontal-list="false">
        <!--<ul>-->
            <!--<li v-for=" n in 10" draggable=”true” style="height:30px;border:solid #cccccc;margin-top:20px; '">{{n}}-&#45;&#45;1111111</li>-->
        <!--</ul>-->

    <li class="row" v-for="item in rows" id="{{$index}}" v-dnd-draggable
         :dnd-draggable="item"
         :dnd-index="$index"
         :dnd-data="rows"
         dnd-effect-allowed="move"
         dnd-dragend="dragend"   transition="stagger" stagger="100">
        <div class="title">
            <span style="font-size:30px;color:#ff7800">{{$index +1 }}--{{item.id}}</span>
          {{ item.content }}
        </div>
        <div class="resolve_div" v-if="!item.change_resolve_type" transition="expand">
            答案解析
        </div>
        <div class="foot">
            <span class="right resolve" @click="resolve(item)">
                {{ item.change_resolve_type?'查看解析':'收起解析'}}
            </span>
            <span class="right fav  {{  !item.change_collect_type?'red':'blue'}}" @click="collect(item)" class="">
                {{  item.change_collect_type?'加入收藏':'取消收藏'}}
            </span>
            <span>{{item.id}}难度:0.56 知识点1，知识点2，知识点3，</span>
        </div>
    </li>
    </ul>
    <ul>
        <li class="row">123</li>
        <li class="row">456</li>
        <li class="row">789</li>
        <li class="row">325</li>
    </ul>

</template>
<style>
    .right{float: right}

     li.dndPlaceholder{height: 100px;background-color: #CCC}
    .row,li{width: 1000px;border: 1px solid #CCC;margin: 12px 0;padding: .5em;display: block;}
    .foot{margin-top: 2em;color: #0074D9;font-size: 12px}
    .fav{margin-right: 20px}
    .resolve,.fav{cursor: pointer}
    .resolve_div{background-color: #CCC;margin: 12px 0;padding: 12px 50px}
    .red{color: red}
    /*****/
    [draggable] {
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        /* Required to make elements draggable in old WebKit */
        -khtml-user-drag: element;
        -webkit-user-drag: element;
    }
    .dragging {
        /*opacity: 1.0;*/
        /*color: #FF7800;*/
        /*border: solid red;*/

    }
    .drag-over {

    }
    .drag-enter {
        color: green;
        background-color: #CCC;
    }

</style>
<script>
    import Vue from 'vue'
    import VueDragAndDropList from 'vue-drag-and-drop-list';

    Vue.use(VueDragAndDropList);


    export default{
        data(){
            return{
                rows:[
                    {change_resolve_type:true,change_collect_type:true,id:1,content:'1111111111需拖拽的元素设置属性 draggable属性。为 dragstart 事件添加侦听在侦听中设置拖拽数据。'},
                    {change_resolve_type:true,change_collect_type:true,id:2,content:'div draggable="true" event.dataTransfer.setData(xt may be dragged>This text <strong>may</strong> be dragged</div'},
                    {change_resolve_type:true,change_collect_type:true,id:3,content:'在这个例子中，通过使用 ondragstart 属性来添加一个 dragstart 事件监听器。'},
                    {change_resolve_type:true,change_collect_type:true,id:4,content:'所有的拖拽事件都有一个属性——dataTransfer，它包含着拖拽数据。'},
                    {change_resolve_type:true,change_collect_type:true,id:5,content:'以提供多种格式的数据。通过多次调用 setData 方法增加不同的格式。格式顺序需从 具体 到 一般。'},
                    {change_resolve_type:true,change_collect_type:true,id:6,content:' clearData 方法的参数是可选的。如果没有传入参数，绑定其上的所有数据都会被移除。若没有设定数据，或者数据全被移除了，那么拖拽不会发生。'},
                    {change_resolve_type:true,change_collect_type:true,id:7,content:'需要传入三个参数。一个是指向一个图片的引用，通常是一个图片元素对象，但也可以是一个canvas或其它任何元素对象。这个图片在页面上怎么显示，它作为拖拽的反馈图片就怎么显示。你可以可以使用不在该文档中的图片或者canvas。见下面的例子：'},
                    {change_resolve_type:true,change_collect_type:true,id:8,content:'通过在dragstart事件监听器中设置 effectAllowed 属性，你可以为拖动源指定这三种操作中的某一种。'},
                    {change_resolve_type:true,change_collect_type:true,id:9,content:'122121'},
                    {change_resolve_type:true,change_collect_type:true,id:10,content:'65646746165'}
                ],
                selected:null
            }
        },
        methods:{
            //查看解析
            resolve:function(item){
                item.change_resolve_type = !item.change_resolve_type ;
            },
            //查看收藏
            collect:function(item){
                item.change_collect_type = !item.change_collect_type ;
            },
            selectedEvent: function(item){
                this.selected = item;
            },
            //结束事件
            dragend:function(event,index) {
              //  alert(index);
            }
        }
    }
</script>
