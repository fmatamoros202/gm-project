import {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/users/userId'/>
      </Switch>
    </>
  );
}

export default App;
