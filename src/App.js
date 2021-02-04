import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import client from './client'

import Home from './containers/Home'
import Login from './containers/Login'
import Navbar from './containers/Navbar'
import Register from './containers/Register'

const App = () => (
  <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ApolloProvider>
  </Router>
)

export default App
