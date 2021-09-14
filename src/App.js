import React, { Component } from 'react';
import Provider from './provider';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="app">
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
