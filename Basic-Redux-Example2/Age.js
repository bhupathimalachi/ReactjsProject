const {createStore}= require("redux");

const initialState={
    age:20
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case"age_up":
            return{
                ...state,
                age:state.age+1
            }
        case"age_down":
            return{
                ...state,
                age:state.age-1
            }

        default:
            return state;
    }

};
const store=createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch({type:"age_up"});
store.dispatch({type:"age_down"});
store.dispatch({type:"age_up"});
store.dispatch({type:"age_down"});
store.dispatch({type:"age_up"});
store.dispatch({type:"age_down"});