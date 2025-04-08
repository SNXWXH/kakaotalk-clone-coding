// * input 컴포넌트화 하기

import { FormEvent, useState } from 'react';

function RegisterPage() {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirm: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    //! 일단 as로 타입 지정
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirm = formData.get('confirm') as string;

    const newErrors = { email: '', password: '', confirm: '' };
    let isValid = true;

    if (!email) {
      newErrors.email = '이메일을 입력해주세요.';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = '이메일 형식이 아닙니다.';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    console.log({ email, password, confirm });
  };

  return (
    <>
      <div className='flex flex-col items-center w-[392px] h-[642px] bg-[#FEFEFE]  text-sm rounded-xl'>
        <div className='flex items-center justify-between mt-24 mb-8 w-3/7'>
          <img src={'/kakaoLogo.png'} className='w-12 h-11 ' />
          <p className='text-3xl font-bold'>회원가입</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col w-full items-center'
        >
          <div className='flex w-5/6 justify-between items-start '>
            <label className='font-medium w-1/4 text-sm text-center pr-2 pt-1'>
              이메일 <br />
              (E-mail)
            </label>
            <div className='w-2/3'>
              <input
                type='text'
                name='email'
                placeholder='아이디를 입력하세요(이메일 형식)'
                className='w-full h-[45px] p-2 border items-end border-zinc-200 rounded focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
              />
              <p className='text-red-500 text-xs mt-1 min-h-[18px]'>
                {errors.email}
              </p>
            </div>
          </div>
          <div className='flex w-5/6 justify-between items-start '>
            <label className='font-medium w-1/4 text-sm text-center pr-2 pt-2'>
              비밀번호
            </label>
            <div className='w-2/3'>
              <input
                type='password'
                name='password'
                placeholder='비밀번호 8자 이상, 특수문자 포함'
                className='w-full h-[45px] p-2 border items-end border-zinc-200 rounded focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
              />
              <p className='text-red-500 text-xs mt-1 min-h-[18px]'>
                {errors.password}
              </p>
            </div>
          </div>
          <div className='flex w-5/6 justify-between items-start '>
            <label className='font-medium w-1/4 text-sm text-center pr-2 pt-2'>
              비밀번호 <br />
            </label>
            <div className='w-2/3'>
              <input
                type='password'
                name='confirm'
                placeholder='비밀번호를 입력하세요'
                className='w-full h-[45px] p-2 border items-end border-zinc-200 rounded focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
              />
              <p className='text-red-500 text-xs mt-1 min-h-[18px]'>
                {errors.confirm}
              </p>
            </div>
          </div>
          <div className='flex w-5/6 justify-between items-center mb-3'>
            <label className='font-medium w-1/4 text-center'>이름</label>
            <input
              type='text'
              name='name'
              placeholder='이름을 입력하세요'
              className='w-2/3 h-[45px] p-2 border-1 items-end border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
            />
          </div>
          <div className='flex w-5/6 justify-between items-center my-2'>
            <label className='font-medium w-1/4 text-center'>휴대폰 번호</label>
            <input
              type='text'
              name='phone'
              placeholder='- 없이 번호를 입력하세요'
              className='w-2/3 h-[45px] p-2 border-1 items-end border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
            />
          </div>
          <button
            type='submit'
            className='w-5/6 h-[45px] my-3 bg-[#F9E000] text-[#3C2F2B] font-bold rounded-sm'
          >
            회원가입 완료
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
