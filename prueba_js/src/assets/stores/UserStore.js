import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { Server } from '../url/Server'
import { UserEmp } from '../url/Endpoint'


Vue.use(Vuex)

//estado
const state = {
    excepcion:{}
}

//mutaciones
const mutations = {
    ModificarExcepcion(state, data) {
        state.excepcion = data;
    }
}

//gets
const getters = {}

//acciones
const actions = {
    QueryUserAction(context, {filterName}) {
        //configurar el objeto de peticion
        const config = {
            url: Server + UserEmp.QueryUsers,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                'USERNAME': filterName,
            }
        };

        //haciendo la peticion
        return Axios.request(config)
            .then((rs) => {
                if (rs.data.messageType === null) {
                    context.commit('ModificarExcepcion', rs.data);
                }
                else {
                    return rs.data;
                }

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    },

}

export const UserStore = new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
});