import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/about-page';
import HomePage from './pages/home-page';
import NotfoundPage from './pages/notefount-page';
import './App.css';
import Layout from './router/layout/Layout';
import FormPage from './pages/form-page';
import AppState from './context/appState';
function App() {
  return (
    <AppState>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </AppState>
  );
}

export default App;
