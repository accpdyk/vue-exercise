/**
 * Created by qing on 16/9/27.
 */

const state = { num: 0,a:5,b:8,c:10 };

//mutations
const mutations = {
    INCREMENT (state,ele) { state[ele]++ ;},
    DECREMENT (state,ele) { state[ele]-- ;}

};

export default {
    state,mutations
}