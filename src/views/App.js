import React from 'react';
//import logo from '../images/Excel-Basics.jpg';
import '../css/App.css';

import {Link} from 'react-router';

var App = React.createClass({

  /*getInitialState: function(){

    return{

      pageTitle: ''

    };

  },

  reportTitle: function(newTitle){

    this.setState({

      pageTitle: newTitle

    });

  },*/

  render() {
    return (

          <div className="overall">
          <div className="Main">
          <div id="first" className="Main-div"><div className="Main-div-child"><h1>Excel</h1><p>A tutoring program that enables you to see and reach your potential.</p><Link to="/about" style={{ textDecoration: 'none' }}><button type="button" className="btn btn-lg">Learn More</button></Link></div></div>
          </div>
          </div>
    );
  }
});

export default App;
