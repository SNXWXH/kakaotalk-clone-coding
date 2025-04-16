import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './common/Layout';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import ChatListPage from './pages/chatList/ChatListPage';
import ChatPage from './pages/chat/ChatPage';
import ProfilePage from './pages/profile/ProfilePage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/chatlist' element={<ChatListPage />} />
          <Route path='/chat' element={<ChatPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </StrictMode>
);
