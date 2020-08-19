import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import ListPage from './ListPage';

export default class App extends Component {
  state = {
    token: localStorage.getItem('token'),
  };

  handleToken = (token) => {
    this.setState({ token: token });

    localStorage.setItem('token', token)

    console.log(this.state.token)
  }

  render() {
  return (
    <div className="App">
                <Router>
                  {/* {
                    !this.state.token ? <Redirect to='/login' /> : <></>
                  } */}
                  <Link to='/login'>Login</Link>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage token={this.state.token} {...routerProps} />} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <AuthPage 
                            token={this.state.token}
                            handleToken={this.state.handleToken}
                                {...routerProps} />} 
                        />
                    </Switch>
                  </Router>
    </div>
  )};
}

