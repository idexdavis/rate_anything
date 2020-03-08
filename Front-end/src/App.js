import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div class="App">
        <nav class="navbar">
          <Link to="/signup">
            <div>
              <h3 class="navitem">Sign Up</h3>
            </div>
          </Link>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function LogIn() {
  
  return (
    <div class="App-header">
      <img class="App-logo" src="logo192.png"></img>
      <form>
        <div class="input-group">
          <label class="text-input-label" for="username">Email</label>
          <div class="input-btn">
            <input name="username" type="email" class="text-input" placeholder="user@institution.edu" />
            <botton class="btn btn-lg btn-start" type="button">Start</botton>
          </div>
          
        </div>
       
      </form>
      
    </div>
  );
}

function SignUp() {
  return (
    <div class="App-header">
      <botton type="button">Start</botton>
    </div>
  );
}

export default App;
