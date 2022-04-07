import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

const Layout = () => {
  return (
    <>
      <header className="header">
        <NavLink data-testid="link-home" to="/">
          Home
        </NavLink>
        <NavLink data-testid="link-about" to="/about">
          About us
        </NavLink>
      </header>
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
