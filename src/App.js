import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home';
import BankSoal from './components/pages/BankSoal';
import Navigation from './components/layout/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="container my-4">
          <Route exact path="/" component={Home}/>
          <Route path="/bank-soal" component={BankSoal}/>
      </div>
    </div>
  );
}

export default App;
