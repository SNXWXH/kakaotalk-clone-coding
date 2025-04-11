import ChatListItem from '../../common/ChatListItem';

function ChatList() {
  return (
    <>
      <div className='flex flex-col w-[392px] h-[642px] bg-[#F9E000] text-sm rounded-xl'>
        <div className='flex items-end m-6'>
          <p className='text-4xl font-bold'>채팅</p>
          <p className='ml-2 text-base'>서라</p>
        </div>
        <div className='overflow-auto'>
          <div className='flex justify-between items-center h-20 bg-[#FEFEFE] hover:bg-gray-100'>
            <div className='flex items-center justify-center h-[60px] w-[70px] ml-4'>
              <img
                src={'./profileImg.jpeg'}
                className='h-full w-[60px] rounded-xl'
              />
            </div>
            <div className='flex flex-col w-3/5 h-3/4 justify-center px-2'>
              <p className='h-3/5 flex items-center font-bold text-[16px]'>
                설아
              </p>
              <p className='h-2/5 flex items-center'>나는야 이설아다</p>
            </div>

            <button className='flex justify-center items-center w-1/4 h-9 bg-gray-200 m-3.5 p-2 rounded-2xl cursor-pointer'>
              나와의 채팅
            </button>
          </div>
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
        </div>
      </div>
    </>
  );
}

export default ChatList;
