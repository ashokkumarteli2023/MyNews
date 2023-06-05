import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Routes>
           <Route exact path="/" key="generalHome"
           element={<News pageSize={9} country="in" category="general"/>}
           />
           <Route exact path="/business" key="business" 
           element={<News pageSize={18} country="in" category="business"/>}
           />
           <Route exact path="/technology" key="technology"
           element={<News pageSize={18} country="in" category="technology"/>}
           />
           <Route exact path="/sports" key="sports"
           element={<News pageSize={18} country="in" category="sports"/>}
           />
           <Route exact path="/science" key="science"
           element={<News pageSize={18} country="in" category="science"/>}
           />
           <Route exact path="/health" key="health"
           element={<News pageSize={18} country="in" category="health"/>}
           />
           <Route exact path="/entertainment" key="entertainment"
           element={<News pageSize={18} country="in" category="entertainment"/>}
           />
           <Route exact path="/general" key="general"
           element={<News pageSize={18} country="in" category="general"/>}
           />
        </Routes>
        
        
      </div>
      </Router>
    )
  }
}


