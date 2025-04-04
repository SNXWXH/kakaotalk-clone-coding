import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const mockData = {
    email: 'user@gmail.com',
    passwd: 'user1234!',
  };
  const [email, setEmail] = useState('');
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [passwd, setPasswd] = useState('');
  const handlePasswd = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswd(e.target.value);
  };

  let [active, setActive] = useState(false);
  const activeLogin = () => {
    email && passwd ? setActive(true) : setActive(false);
  };

  let [msg, setMsg] = useState(' ');
  const handleLogin = () => {
    if (!email.includes('@')) setMsg('올바른 이메일 형식을 입력하세요');
    if (email !== mockData.email || passwd !== mockData.passwd)
      setMsg('카카오계정 또는 비밀번호를 다시 확인해 주세요.');
    else {
      setMsg('');
      alert('로그인 성공');
    }
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/register');
  };

  return (
    <>
      <div className='flex flex-col items-center w-[392px] h-[642px] bg-[#F9E000] text-sm rounded-xl'>
        <img src={'/kakaoLogo.png'} className='w-1/3 mt-25 mb-10' />

        <input
          type='email'
          placeholder='아이디(E-mail)'
          onChange={handleEmail}
          onKeyUp={activeLogin}
          className='w-2/3 h-[45px] bg-[#F5F5F5] p-2 border-1 border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
        />
        <input
          type='password'
          placeholder='비밀번호'
          onChange={handlePasswd}
          onKeyUp={activeLogin}
          className='w-2/3 h-[45px] bg-[#F5F5F5] p-2 border-1 border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
        />
        <button
          onClick={handleLogin}
          className={`w-2/3 h-[45px] my-3 ${
            active ? 'bg-[#3C2F2B] text-[#F5F5F5]' : 'bg-[#F5F5F5]'
          }`}
        >
          로그인
        </button>
        <p className='text-red-500 text-sm h-4'>{msg}</p>
        <button onClick={handleNavigate} className='mt-3'>
          이메일로 회원가입
        </button>
      </div>
    </>
  );
}
