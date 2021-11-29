import { AUTH_LOGIN_FAILED, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS } from "../authReducer/actionTypes"


const initState =
{
     isLoading:false,
     todos:[]
}

export const todoReducer =(state=initState,action)=>{

     switch(action.type)
     {
          case(AUTH_LOGIN_LOADING):
               return ({...state,isLoading:true});
          case(AUTH_LOGIN_SUCCESS):
               return ({...state,isLoading:false,isAuth:true,token:action.payload.token,error:null});
          case(AUTH_LOGIN_FAILED):
               return ({...state,isLoading:false,isAuth:false,error:action.payload});   
          default :
               return {...state};   

     }

}