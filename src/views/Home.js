import React from 'react';
import {Link, IndexLink} from 'react-router';
import '../css/Home.css'


var Home = React.createClass({

  render(){
      return(

        <div className="Homestyle">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/about" activeClassName="active">About</Link></li>
                <li><Link to="/schedule" activeClassName="active">Schedule Appointment</Link></li>
                <li><Link to="/contact" activeClassName="active">Contact</Link></li>
              </ul>
            </div>
          </div>
          </nav>
         <div className="container-fluid mainStuff">{/*
             */}{this.props.children}
         </div>

        {/* <footer className="footer">
          <div className="container-fluid">
          <p>Place sticky footer content here.</p>
          </div>
        </footer> */}

       </div>

      );
  }

});

export default Home;
