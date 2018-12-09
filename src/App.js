import React, { Component } from 'react';
import ContactsList from './containers/ContactsList/ContactsList';
import ContactForm from './containers/ContactForm/ContactForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'

class App extends Component {
  render() {
    return (    
    <Provider store={store}>
      <Router basename="/address-book-app">
        <div>
          <Route exact path="/" component={ContactsList} />
          <Route path="/create-contact" component={ContactForm} />
          <Route path="/edit-contact" component={ContactForm} />
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
