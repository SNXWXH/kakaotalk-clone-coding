import { ChangeEvent, useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [passwd, setPasswd] = useState('');
  const handlePasswd = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswd(e.target.value);
  };

  let [active, setActive] = useState(false);
  const handleLogin = () => {
    email && passwd ? setActive(true) : setActive(false);
  };

  return (
    <>
      <div className='flex flex-col items-center w-[392px] h-[642px] bg-[#F9E000] text-sm rounded-xl'>
        <img src='../../public/kakaoLogo.png' className='w-1/3 mt-25 mb-10' />

        <input
          type='email'
          placeholder='아이디(E-mail)'
          onChange={handleEmail}
          onKeyUp={handleLogin}
          className='w-2/3 h-[45px] bg-[#F5F5F5] p-2 border-1 border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
        />
        <input
          type='password'
          placeholder='비밀번호'
          onChange={handlePasswd}
          onKeyUp={handleLogin}
          className='w-2/3 h-[45px] bg-[#F5F5F5] p-2 border-1 border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
        />
        <button
          className={`w-2/3 h-[45px] my-3 ${
            active ? 'bg-[#3C2F2B] text-[#F5F5F5]' : 'bg-[#F5F5F5]'
          }`}
        >
          로그인
        </button>
        <button>이메일로 회원가입</button>
      </div>
    </>
  );
}
