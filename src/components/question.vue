<template>
    <div class="row" v-for="item in rows">
        <div class="title">
            <span style="font-size:30px;color:#ff7800">{{item.id}}</span>身份证号码告诉我们很多信息，某人的身份证号码是130503196704010012，其中13、05、03是此人所属的省(市、自治区)、市、县(市、区)的编码，1967、04、01是此人出生的年、月、日，001是顺序码，2为校验码．那么身份证号码是321084198101208022的人的生日是(　　)
            A.     8月10日
            B.     10月12日
            C.     1月20日
            D.     12月8日
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
            <span>难度:0.56 知识点1，知识点2，知识点3，</span>
        </div>
    </div>

</template>
<style>
    .right{float: right}
    .row{width: 1000px;border: 1px solid #CCC;margin: 12px 0;padding: .5em}
    .foot{margin-top: 2em;color: #0074D9;font-size: 12px}
    .fav{margin-right: 20px}
    .resolve,.fav{cursor: pointer}
    .resolve_div{background-color: #CCC;margin: 12px 0;padding: 12px 50px}
    .red{color: red}

</style>
<script>
   // import dragAndDrop from 'vue.drag-and-drop';
   // Vue.use(dragAndDrop);

    export default{
        data(){
            return{
                rows:[
                    {change_resolve_type:true,change_collect_type:true,id:1},
                    {change_resolve_type:true,change_collect_type:true,id:2},
                    {change_resolve_type:true,change_collect_type:true,id:3},
                    {change_resolve_type:true,change_collect_type:true,id:4},
                    {change_resolve_type:true,change_collect_type:true,id:5},
                    {change_resolve_type:true,change_collect_type:true,id:6},
                    {change_resolve_type:true,change_collect_type:true,id:7},
                    {change_resolve_type:true,change_collect_type:true,id:8},
                    {change_resolve_type:true,change_collect_type:true,id:9},
                    {change_resolve_type:true,change_collect_type:true,id:10}
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
//            handleDragStart: function(elem) {
//                // console.log('handleDragStart', elem);
//                this.loggedEvent = 'handleDragStart';
//            },
//            handleDragOver: function(elem) {
//                // console.log('handleDragOver', elem);
//                this.loggedEvent = 'handleDragOver';
//            },
//            handleDragEnter: function(elem) {
//                // console.log('handleDragEnter', elem);
//                this.loggedEvent = 'handleDragEnter';
//            },
//            handleDragLeave: function(elem) {
//                // console.log('handleDragLeave', elem);
//                this.loggedEvent = 'handleDragLeave';
//            },
//            handleDragEnd: function(elem) {
//                // console.log('handleDragEnd', elem);
//                this.loggedEvent = 'handleDragEnd';
//            },
//            handleDrop: function(itemOne, itemTwo) {
//                console.log('handleDrop', itemOne.id, itemTwo.id);
//                this.loggedEvent = 'handleDrop';
//                var dummy = this.tasks[itemOne.id];
//                this.tasks.$set(itemOne.id, this.tasks[itemTwo.id]);
//                this.tasks.$set(itemTwo.id, dummy);
//            },
//            handleImageDrop: function(itemOne, itemTwo) {
//                console.log('handleImageDrop', itemOne.getAttribute('data-index'), itemTwo.getAttribute('data-index'));
//                this.loggedEvent = 'handleImageDrop';
//                var dummy = this.images[itemOne.getAttribute('data-index')];
//                this.images.$set(itemOne.getAttribute('data-index'), this.images[itemTwo.getAttribute('data-index')]);
//                this.images.$set(itemTwo.getAttribute('data-index'), dummy);
//            },
//            handleDrag: function(elem) {
//                //console.log('handleDrag', elem);
//                this.loggedEvent = 'handleDrag';
//            },
        }
    }
</script>
