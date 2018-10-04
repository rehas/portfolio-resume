import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Infographic extends Component {
  clickHandler = (e)=>{
    if(this.props.location.hash.indexOf('nav-wrap') === -1) {
      return
    }else{
      document.getElementsByClassName('mobile-btn')[1].click();
    }
    
  }
  render() {
    return (
      <div className="row">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
  	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         <ul id="nav" className="nav">
            <li> <Link to={"/#home"}>Home</Link></li>
         </ul>

      </nav>

         <div className="twelve columns collapsed infographic" style={{marginTop: '5px'}} onClick={this.clickHandler}>
            <img src={require("../images/infographicCV.jpg")} />
          </div>
      </div>
    );
  }
}

export default Infographic;
