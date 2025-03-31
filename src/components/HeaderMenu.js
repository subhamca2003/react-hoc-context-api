import React from 'react';
import { Link } from 'react-router-dom';


const HeaderMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">My App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          
            <li className="nav-item">
              <Link className="nav-link" to="/parent-component">Props</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter-limit">counter-limit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fetch-component">Fetch-component</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post-list">Posts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product-list">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order-list">Order</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/student-list">Student list (HOC)</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart-list">Cart (Context API)</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderMenu;