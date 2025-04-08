// * input 컴포넌트화 하기

import { FormEvent } from 'react';

function RegisterPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    console.log({ email });
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
          <div className='flex w-5/6 justify-between items-center my-2'>
            <label className='font-medium w-1/4 text-center'>
              이메일
              <br />
              (E-mail)
            </label>
            <input
              type='email'
              name='email'
              placeholder='아이디를 입력하세요(이메일 형식)'
              className='w-2/3 h-[45px] p-2 border-1 items-end border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
            />
          </div>
          <div className='flex w-5/6 justify-between items-center my-2'>
            <label className='font-medium w-1/4 text-center'>비밀번호</label>
            <input
              type='password'
              name='password'
              placeholder='비밀번호 8자 이상, 특수문자 포함'
              className='w-2/3 h-[45px] p-2 border-1 items-end border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
            />
          </div>
          <div className='flex w-5/6 justify-between items-center my-2'>
            <label className='font-medium w-1/4 text-center'>
              비밀번호
              <br /> 확인
            </label>
            <input
              type='password'
              name='passwordConfirm'
              placeholder='비밀번호를 입력하세요'
              className='w-2/3 h-[45px] p-2 border-1 items-end border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
            />
          </div>
          <div className='flex w-5/6 justify-between items-center my-2'>
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
