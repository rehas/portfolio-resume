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
    if(flag === 'rest'){
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
    }else if(flag === 'infographic'){
      return (
          <div></div>
        )
    } else if(flag = 'portfolio'){
      return (
        <Portfolio data={this.state.resumeData.portfolio}/>
      )
    }
  }

  render() {
    let render;
    
    if (this.props.location.pathname.indexOf('infographic') !== -1){
      render =  'infographic';
    }else if(this.props.location.pathname.indexOf('portfolio') !== -1 ){
      render = 'portfolio'
    } else{
      render = 'rest'
    }
    console.log(`renderRest id ${render}`)
    return (
          
            <div className="App" onClick={this.menuClose}>
              {this.renderEverythingBelowHeader(render)}
            </div>
    );
  }
}

export default App;
