<template>
    <div>
        <!--<ul>-->
            <!--<li v-for=" n in 10" draggable=”true” style="height:30px;border:solid #cccccc;margin-top:20px; '">{{n}}-&#45;&#45;1111111</li>-->
        <!--</ul>-->

    <div class="row" v-for="item in rows" id="{{$index}}" v-drag-and-drop  drop="handleDrop"
         drag="handleDrag" drag-over="handleDragOver"  drag-end="handleDragEnd" drag-leave="handleDragLeave"
    >
        <div class="title" data-pictrue-id={{item.id}}>
            <span style="font-size:30px;color:#ff7800">{{item.id}}</span>
            {{ item.content }}
        </div>
        <div class="resolve_div" v-if="!item.change_resolve_type">
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
    </div>

    </div>

</template>
<style>
    .right{float: right}
    .row{width: 1000px;border: 1px solid #CCC;margin: 12px 0;padding: .5em;display: block;}

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
        opacity: 0.8;
        color: #FF7800;
        border: solid red;

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
    import dragAndDrop from 'vue-drag-and-drop'
    Vue.use(dragAndDrop);

    export default{
        data(){
            return{
                rows:[
                    {change_resolve_type:true,change_collect_type:true,id:1,content:'为所需拖拽的元素设置属性 draggable属性。为 dragstart 事件添加侦听在侦听中设置拖拽数据。'},
                    {change_resolve_type:true,change_collect_type:true,id:2,content:'div draggable="true" event.dataTransfer.setData(xt may be dragged>This text <strong>may</strong> be dragged</div'},
                    {change_resolve_type:true,change_collect_type:true,id:3,content:'在这个例子中，通过使用 ondragstart 属性来添加一个 dragstart 事件监听器。'},
                    {change_resolve_type:true,change_collect_type:true,id:4,content:'所有的拖拽事件都有一个属性——dataTransfer，它包含着拖拽数据。'},
                    {change_resolve_type:true,change_collect_type:true,id:5,content:'以提供多种格式的数据。通过多次调用 setData 方法增加不同的格式。格式顺序需从 具体 到 一般。'},
                    {change_resolve_type:true,change_collect_type:true,id:6,content:' clearData 方法的参数是可选的。如果没有传入参数，绑定其上的所有数据都会被移除。若没有设定数据，或者数据全被移除了，那么拖拽不会发生。'},
                    {change_resolve_type:true,change_collect_type:true,id:7,content:'需要传入三个参数。一个是指向一个图片的引用，通常是一个图片元素对象，但也可以是一个canvas或其它任何元素对象。这个图片在页面上怎么显示，它作为拖拽的反馈图片就怎么显示。你可以可以使用不在该文档中的图片或者canvas。见下面的例子：'},
                    {change_resolve_type:true,change_collect_type:true,id:8,content:'通过在dragstart事件监听器中设置 effectAllowed 属性，你可以为拖动源指定这三种操作中的某一种。'},
                    {change_resolve_type:true,change_collect_type:true,id:9,content:'122121'},
                    {change_resolve_type:true,change_collect_type:true,id:10,content:'65646746165'}
                ]
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
            handleDragStart: function(elem) {
                // console.log('handleDragStart', elem);
                this.loggedEvent = 'handleDragStart';
            },
            handleDragOver: function(elem) {
                this.loggedEvent = 'handleDragOver';
                console.log('handleDragOver', elem.classList);
                if(elem.classList.contains('row')){
                    elem.classList.add('drag-over');
                }

            },
            handleDragEnter: function(elem) {
                this.loggedEvent = 'handleDragEnter';
            },
            handleDragLeave: function(elem) {
                this.loggedEvent = 'handleDragLeave';
                elem.classList.remove('drag-over','drag-enter');
            },
            handleDragEnd: function(elem) {
                this.loggedEvent = 'handleDragEnd';
                console.log('handleDragEnd', elem.classList);


            },
            handleDrop: function(itemOne, itemTwo) {
                this.loggedEvent = 'handleDrop';
                var dummy = this.rows[itemOne.id];
                this.rows.$set(itemOne.id, this.rows[itemTwo.id]);
                this.rows.$set(itemTwo.id, dummy);
                itemTwo.classList.remove('drag-enter');
            },
            handleDrag: function(elem) {
                this.loggedEvent = 'handleDrag';
            }
        }
    }
</script>
