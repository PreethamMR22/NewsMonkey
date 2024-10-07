
import './App.css';

import React, { Component } from 'react'
import Navbar from './componants/Navbar';
import News from './componants/News';
import {
  BrowserRouter as Browser,
  Router,
  Route,
  Routes,

} from 'react-router-dom'

export default class App extends Component {

  render() {
    
    return (
    <div>
      
      <Browser>
      <Navbar />
      <Routes>
      <Route exact  path="/"  element={<News key="general" pageSize={9} category="general"/>}/>
      <Route exact  path="/technology"  element={<News key="technology" pageSize={9} category="technology"/>}/>
      <Route exact  path="/health"  element={<News key="health" pageSize={9} category="health"/>}/>
      <Route exact  path="/business"  element={<News key="business" pageSize={9} category="business"/>}/>
      <Route exact  path="/entertainment"  element={<News key="entertainment" pageSize={9} category="entertainment"/>}/>
      <Route exact  path="/science"  element={<News key="science" pageSize={9} category="science"/>}/>
      <Route exact  path="/sports"  element={<News key="sports" pageSize={9} category="sports"/>}/>
      
      </Routes>





      </Browser>


       
    </div>
    )
  }
}

