
import React from 'react';
import './App.css';
import LogIn from './LogIn';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,

  Redirect
} from "react-router-dom";

const authInfo = {authenticated: false,
  setAuth(isAuthenticated) {
    this.authenticated = isAuthenticated;
  },
   userEmail: 'none',
  setEmail(email) {
    this.userEmail = email;
  }};

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
          this.setState({authenticated: true, userEmail: data.email});
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
            <Link to="/signup">
              <div>
                <h3 class="navitem">Sign Up</h3>
              </div>
            </Link>
          </nav>
          <hr />
          <Switch>
            <LogInRoute path="/login" control={this.state.authenticated}>
              <LogIn handleAuth={this.Authenticate} />
            </LogInRoute>
            <Route path="/home" render={() => <Home userEmail={this.state.userEmail}/> } />
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


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="App-header">
        <p>Welcome, {this.props.userEmail}!</p>
      </div>
    );
  }
}

export default App;
