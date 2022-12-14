import React from 'react'


export default function Navigation() {
  return  (<nav className="navbar bg-light">
  <div className="container-fluid">
    <a href="#" className="navbar-brand">YouTube</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>);
  
  
}
