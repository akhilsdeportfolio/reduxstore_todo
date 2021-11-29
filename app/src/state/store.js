import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "./authReducer/authReducer";
import { todoReducer } from "./todoReducer.js/todoReducer";


const m1 = (state)=>(next)=>(action)=>{
     //console.log("Iam in Middle ware");

     if(typeof action === "function")
     {
          action(store.dispatch);
     }
     else
     {
          next(action);
     }
}


export const store = createStore(combineReducers({auth:authReducer,todos:todoReducer}),compose(applyMiddleware(m1),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));