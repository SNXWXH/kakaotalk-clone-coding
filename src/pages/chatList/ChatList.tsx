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
          <ChatListItem />
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
