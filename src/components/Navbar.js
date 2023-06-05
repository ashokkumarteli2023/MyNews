import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link " aria-current="page" href="/">Home</a> */}
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">About</a> */}
          <Link to="/" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">business</a> */}
          <Link to="/business" className="nav-link">Business</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">general</a> */}
          <Link to="/general" className="nav-link">General</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">technology</a> */}
          <Link to="/technology" className="nav-link">Technology</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">sports</a> */}
          <Link to="/sports" className="nav-link">Sports</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">science</a> */}
          <Link to="/science" className="nav-link">Science</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">health</a> */}
          <Link to="/health" className="nav-link">Health</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">entertainment</a> */}
          <Link to="/entertainment" className="nav-link">Entertainment</Link>
        </li>
        </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
