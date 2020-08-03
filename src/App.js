import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Tests from './components/pages/Tests'
import BankSoal from './components/pages/BankSoal';
import Navigation from './components/layout/Navigation';
import SubList from './components/tests/subsoal/SubList';
import EditTestForm from './components/tests/EditTestForm';
import AddSubForm from './components/tests/subsoal/AddForm';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="container my-4">
          <Route exact path="/" component={Home}/>
          <Route path="/bank-soal" component={BankSoal}/>
          <Route exact path="/tests" component={Tests}/>
          <Route exact path="/tests/:testId" component={SubList} />
          <Route path="/tests/edit/:testId" component={EditTestForm} />
          <Route path="/subsoal/add" component={AddSubForm} />
      </div>
    </div>
  );
}

export default App;
