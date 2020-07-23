import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home';
import BankSoal from './components/pages/BankSoal';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/bank-soal" component={BankSoal}/>
    </div>
  );
}

export default App;
