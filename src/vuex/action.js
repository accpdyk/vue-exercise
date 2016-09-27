/**
 * Created by dell on 2016/9/27.
 */

export const increment = function ({ dispatch }){
    return dispatch('INCREMENT');
} ;


export const decrement = function({ dispatch}){
  return   dispatch('DECREMENT')
};
