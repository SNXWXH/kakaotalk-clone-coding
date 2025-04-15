import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const profileBg = '/profileBg.png';
  const navigate = useNavigate();

  const navigateToChat = () => {
    navigate('/chat');
  };

  return (
    <div className='relative w-[392px] h-[642px] rounded-xl overflow-hidden text-sm'>
      <img
        src='/xmark.svg'
        alt='닫기'
        onClick={() => navigate(-1)}
        className='absolute top-4 right-4 w-5 h-5 cursor-pointer z-20'
      />
      {profileBg && (
        <div
          className='absolute inset-0 z-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${profileBg})` }}
        >
          <div className='w-full h-full bg-white/30' />
        </div>
      )}

      <div
        className={`relative z-10 flex flex-col w-full h-full ${
          profileBg ? '' : 'bg-gray-200'
        } justify-end items-center p-3`}
      >
        <div className='flex flex-col justify-center items-center w-full'>
          <img
            src={'/profileImg.jpeg'}
            className='w-28 aspect-square object-cover rounded-2xl mb-2'
          />
          <p className='text-xl font-bold my-1.5'>이설아</p>
          <p className='text-base font-medium'>상태메세지야</p>
          <hr className='w-5/6 border-t border-gray-500 my-4' />
        </div>
        <div className='flex justify-between items-center w-11/12 px-4 mb-2'>
          <button
            onClick={navigateToChat}
            className='w-2/5 h-10 bg-gray-100 shadow-md rounded-md hover:bg-gray-200'
          >
            나와의 채팅
          </button>
          <button className='w-2/5 h-10 bg-gray-100 shadow-md rounded-md hover:bg-gray-200'>
            프로필 편집
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
