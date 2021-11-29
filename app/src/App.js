import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Link ,Switch,Route,Redirect} from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { store } from './state/store';
import Todos from './components/Todos';
function App() {

  const state = useSelector((store)=>(store.auth),shallowEqual);

  console.log(store.getState());
  return (
    <div className="App">
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>


        <Switch>
            <Route exact path="/">
              {state.isAuth ? <><Todos/></>:<Redirect to="/login"/>}
              
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
        </Switch>  
        
    </div>
  );
}

export default App;
