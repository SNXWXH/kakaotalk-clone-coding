export default function LoginPage() {
  return (
    <>
      <div className='flex flex-col items-center w-[392px] h-[642px] bg-[#FFDF3D] text-sm rounded-xl'>
        <img src='../../public/kakaoLogo.png' className='w-1/3 mt-25 mb-10' />

        <input
          type='email'
          placeholder='아이디(E-mail)'
          className='w-2/3 h-[45px] bg-[#F5F5F5] p-2 border-1 border-zinc-200'
        />
        <input
          type='password'
          placeholder='비밀번호'
          className='w-2/3 h-[45px] bg-[#F5F5F5] p-2 border-1 border-zinc-200'
        />
        <button className='w-2/3 h-[45px] bg-[#F5F5F5] my-3'>로그인</button>
        <button>이메일로 회원가입</button>
      </div>
    </>
  );
}
