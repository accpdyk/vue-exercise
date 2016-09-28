<template>
    <div class="userlist">
        <h2>用户私有题库 </h2>
        <div v-for="item in rows" track-by="$index">
            <div class="row">{{ $index }}--{{ item.username }}--{{item.screen_name}}</div>
        </div>
    </div>
</template>
<style>
    .row{width: 300px;display: inline-block;float: left;text-align: left}
</style>
<script>
    export default {
        data(){
           return {rows:[1,2,3],items:[]}
        },
        created: function() {
            this.$http.get('http://m.dyk.mschool.cn/test').then(function(response) {
                 this.$set('rows', response.body);
            }, function (response) {
                // error callback
                alert('server error');
            });
        }
    }
</script>
