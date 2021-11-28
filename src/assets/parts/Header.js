import React from "react";
import logo from "assets/images/lg_flowbase.svg";

export default function Header() {
  return (
    <div className="container">
      <header className="spacing-sm">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="navbar-brand" href="#">
            <img src={logo} width="120" height="120" alt="" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn btn-warning text-white">Get Started</button>
          </div>
        </nav>
      </header>
    </div>
  );
}
