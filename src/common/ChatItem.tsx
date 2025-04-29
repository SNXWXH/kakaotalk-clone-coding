import { ChatRoom, Message } from '../types';
import formatTime from '../utils/formatTime';
import ChatBubble from './ChatBubble';

export default function ChatItem({
  msgData,
  chatInfo,
}: {
  msgData: Message[];
  chatInfo: ChatRoom | null;
}) {
  const curUserId = Number(localStorage.getItem('id')) || '';

  return (
    <>
      {msgData.map((msg, i) => (
        <div
          key={i}
          className={`flex ${
            msg.sender_id === curUserId ? 'justify-end' : 'justify-start'
          } items-start gap-2 w-full`}
        >
          {msg.sender_id !== curUserId && (
            <>
              <img
                src={
                  chatInfo?.other_user?.profile_image_url ||
                  '/default-profile.png'
                }
                className='w-12 h-12 rounded-md'
              />
            </>
          )}

          <div
            className={`flex items-end gap-1 ${
              msg.sender_id === curUserId ? 'justify-end' : ''
            }`}
          >
            {msg.sender_id === curUserId && (
              <>
                <p className='text-xs text-gray-400 mb-1'>
                  {formatTime(msg.created_at)}
                </p>
                <ChatBubble
                  isSender={msg.sender_id === curUserId}
                  msg={msg.content}
                />
              </>
            )}

            {msg.sender_id !== curUserId && (
              <>
                <ChatBubble
                  isSender={msg.sender_id === curUserId}
                  msg={msg.content}
                  otherUser={chatInfo?.other_user?.name}
                />
                <p className='text-xs text-gray-400 mb-1'>
                  {formatTime(msg.created_at)}
                </p>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
