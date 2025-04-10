function ChatListItem() {
  return (
    <>
      <div className='flex justify-between items-center h-20 bg-[#FEFEFE]'>
        <div className='flex items-center justify-center h-[60px] w-[70px] ml-3'>
          <img src={'./userImg.png'} className='h-full w-[60px] rounded-xl' />
        </div>
        <div className='flex flex-col w-2/3 h-3/4 justify-center px-2'>
          <p className='h-3/5 flex items-center font-bold text-[16px]'>
            상대방
          </p>
          <p className='h-2/5 flex items-center'>저녁 마라탕 ㄱ</p>
        </div>
        <p className='flex justify-center w-1/6'>17:32</p>
      </div>
    </>
  );
}

export default ChatListItem;
