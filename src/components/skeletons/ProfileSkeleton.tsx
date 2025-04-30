const ProfileSkeleton = () => {
  return (
    <div className='flex flex-col items-center w-full animate-pulse'>
      <div className='w-28 h-28 bg-gray-300 rounded-2xl mb-2' />
      <div className='w-24 h-5 bg-gray-300 rounded-md my-1' />
      <div className='w-3/4 h-5 bg-gray-300 rounded-md mb-2' />
      <hr className='w-5/6 border-t border-white/30 my-4' />
      <div className='flex justify-between items-center w-11/12 px-4 mb-2 gap-4'>
        <div className='w-2/5 h-10 bg-gray-300 rounded-md' />
        <div className='w-2/5 h-10 bg-gray-300 rounded-md' />
      </div>
    </div>
  );
};

export default ProfileSkeleton;
