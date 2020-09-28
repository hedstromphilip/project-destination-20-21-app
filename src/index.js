import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as Views from './views';
import { NavigationBar, Footer } from './components';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Views.Home} />
          <Route path="/events" component={Views.Events} />
          <Route path="/products" component={Views.Products} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
