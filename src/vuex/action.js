/**
 * Created by dell on 2016/9/27.
 */

import { API_ROOT } from '../config'

export const increment = ({dispatch},ele)  =>  dispatch('INCREMENT',ele);

export const decrement = ({ dispatch},ele) =>  dispatch('DECREMENT',ele);

export const get_grade_one = function({dispatch},num){

    this.$http.get(API_ROOT+'/test/one',{params:{grade:num}}).then(function(response){
        dispatch('GET_GRADE_ONE',response.body);
    },function(response){

    });
   
};
