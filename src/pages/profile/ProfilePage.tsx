import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserInfo } from '../../api/user';

function ProfilePage() {
  const profileBg = '/profileBg.png';
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  // const [profileImg, setProfileImg] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [name, setName] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const navigateToChat = () => {
    navigate('/chat/me');
  };

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await getUserInfo();
      setUserInfo(res.data);
      setName(res.data.name);
      setStatusMessage(res.data.bio);
      // setProfileImg(res.data.profile_image_url);
    };
    getUser();
  }, []);

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
          <div className='w-full h-full bg-black/25' />
        </div>
      )}

      <div
        className={`relative z-10 flex flex-col w-full h-full ${
          profileBg ? '' : 'bg-gray-500'
        } justify-end items-center p-3`}
      >
        <div className='flex flex-col justify-center items-center w-full'>
          <img
            src={userInfo.profile_image_url}
            className='w-28 aspect-square object-cover rounded-2xl mb-2'
          />

          {isEditing ? (
            <>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='h-9 w-28 text-xl font-bold my-1 text-center border border-gray-300 bg-white/50 rounded-md px-2 py-1 focus:outline-none'
              />
              <input
                type='text'
                value={statusMessage}
                onChange={(e) => setStatusMessage(e.target.value)}
                className='h-9 w-3/4 text-base font-medium text-center border border-gray-300  bg-white/50 rounded-md px-2 py-1 focus:outline-none'
              />
            </>
          ) : (
            <>
              <p className='flex items-center h-9 text-xl font-bold my-1 text-white'>
                {name}
              </p>
              <p className='flex items-center h-9 font-medium text-white'>
                {statusMessage}
              </p>
            </>
          )}

          <hr className='w-5/6 border-t border-white my-4' />
        </div>

        <div className='flex justify-between items-center w-11/12 px-4 mb-2'>
          <button
            onClick={navigateToChat}
            className='w-2/5 h-10 bg-gray-100 shadow-md rounded-md hover:bg-gray-200 cursor-pointer'
          >
            나와의 채팅
          </button>
          <button
            onClick={toggleEdit}
            className='w-2/5 h-10 bg-gray-100 shadow-md rounded-md hover:bg-gray-200 cursor-pointer'
          >
            {isEditing ? '완료' : '프로필 편집'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
