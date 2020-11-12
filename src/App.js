import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

import './App.css';
import Phishing from './Components/Phishing';
import Login from './Components/Login';

const trackingId = 'UA-182178689-1';

function App() {

  useEffect(() => {
    ReactGA.initialize(trackingId)
    ReactGA.pageview(window.location.pathname)
  }, []);
  
  return (
    <div>
      <Switch>
          <Route path="/login" component={Login} />
          <Route path="/phishing" component={Phishing} />
      </Switch>
    </div>
  );
}

export default App;
