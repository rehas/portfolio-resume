import React, { Component } from 'react';
// import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import {Route} from 'react-router-dom';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  menuClose = (e)=>{
    if(this.props.location.hash.indexOf('nav-wrap') === -1) {
      return
    }else{
      document.getElementsByClassName('mobile-btn')[1].click();
    }
  }

  renderEverythingBelowHeader(flag){
    console.log(`flag is ${flag}`)
    if(flag){
      return (<div>
        <Header data={this.state.resumeData.main} fullRender={flag}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
        </div>
      )
    }else{
      return (
          <div></div>
        )
    }
  }

  render() {
    const renderRest = this.props.location.pathname.indexOf('infographic') === -1;
    console.log(`renderRest id ${renderRest}`)
    return (
          
            <div className="App" onClick={this.menuClose}>
              {this.renderEverythingBelowHeader(renderRest)}
            </div>
    );
  }
}

export default App;
