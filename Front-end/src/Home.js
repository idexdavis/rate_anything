import React from 'react';
import './App.css';

class Home extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div class="App-header">
          <input id="search" class="email-input" placeholder="Please type something" />
        </div>
      );
    }
  }
 
  export default Home;