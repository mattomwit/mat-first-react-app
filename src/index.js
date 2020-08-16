import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Game from './Components/Board/Game';
import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';
import About from './Components/Pages/About';
import Navbar from './Components/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
// const BaseURL = "/first-react-app";
const BaseURL = process.env.PUBLIC_URL; 

ReactDOM.render(
  <React.StrictMode>
    
    <Helmet titleTemplate="%s - My App" defaultTitle="My App">
      <meta name="description" content="A React.js aapplication" />
    </Helmet>
    <BrowserRouter basename={BaseURL}>
    
      <Navbar activeClass="active"></Navbar>
      <div className="border rounded p-3 mt-3">
        <Switch>
          <Route path="/game" component={Game}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
