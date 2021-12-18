// import createStrore function
//createStrore function used to create the store
const { createStore } = require("redux");

//intitalstate
const initialState = {
    bal: 10000
}

//create thr reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "WITHDRAW":
            return {
                ...state,
                bal: state.bal - action.value
            }

        case "DEPOSIT":
            return {
                ...state,
                bal: state.bal + action.value
            }

        default:
            return state;
    }

};

//create the store
const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch({ type:"WITHDRAW", value: 1000 })
store.dispatch({ type:"DEPOSIT", value: 5000 })