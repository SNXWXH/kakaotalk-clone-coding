import { useNavigate } from 'react-router-dom';
import ChatListItem from '../../components/ChatListItem';
import { useEffect, useState } from 'react';
import { getChatRoom } from '../../api/chat';
import { ChatRoom, UserInfo } from '../../types';
import { getUserInfo } from '../../api/user';
import ChatListSkeleton from '../../components/skeletons/ChatListSkeleton';

function ChatList() {
  const navigate = useNavigate();
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const handleImg = () => {
    navigate('/profile');
  };

  useEffect(() => {
    const getChat = async () => {
      const res = await getChatRoom();
      setChatRooms(res.data);
    };

    const userInfoData = async () => {
      const res = await getUserInfo();
      setUserInfo(res.data);
    };

    Promise.all([getChat(), userInfoData()]).finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) return <ChatListSkeleton />;

  return (
    <div className='flex flex-col w-[392px] h-[642px] bg-[#FEFEFE] text-sm rounded-xl'>
      <div className='flex items-center w-full h-24 rounded-t-2xl bg-[#F9E000]'>
        <p className='text-4xl font-bold ml-6'>채팅</p>
        <p className='flex items-end ml-2 text-base'>{userInfo?.name}</p>
      </div>
      <div className='overflow-auto'>
        <div className='flex justify-between items-center h-20 bg-[#FEFEFE] hover:bg-gray-100'>
          <div className='flex items-center justify-center h-[60px] w-[70px] ml-4'>
            <img
              src={userInfo?.profile_image_url}
              onClick={handleImg}
              className='h-full w-[60px] rounded-xl cursor-pointer'
              alt='profile'
            />
          </div>
          <div className='flex flex-col w-3/5 h-3/4 justify-center px-2'>
            <p className='h-3/5 flex items-center font-bold text-[16px]'>
              {userInfo?.name}
            </p>
            <p className='h-2/5 flex items-center'>{userInfo?.bio}</p>
          </div>
          <button
            className='flex justify-center items-center w-1/4 h-9 bg-gray-200 m-3.5 p-2 rounded-2xl cursor-pointer'
            onClick={() => navigate('/chat/me')}
          >
            나와의 채팅
          </button>
        </div>

        {chatRooms.map((room, i) => (
          <div key={i} onClick={() => navigate(`/chat/${room.id}`)}>
            <ChatListItem
              userInfo={room.other_user}
              lastMsg={room?.last_message}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;
