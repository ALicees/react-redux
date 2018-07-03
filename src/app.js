import React from 'react';
import { Route } from 'react-router-dom'

import Login from './container/login'
import Register from './container/register'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/aaa" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    );
  }
}

export default App;
