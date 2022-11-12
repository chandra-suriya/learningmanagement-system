import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">STUDAT</a>
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Courses</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  User
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/user-register">Register</Link>
                <Link className="dropdown-item" to="/user-login">Login</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/user-dashboard">Dash board</Link>
                  <Link className="dropdown-item" to="/user-login">Logout</Link>

                </div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>

  )
}

export default Header;