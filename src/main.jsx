import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './app.jsx';
import './index.css';
import Bike from './routes/Bike/index.jsx';
import FazerSeguro from './routes/FazerSeguro/index.jsx';
import Principal from './routes/Principal/index.jsx';
import PlanosSeguro from './routes/PlanosSeguro/index.jsx';
import RMs from './routes/RMs/index.jsx';

const Root = () => (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route path="/Bike" component={Bike} />
        <Route path="/FazerSeguro" component={FazerSeguro} />
        <Route path="/PlanosSeguro" component={PlanosSeguro} />
        <Route path="/RMs" component={RMs} />
      </Switch>
    </App>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
