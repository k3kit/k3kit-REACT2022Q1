import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

const Layout = () => {
  return (
    <>
      <header className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
      </header>
      <main className="main-container">
        <Outlet />
      </main>

      <footer>kekit</footer>
    </>
  );
};

export default Layout;
