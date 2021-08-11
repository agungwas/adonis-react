import React from "react";
import Headers from './components/Headers';
import Food from './pages/Food';
import Home from './pages/Home';
import City from './pages/City';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '@style/App.scss';


const App: React.FC<{}> = () => {

  return (
    <>
      <BrowserRouter>
        <section id="headers">
          <Headers />
        </section>
        <Switch>
          <Route path="/food" >
            <Food />
          </Route>
          <Route path="/city" >
            <City />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
