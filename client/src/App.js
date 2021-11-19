import {Component} from "react";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact/>
        <Route path='/users/userId'/>
      </Switch>
    </>
  );
}

export default App;
