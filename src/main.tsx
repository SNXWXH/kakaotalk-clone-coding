import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './common/Layout';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import ChatList from './pages/chatList/ChatList';
import Chat from './pages/chat/Chat';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/chatList' element={<ChatList />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </StrictMode>
);
