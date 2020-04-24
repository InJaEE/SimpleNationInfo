import Vue from 'vue';
import Vuex from 'vuex';
import { getOneNation } from '../api';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        nationList: [],
        nation: {},
        searchNationList: [],
    },
    mutations: {
        SET_NATION(state, data){
            state.nation = data;
        },
    },
    getters: {
        getSearchNationList(state){
            return state.searchNationList;
        },
    },
    actions: {
        FETCH_NATION(context, nationCode){
            getOneNation(nationCode)
                .then(res => {
                    context.commit('SET_NATION', res.data);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    },
});

export default store;