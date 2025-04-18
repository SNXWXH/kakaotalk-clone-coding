import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import ChatListPage from './pages/chatList/ChatListPage';
import ChatPage from './pages/chat/ChatPage';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/chatlist' element={<ChatListPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
