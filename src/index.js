import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Customer from './Customer'
import Product from './Product'
import NotFound from './NotFound'

const routing = (
  <Router>
    <div>
      <ul>
        <button type="button">
          <li>
            <Link to="/">Home</Link>
          </li>
        </button>
        <button type="button">
          <li>
            <Link to="/Customer">Customer</Link>
          </li>
        </button>
        <button type="button">
          <li>
            <Link to="/Product">Product</Link>
          </li>
        </button>

      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Customer" component={Customer} />
        <Route path="/Product" component={Product} />
        <Route component={NotFound} />
      </Switch>
    </div>

  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))




