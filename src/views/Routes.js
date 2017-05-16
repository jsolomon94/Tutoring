import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Appointment from './Appointment'
import Contact from './Contact'

var Routes = React.createClass({

  render(){
      return(
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
            <IndexRoute component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/schedule" component={Appointment}/>
            <Route path="/contact" component={Contact}/>
            </Route>
        </Router>

      );
  }

});

export default Routes;
