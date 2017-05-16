import React from 'react';
//import logo from '../images/Excel-Basics.jpg';
import '../css/Appointment.css'
import Fetch from 'react-fetch'

var Appointment = React.createClass({
  
  getInitialState: function(){

        return {
            
            selectMonthValue: 'January',
            days: 31,
            form: false
        
    };

  },

  handleMonthChange: function(e){

        this.setState({selectMonthValue:e.target.value},()=>{

                this.getDays(this.state.selectMonthValue);

        });
        

  },
  handleDayChange: function(e){

        this.setState({days:e.target.value});

  },
  getDays: function(Month){

    var selected = document.getElementById("day");
    selected.innerHTML = "";
    var days = 0;
    var option = "";
   
    if(Month === 'February'){

        days = 28;
    }else if(Month === 'April' || Month === 'June' || Month === 'September' || Month === 'November'){

        days = 30;
    }else{

        days = 31;
    }

    for(var i = 1; i<=days; i++){

            option = document.createElement("option");
            option.text = ""+i;
            option.value = ""+i;
            selected.appendChild(option);

    }


  },

  componentDidMount(){

      var myInit = {

          method: "POST"

      };
      //Put the link to the Java stuff where 'getList' is
      fetch("/getList", myInit).then((response)=> {

        return response.json();

      }).then((data)=>{

        //what code goes here?

      });

  },

  render() {
    return (
          <div className="appointment">
            
            <div className="appointment-header">
                <div className="appointment-header-format">
                    <h1>Start Your Change Now</h1>
                    <p>Schedule An Appointment</p>
                </div>
            </div>
            <div className="appointment-body">

                <form className="form-horizontal">
                <fieldset>

                {/* Select Basic */}
                <div className="form-group">
                <label className="col-md-4 control-label" for="month">Month</label>
                <div className="col-md-4">
                    <select 
                    id="selectbasic" 
                    name="selectbasic" 
                    className="form-control" 
                    value={this.state.selectMonthValue} 
                    onChange={this.handleMonthChange}>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                    </select>
                </div>
                </div>

                {/* Select Basic */}
                <div className="form-group">
                <label className="col-md-4 control-label" for="day">Day</label>
                <div className="col-md-4">
                    <select id="day" 
                    name="day" 
                    className="form-control"
                    value={this.state.days}
                    onChange={this.handleDayChange}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                      <option>30</option>
                      <option>31</option>
                    </select>
                </div>
                </div>

                {/* Text input*/}
                <div className="form-group">
                <label className="col-md-4 control-label" for="textinput">Student First Name</label>  
                <div className="col-md-4">
                <input id="textinput" name="fname" type="text" placeholder="Joey" className="form-control input-md"/> 
                </div>
                </div>

                {/* Text input*/}
                <div className="form-group">
                <label className="col-md-4 control-label" for="textinput">Student Last Name</label>  
                <div className="col-md-4">
                <input id="textinput" name="lname" type="text" placeholder="Smith" className="form-control input-md"/>  
                </div>
                </div>

                {/* Text input*/}
                <div className="form-group">
                <label className="col-md-4 control-label" for="textinput">Parent E-Mail</label>  
                <div className="col-md-4">
                <input id="textinput" name="email" type="text" placeholder="johnsmith@gmail.com" className="form-control input-md"/> 
                </div>
                </div>

                </fieldset>
                
                <input type="submit" className="btn btn-info" value="Submit Button"/>

                </form>


            </div>
          </div>
    );
  }
});

export default Appointment;