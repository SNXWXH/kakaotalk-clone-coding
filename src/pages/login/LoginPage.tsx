import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/user';
import axios from 'axios';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(false);
  const [msg, setMsg] = useState(' ');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const activeLogin = () => {
    setActive(email.trim() !== '' && password.trim() !== '');
  };

  const handleNavigate = () => navigate('/register');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    activeLogin();
    if (e.key === 'Enter' && active && !isLoading) {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    if (isLoading) return;

    setIsLoading(true);

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setMsg('올바른 이메일 형식을 입력하세요');
      setIsLoading(false);
      return;
    }

    try {
      const res = await login({ email, password });

      if (res.status === 200) {
        setMsg('');
        localStorage.setItem('token', res.data.accessToken);
        localStorage.setItem('id', res.data.user.id);
        navigate('/chatlist');
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) setMsg(err.response?.data.message);
        else if (err.response?.status === 404)
          setMsg(err.response?.data.message);
        else setMsg('로그인 중 오류가 발생했습니다. 다시 시도해 주세요.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center w-[392px] h-[642px] bg-[#F9E000] text-sm rounded-xl'>
      <img src={'/kakaoLogo.png'} className='w-1/3 mt-25 mb-10' />

      <input
        type='email'
        placeholder='아이디(E-mail)'
        value={email}
        onChange={handleEmail}
        onKeyDown={handleKeyDown}
        className='w-2/3 h-[45px] bg-[#F5F5F5] p-2 border-1 border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
      />
      <input
        type='password'
        placeholder='비밀번호'
        value={password}
        onChange={handlePassword}
        onKeyDown={handleKeyDown}
        className='w-2/3 h-[45px] bg-[#F5F5F5] p-2 border-1 border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
      />
      <button
        onClick={handleLogin}
        disabled={!active || isLoading}
        className={`w-2/3 h-[45px] my-3 ${
          active && !isLoading
            ? 'bg-[#3C2F2B] text-[#F5F5F5] cursor-pointer'
            : 'bg-[#F5F5F5] cursor-not-allowed'
        }`}
      >
        {isLoading ? '로딩중...' : '로그인'}
      </button>
      <p className='text-red-500 text-sm h-4'>{msg}</p>
      <button onClick={handleNavigate} className='mt-3 cursor-pointer'>
        이메일로 회원가입
      </button>
    </div>
  );
}
