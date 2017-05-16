import React from 'react';
//import logo from '../images/Excel-Basics.jpg';
import '../css/Contact.css';

var Contact = React.createClass({

  render() {
    return (
          <div className="contact container-fluid">
            <div className="contact-body">
                <h2>Email: exceltutoring@gmail.com</h2>
                <h2>Phone: 1-800-Excel</h2>
                <h2>Address: 11111 Compton, CA 299382</h2>
                <h2>Twitter: @excel<br/>Instagram: @excel<br/>Facebook: @exceltutoring</h2>
            </div>
          </div>
    );
  }
});

export default Contact;