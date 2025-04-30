function ChatListSkeleton() {
  return (
    <div className='flex flex-col w-[392px] h-[642px] bg-[#FEFEFE] text-sm rounded-xl p-4'>
      <div className='w-full h-24 bg-[#F9E000] rounded-t-2xl mb-2' />

      <div className='flex items-center h-20 animate-pulse'>
        <div className='w-[60px] h-[60px] bg-gray-300 rounded-xl ml-4' />
        <div className='flex flex-col justify-center px-4 w-3/5'>
          <div className='h-4 bg-gray-300 rounded w-3/4 mb-2' />
          <div className='h-3 bg-gray-300 rounded w-2/3' />
        </div>
        <div className='w-1/4 h-9 bg-gray-300 rounded-2xl mr-4' />
      </div>

      <div className='flex flex-col mt-4 space-y-4 overflow-auto'>
        {[...Array(1)].map((_, i) => (
          <div key={i} className='flex items-center h-20 px-4 animate-pulse'>
            <div className='w-[60px] h-[60px] bg-gray-300 rounded-xl' />
            <div className='flex flex-col justify-center px-4 w-3/4'>
              <div className='h-4 bg-gray-300 rounded w-2/3 mb-2' />
              <div className='h-3 bg-gray-300 rounded w-1/3' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatListSkeleton;
