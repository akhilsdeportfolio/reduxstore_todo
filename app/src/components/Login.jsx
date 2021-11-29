import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { Redirect } from "react-router";
import { signIn } from "../state/authReducer/actions";
import { store } from "../state/store";


let initData ={
     email:"",
     password:""
}
const Login = ()=>{

     const dispatch = useDispatch();
     const login = useSelector((store)=>store.auth.isAuth);
     const error = useSelector((store)=>store.auth.error);

     const [data,setData]=useState(initData);
     //console.log(login);
     if(login)
          return <Redirect to="/"/>
     const handleChange =(e)=>{
//               console.log(e);

               setData({...data,[e.target.name]:e.target.value});
     }    

     const handleSignIn = (e)=>{

          //console.log(data);

          signIn(data);
     }

     return (<>
               <h1>This is a sample Login Screen</h1>
               <input placeholder="email" onChange={handleChange} name="email" />
               <input placeholder="email" onChange={handleChange} name="password" type="password" />
               <button onClick={handleSignIn}>Sign In </button>

               <p style={{color:'red'}}>{error?.message}</p>
     </>)
}

export default Login;