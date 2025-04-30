import { useNavigate, useParams } from 'react-router-dom';
import ChatItem from '../../components/ChatItem';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import {
  getChatInfo,
  getChatMsg,
  getChatMyMsg,
  postChatMsg,
} from '../../api/chat';
import { ChatRoom, Message } from '../../types';
import ChatRoomSkeleton from '../../components/skeletons/ChatRoomSkeleton';

function Chat() {
  const contentRef = useRef('');
  const scrollRef = useRef<HTMLDivElement | null>(null); // 🔹 스크롤 ref 추가

  const [msg, setMsg] = useState<Message[]>([]);
  const [chatInfo, setChatInfo] = useState<ChatRoom | null>(null);
  const [senderType, setSenderType] = useState<'me' | 'other'>('me');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();
  const sender_id = Number(localStorage.getItem('id'));

  const handleImg = () => {
    navigate('/chatlist');
  };

  const inputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    contentRef.current = e.target.value;
  };

  const senderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as 'me' | 'other';
    setSenderType(value);
  };

  const sendMsg = async () => {
    const chatroomId = id || '';
    const senderId =
      senderType === 'me' ? sender_id : Number(chatInfo?.other_user?.id);
    const now = new Date().toISOString();

    const sendMsgData: Message = {
      id: Date.now(),
      chatroom_id: Number(chatroomId),
      sender_id: senderId,
      content: contentRef.current,
      created_at: now,
      updated_at: now,
    };

    setMsg((prev) => [...prev, sendMsgData]);

    const sendData = {
      sender_id: senderId,
      content: contentRef.current,
    };

    await postChatMsg({ chatroomId, sendData });
  };

  useEffect(() => {
    const getChat = async () => {
      if (!id) return;
      try {
        const res = id === 'me' ? await getChatMyMsg() : await getChatMsg(id);
        const info = await getChatInfo(id);

        setMsg(res.data);
        setChatInfo(info.data);
      } finally {
        setLoading(false);
      }
    };

    getChat();
  }, []);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msg]);

  if (loading) return <ChatRoomSkeleton />;

  return (
    <>
      <div className='flex flex-col w-[392px] h-[642px] bg-[#c1d6e8] text-sm rounded-xl'>
        <header className='relative flex h-16 items-center'>
          <img
            src={'/left.svg'}
            className='absolute left-4 h-6 cursor-pointer'
            onClick={handleImg}
          />
          <p className='mx-auto text-xl font-bold'>
            {chatInfo?.other_user?.name}
          </p>
        </header>

        <div
          ref={scrollRef}
          className='flex flex-col overflow-y-auto h-3/4 p-2 gap-2'
        >
          <ChatItem msgData={msg} chatInfo={chatInfo} />
        </div>
        {id !== 'me' && (
          <div className='flex justify-center gap-4 p-2 bg-stone-100'>
            <label className='flex items-center gap-1 '>
              <input
                type='radio'
                name='sender'
                value='me'
                checked={senderType === 'me'}
                onChange={senderChange}
              />
              나
            </label>
            <label className='flex items-center gap-1 h-7'>
              <input
                type='radio'
                name='sender'
                value='other'
                checked={senderType === 'other'}
                onChange={senderChange}
              />
              상대방
            </label>
          </div>
        )}

        <div className='h-1/5 relative'>
          <textarea
            name='chat'
            placeholder='메세지를 입력하세요'
            className='h-full w-full resize-none bg-[#FEFEFE] outline-none p-2 pr-16'
            onChange={inputChange}
          />
          <button
            onClick={sendMsg}
            className='absolute bottom-2 right-2 z-10 h-10 w-14 rounded-md bg-gray-200'
          >
            입력
          </button>
        </div>
      </div>
    </>
  );
}

export default Chat;
