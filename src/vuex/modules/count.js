/**
 * Created by qing on 16/9/27.
 */

const state = { num: 0,num_a:0,num_b:0,num_c:0 };

//mutations
const mutations = {
    INCREMENT (state) { state.num++ ;},
    DECREMENT (state) { state.num-- ;}

};

export default {
    state,mutations
}