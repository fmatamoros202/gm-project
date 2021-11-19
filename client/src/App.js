import {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/:UserName' component={Home}/>
      </Switch>
    </>
  );
}

export default App;
