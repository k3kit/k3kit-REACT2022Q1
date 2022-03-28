import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/router/about-page';
import HomePage from './components/router/home-page';
import NotfoundPage from './components/router/notefount-page';
import './App.css';
import Layout from './components/router/layout/Layout';
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
