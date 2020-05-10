
import React from 'react';
import './App.css';
import LogIn from './LogIn';
import Home from './Home';
import ProfessorInfo from './ProfessorInfo';
import { FaUserCircle } from 'react-icons/fa';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,

  Redirect
} from "react-router-dom";

const authInfo = {
  authenticated: false,
  setAuth(isAuthenticated) {
    this.authenticated = isAuthenticated;
  },
  userEmail: 'none',
  setEmail(email) {
    this.userEmail = email;
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false, userEmail: 'none' };
    this.Authenticate = this.Authenticate.bind(this);
  }

  async Authenticate(event) {
    // Dummy authentication.
    var x = document.getElementById("email").value;
    var email = { email: x };

    // fetch data from server.
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      body: JSON.stringify(email),
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:5000" }
    }).then(res => {
      if (!res.ok) {
        res.json().then(data => {
          document.getElementById("errMsg").innerText = data.errMsg;
        });
      } else {
        res.json().then(data => {
          this.setState({ authenticated: true, userEmail: data.email });
          console.log(this.state.userEmail + "in handling");
          console.log(this.state.authenticated);
        });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div class="App">
          <nav class="navbar">
              <div class="user-btn-box">
                <button class="btn user-btn" ><FaUserCircle /></button>
              </div>
          </nav>
          <hr />
          <Switch>
            <LogInRoute path="/login" control={this.state.authenticated}>
              <LogIn handleAuth={this.Authenticate} />
            </LogInRoute>
            <Route path="/home" render={() => <Home userEmail={this.state.userEmail} />} />
            <Route path="/professorinfo" render={() => <ProfessorInfo/ >}/>
            {/* {
               this.state.authenticated ?
                 <h1>sign out</h1> :
                 <Route exact path="/login" render={() => <LogIn handleAuth={this.Authenticate} />} />
             } */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// This customized route redirects to home page once the user successfully logged in and stays at /login
// if an error occurs and displays the error message.
function LogInRoute({ control, children, ...rest }) {
  console.log(control);
  return (
    <Route
      {...rest}
      render={
        () => control ? (
          <Redirect to="/home" />
        ) : (
            children
          )
      }
    />
  );
}

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: "12345"};
  }
}


export default App;
