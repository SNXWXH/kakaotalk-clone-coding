function ChatRoomSkeleton() {
  return (
    <div className='flex flex-col w-[392px] h-[642px] bg-[#c1d6e8] text-sm rounded-xl'>
      {/* Header */}
      <div className='h-16 flex items-center justify-center animate-pulse bg-[#aac3d8] rounded-t-xl'>
        <div className='h-4 w-24 bg-gray-300 rounded' />
      </div>

      {/* Message List */}
      <div className='flex flex-col gap-4 overflow-y-auto h-3/4 p-4'>
        {[...Array(5)].map((_, i) => (
          <div key={i} className='flex items-start gap-2 animate-pulse'>
            <div className='w-10 h-10 rounded-md bg-gray-300' />
            <div className='flex flex-col gap-2'>
              <div className='w-24 h-4 bg-gray-300 rounded' />
              <div className='w-40 h-4 bg-gray-300 rounded' />
            </div>
          </div>
        ))}
      </div>

      {/* Sender select */}
      <div className='flex justify-center gap-4 p-2 bg-stone-100 animate-pulse'>
        <div className='w-16 h-6 bg-gray-300 rounded' />
        <div className='w-16 h-6 bg-gray-300 rounded' />
      </div>

      {/* Textarea */}
      <div className='relative h-1/5 p-2 bg-white animate-pulse'>
        <div className='w-full h-full bg-gray-200 rounded' />
        <div className='absolute bottom-2 right-2 w-14 h-10 bg-gray-300 rounded-md' />
      </div>
    </div>
  );
}

export default ChatRoomSkeleton;
