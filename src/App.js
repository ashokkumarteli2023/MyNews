import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  const[progress,setProgress]=useState(0);
  let apiKey=process.env.REACT_APP_API_KEY
    return (
      <Router>
      <div>
      <LoadingBar color='#f11946' progress={progress} />
        <Navbar/>
        <Routes>
           <Route exact path="/" 
           element={<News setProgress={setProgress} apiKey={apiKey} pageSize={9} key="generalHome" country="in" category="general"/>}
           />
           <Route exact path="/business"  
           element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={18} key="business" country="in" category="business"/>}
           />
           <Route exact path="/technology" 
           element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={18} key="technology" country="in" category="technology"/>}
           />
           <Route exact path="/sports" 
           element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={18} key="sports" country="in" category="sports"/>}
           />
           <Route exact path="/science" 
           element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={18} key="science" country="in" category="science"/>}
           />
           <Route exact path="/health" 
           element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={18} key="health" country="in" category="health"/>}
           />
           <Route exact path="/entertainment" 
           element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={18} key="entertainment" country="in" category="entertainment"/>}
           />
           <Route exact path="/general" 
           element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={18} key="general" country="in" category="general"/>}
           />
        </Routes>
       </div>
      </Router>
    )
  }
  
export default App

