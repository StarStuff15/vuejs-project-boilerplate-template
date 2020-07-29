import {ACTION_EXAMPLE} from "./actions.type";
import {MUTATION_EXAMPLE} from "./mutations.type";

/*
The store state.module is used to store centralised values that can be accessed from any Vue components.
This module in particular should be used for configuration or component state values
Example. Theme, colours, components activated, etc.
*/

const state = {
    data: {
        "key": "val",
    },
};

const getters = {
    exampleGetter(state) {
        return state.data;
    },
};

const actions = {
    [ACTION_EXAMPLE](context, data) {
       context.commit(MUTATION_EXAMPLE, data)
    },
};

const mutations = {
    [MUTATION_EXAMPLE](state, data) {
        state.data = data
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};
