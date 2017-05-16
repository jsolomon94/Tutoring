import React from 'react';
//import logo from '../images/Excel-Basics.jpg';
import '../css/About.css';
import {Link} from 'react-router';

var About = React.createClass({

  render() {
    return (
          <div className="about">
            
            <div className="about-header">
              <div className="about-header-text">
                <h1>"Give me my A"</h1>
              </div>
            </div>
            <div className="about-explain container">
            
            <p>Excel Tutorial Program is a tutoring service that was started by John Solomon in 2001.  John is now a retired account executive that devotes all of his time to helping others.  His great aptitude for Math and English make him a great resource when someone is in need of assistance in those subjects.  For the low rate of <strong>$30 an hour</strong>, John has helped students excel in their SAT’s, college exams, and elementary exams as well.  He is ready to help you become the best possible version of yourself!  If you are interest in an appointment, schedule one <Link to="/schedule"><strong>here.</strong></Link></p>
            </div>
          </div>
    );
  }
});

export default About;
