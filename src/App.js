import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const trackingId = 'UA-182178689-1';

function App() {

  useEffect(() => {
    ReactGA.initialize(trackingId)
    ReactGA.pageview(window.location.pathname)
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Phishing Social Experiment</h1>
      </header>
    </div>
  );
}

export default App;
