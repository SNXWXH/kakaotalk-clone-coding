function RegisterPage() {
  return (
    <>
      <div className='flex flex-col items-center w-[392px] h-[642px] bg-[#FEFEFE]  text-sm rounded-xl'>
        <div className='flex items-center justify-between mt-24 mb-8 w-3/7'>
          <img src={'/kakaoLogo.png'} className='w-12 h-11 ' />
          <p className='text-3xl font-bold'>회원가입</p>
        </div>
        <div className='flex w-5/6 justify-between items-center my-2'>
          <p className='font-medium w-1/4 text-center'>
            이메일
            <br />
            (E-mail)
          </p>
          <input
            type='email'
            placeholder='아이디를 입력하세요(이메일 형식)'
            className='w-2/3 h-[45px] p-2 border-1 items-end border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
          />
        </div>
        <div className='flex w-5/6 justify-between items-center my-2'>
          <p className='font-medium w-1/4 text-center'>비밀번호</p>
          <input
            type='password'
            placeholder='비밀번호 8자 이상, 특수문자 포함'
            className='w-2/3 h-[45px] p-2 border-1 items-end border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
          />
        </div>{' '}
        <div className='flex w-5/6 justify-between items-center my-2'>
          <p className='font-medium w-1/4 text-center'>
            비밀번호
            <br /> 확인
          </p>
          <input
            type='password'
            placeholder='비밀번호를 입력하세요'
            className='w-2/3 h-[45px] p-2 border-1 items-end border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
          />
        </div>{' '}
        <div className='flex w-5/6 justify-between items-center my-2'>
          <p className='font-medium w-1/4 text-center'>이름</p>
          <input
            type='text'
            placeholder='이름을 입력하세요'
            className='w-2/3 h-[45px] p-2 border-1 items-end border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
          />
        </div>{' '}
        <div className='flex w-5/6 justify-between items-center my-2'>
          <p className='font-medium w-1/4 text-center'>휴대폰 번호</p>
          <input
            type='text'
            placeholder='- 없이 번호를 입력하세요'
            className='w-2/3 h-[45px] p-2 border-1 items-end border-zinc-200 focus:ring-1 focus:ring-inset focus:ring-gray-400 focus:outline-none'
          />
        </div>
        <button className='w-5/6 h-[45px] my-3 bg-[#F9E000] text-[#3C2F2B] font-bold rounded-sm'>
          회원가입 완료
        </button>
      </div>
    </>
  );
}

export default RegisterPage;
