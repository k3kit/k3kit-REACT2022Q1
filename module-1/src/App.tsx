import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/about-page';
import HomePage from './pages/home-page';
import NotfoundPage from './pages/notefount-page';
import './App.css';
import Layout from './router/layout/Layout';
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
