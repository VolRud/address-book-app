import React, { Component } from 'react';
import ContactsList from './containers/ContactsList/ContactsList';
import ContactForm from './containers/ContactForm/ContactForm';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {

    return (

      <Router>
        <div>
          <Route exact path="/" component={ContactsList} />
          <Route path="/create-contact" component={ContactForm} />
          <Route path="/edit-contact" component={ContactForm} />
        </div>
      </Router>
 
    );
  }
}

export default App;
