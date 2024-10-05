
import './App.css';

import React, { Component } from 'react'
import Navbar from './componants/Navbar';
import News from './componants/News';
import {
  BrowserRouter as Browser,
  Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom'

export default class App extends Component {

  render() {
    
    return (
    <div>
      
      <Browser>
      <Navbar />
      <Routes>
      <Route path="/" element={<News pageSize={9} category="general"/>}/>
      <Route path="/technology" element={<News pageSize={9} category="technology"/>}/>
      <Route path="/health" element={<News pageSize={9} category="health"/>}/>
      <Route path="/business" element={<News pageSize={9} category="business"/>}/>
      <Route path="/entertainment" element={<News pageSize={9} category="entertainment"/>}/>
      <Route path="/science" element={<News pageSize={9} category="science"/>}/>
      <Route path="/sports" element={<News pageSize={9} category="sports"/>}/>
      
      </Routes>





      </Browser>


       
    </div>
    )
  }
}

