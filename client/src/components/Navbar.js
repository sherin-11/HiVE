import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">HiVE</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">View Hostels<span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/girls">Girls</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/boys">Boys</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ textAlign: 'center', color: '#f89c1f', paddingTop: '100px', fontSize: '50px', fontFamily: 'Pacifico, cursive', fontWeight: '100' }}>
        Find your perfect hostel...
      </div>
    </div>
  );
}

export default Navbar;
