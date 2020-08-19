import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import HomePage from './HomePage';
import CreatePage from './CreatePage';

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
                  {
                    !this.state.token ? <Redirect to='/login' /> : <></>
                  }
                  <Link to='/login'>Login</Link>
                  <Link to='/list'>List</Link>
                  <Link to='/create'>Create</Link>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage token={this.state.token} {...routerProps} />} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <AuthPage 
                            token={this.state.token}
                            handleToken={this.handleToken}
                                {...routerProps} />} 
                        />
                        <Route 
                            path="/list" 
                            exact
                            render={(routerProps) => <ListPage 
                            token={this.state.token}
                                {...routerProps} />} 
                        />
                                                <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <CreatePage 
                            token={this.state.token}
                                {...routerProps} />} 
                        />
                    </Switch>
                  </Router>
    </div>
  )};
}

