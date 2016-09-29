/**
 * Created by dell on 2016/9/29.
 */

const state ={
    grade:"",
    test:""
};

const mutations = {
    GET_GRADE_ONE(state,content) {
       state.grade = content;
    }
};

export default {
    state,mutations
}