// import {Component} from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage'
import Home from './pages/Home/Home'
import GlobalVision from "./pages/GlobalVision/GlobalVision";

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/:UserName' exact component={Home}/>
        <Route path='/:UserName/vision' component={GlobalVision}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
