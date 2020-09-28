import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as Views from 'src/views';
import { Navbar, Footer } from 'src/components';

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div class="App">
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
