/**
 * Created by dell on 2016/9/27.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import count from './modules/count'

Vue.use(Vuex);



export default new Vuex.Store({
    modules:{
        count
    }
});
 