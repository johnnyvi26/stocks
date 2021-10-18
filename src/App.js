import './App.css';
import React from 'react';
//import routes and our components
import { Route, Switch } from "react-router-dom";
import About from './components/About';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Stock from './components/Stock';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        
        {/* Replace your Price route in App.js to this syntax instead.
        It passes the router params into the virtual page (component): */}
        {/* props.match.params.symbol  in React Router
        is basically the same as:
        req.params.symbol in express */}
        <Route path="/stocks/:symbol"
        render={(routerProps)=> <Stock {...routerProps} />} />

        <Route path="/stocks">
          <Dashboard />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
