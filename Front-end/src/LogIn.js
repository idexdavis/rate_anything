import React from 'react';
import './App.css';

class LogIn extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
        document.getElementById("email").addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
            document.getElementById("start").click();
          }
        });
      }

    render() {
      return (
        <div class="App-header">
          <img class="App-logo" src="logo192.png"></img>
          <p id="errMsg"/>
            <div class="input-group">
              <label class="input-label-g" for="username">Email</label>
              <div class="input-btn-g">
                <input id="email" type="email" class="email-input" placeholder="user@institution.edu" />
                <button class="btn btn-lg btn-start" id="start" onClick={this.props.handleAuth}>Start</button>
              </div>
            </div>
        </div>
      );
    }
  }

  export default LogIn;

