<template>
    <div class="history">
        CLICKED: {{ count }} Times
        <button @click="increment">Plus</button>
        <button @click="decrement">Minus</button>
    </div>
</template>
<style></style>
<script>
    import {increment,decrement} from '../vuex/action'
    export default{
        vuex: {
            getters: {
                count: function(state){ return state.count ;}
            },
            actions: {
                increment,decrement
            }
        }
    }
</script>
