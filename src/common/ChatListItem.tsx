import { LastMsg, UserInfo } from '../types';
import formatTime from '../utils/formatTime';

function ChatListItem({
  userInfo,
  lastMsg,
}: {
  userInfo: UserInfo;
  lastMsg: LastMsg;
}) {
  let img = userInfo.profile_image_url;
  let name = userInfo.name;

  return (
    <>
      <div className='flex justify-between items-center h-20 bg-[#FEFEFE] hover:bg-gray-100'>
        <div className='flex items-center justify-center h-[60px] w-[70px] ml-3'>
          <img src={img} className='h-full w-[60px] rounded-xl' />
        </div>
        <div className='flex flex-col w-2/3 h-3/4 justify-center px-2'>
          <p className='h-3/5 flex items-center font-bold text-[16px]'>
            {name}
          </p>
          <p className='h-2/5 flex items-center'>
            {lastMsg ? lastMsg.content : '대화내용이 존재하지 않습니다'}
          </p>
        </div>
        <p className='flex justify-center w-1/6'>
          {lastMsg ? formatTime(lastMsg.updated_at) : ''}
        </p>
      </div>
    </>
  );
}

export default ChatListItem;
