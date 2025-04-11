function Chat() {
  return (
    <>
      <div className='flex flex-col w-[392px] h-[642px] bg-[#c1d6e8] text-sm rounded-xl'>
        <header className='relative flex h-16 items-center border'>
          <img src={'./left.svg'} className='absolute left-4 h-6' />
          <p className='mx-auto text-xl font-bold'>이설아</p>
        </header>
        <div className='border h-3/4'>chat</div>
        <div className='border h-1/5'>입력창</div>
      </div>
    </>
  );
}

export default Chat;
