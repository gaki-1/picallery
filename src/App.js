import React from 'react';
import './App.css';
import Form from './Form';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Nav from './Nav';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact component={Form} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;