import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import './App.css';
import Layout from './common/Layout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </StrictMode>
);
