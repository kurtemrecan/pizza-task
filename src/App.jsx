import { useState } from 'react';
import './App.css';

import HomePage from './components/HomePage';
import OrderForm from './components/OrderForm';
import SuccessForm from './components/SuccessForm';
import { Switch, Route } from 'react-router-dom';

//import OrderConfirmation from "./components/OrderConfirmation"
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/order" component={OrderForm} />
        <Route path="/success" component={SuccessForm} />
      </Switch>
    </>
  );
}

export default App;
