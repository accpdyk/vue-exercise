<template>
    <div class="userlist">
        <p>用户私有题库 </p>
        <div v-for="item in rows" track-by="$index">
            {{ $index }}
        </div>
    </div>
</template>

<script>
    export default {
        data(){
           return {rows:[1,2,3],items:[]}
        },
        created: function() {
            this.$http.get('http://m.dyk.mschool.cn/test').then(function(response) {



                 this.$set('items', response);

            }, function (response) {
                // error callback
                alert('server error');
            });

           this.rows = [{username:'wanghua',id:'123'}]
        }
    }
</script>
