import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Tests from './components/pages/Tests'
import BankSoal from './components/pages/BankSoal';
import Navigation from './components/layout/Navigation';
import SingleTest from './components/tests/SingleTest';
import EditTestForm from './components/tests/EditTestForm';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="container my-4">
          <Route exact path="/" component={Home}/>
          <Route exact path="/tests" component={Tests}/>
          <Route exact path="/tests/:testId" component={SingleTest} />
          <Route path="/tests/edit/:testId" component={EditTestForm} />
          <Route path="/bank-soal" component={BankSoal}/>
      </div>
    </div>
  );
}

export default App;
