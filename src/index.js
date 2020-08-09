import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Game from './Components/Board/Game';
import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';
import About from './Components/Pages/About';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter basename="/first-react-app/">
      <Navbar></Navbar>
      <Route path="/game" component={Game}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/blog" component={Blog}></Route>
      <Route path="/about" component={About}></Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
