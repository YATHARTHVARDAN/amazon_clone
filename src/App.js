import React,{useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout'
import Login from './Login';
import {auth} from "./firebase";
import {useStateValue} from './StateProvider';
import Payment from './Payment';

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    //always listening
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>', authUser);
      if(authUser)
      {
        // the user just loggin in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        });
      }
    });
  }, []);
  
  return (
    // BEM  convention make sure default route is at the end
    <Router>
      <div className="app">
        <Switch>
        <Route path='/login'>
        <Login />
        </Route>
        <Route path='/checkout'>
        <Header />
            <Checkout />
          </Route>
          <Route path = '/payment'>
            <Header />
            <Payment />
          </Route>
          <Route path='/'>
          <Header />
            <Home/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
