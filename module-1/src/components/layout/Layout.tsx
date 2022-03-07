import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
      </header>
      <Outlet />
      <footer>kekit</footer>
    </>
  );
};

export default Layout;
