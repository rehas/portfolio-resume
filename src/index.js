import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Infographic from './Components/Infographic'


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/infographic' component={Infographic}/>
      <Route path = '/' component={App}/>
    {/* <App /> */}
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
