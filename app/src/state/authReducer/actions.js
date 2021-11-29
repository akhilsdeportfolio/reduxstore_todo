import { AUTH_LOGIN_FAILED, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS } from "./actionTypes"
import {store} from '../store';
import axios from "axios";

export const getAuthLoading = ()=>{
     return {type:AUTH_LOGIN_LOADING};
}

export const getAuthSucess = (data)=>{
     return {type:AUTH_LOGIN_SUCCESS,payload:data};
};

export const getAuthFailed = (err_message)=>{
     return {type:AUTH_LOGIN_FAILED,payload:err_message};
}


export const signIn = async(data)=>{
     //console.log(data);
     store.dispatch(getAuthLoading());

     try{
          const resp = await axios.post("https://reqres.in/api/login",data);
          console.log(resp.data);
          store.dispatch(getAuthSucess(resp.data));
     }
     catch(e)
     {
          console.log("error",e);
          store.dispatch(getAuthFailed(e));
     }
     
     
     

}
