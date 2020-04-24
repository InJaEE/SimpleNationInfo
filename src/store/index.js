import Vue from 'vue';
import Vuex from 'vuex';
import { getOneNation, getAllNations } from '../api';

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
        SET_SEARCH_NATION_LIST(state, data){
            state.searchNationList = data;
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
        },
        FETCH_SEARCH_NATION(context, inputData){
            getAllNations()
                .then(res => {
                    
                    const input = inputData.toLowerCase();
                    const searchNation = res.data.filter(value => {
                        return value.name.toLowerCase().includes(input)
                    });
                    context.commit('SET_SEARCH_NATION_LIST', searchNation);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    },
});

export default store;