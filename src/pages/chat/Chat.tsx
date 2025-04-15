import { useNavigate } from 'react-router-dom';
import ChatBubble from '../../common/ChatBubble';
import ChatItem from '../../common/ChatItem';

function Chat() {
  const navigate = useNavigate();

  const handleImg = () => {
    navigate('/chatList');
  };

  return (
    <>
      <div className='flex flex-col w-[392px] h-[642px] bg-[#c1d6e8] text-sm rounded-xl'>
        <header className='relative flex h-16 items-center'>
          <img
            src={'./left.svg'}
            className='absolute left-4 h-6'
            onClick={handleImg}
          />
          <p className='mx-auto text-xl font-bold'>이설아</p>
        </header>
        <div className='flex flex-col-reverse overflow-y-auto h-3/4 px-2 gap-2'>
          <ChatItem />
        </div>
        <div className='h-1/5 relative'>
          <textarea
            name='chat'
            placeholder='메세지를 입력하세요'
            className='h-full w-full resize-none bg-[#FEFEFE] outline-none p-2 pr-16 '
          />
          <button className='absolute bottom-2 right-2 z-10 h-10 w-14 rounded-md bg-gray-200'>
            입력
          </button>
        </div>
      </div>
    </>
  );
}

export default Chat;
