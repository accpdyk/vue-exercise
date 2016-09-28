/**
 * Created by qing on 16/9/27.
 */

const state = { num: 0,a:0,b:0,c:0 };

//mutations
const mutations = {
    INCREMENT (state,ele) { state[ele]++ ;},
    DECREMENT (state,ele) { state[ele]-- ;}

};

export default {
    state,mutations
}