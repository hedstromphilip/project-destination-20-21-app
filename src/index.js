import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav } from 'react-bootstrap'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import * as Views from './views';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand>Project Destination</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/events">Events</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Views.Home} />
          <Route path="/events" component={Views.Events} />
          <Route path="/products" component={Views.Products} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
