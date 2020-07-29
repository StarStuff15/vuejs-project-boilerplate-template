import Vue from "vue";
import Vuex from "vuex";

import state from "./state.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        state,
    }
});
