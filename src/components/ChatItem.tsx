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
          className={`flex w-full gap-2 items-start ${
            msg.sender_id === curUserId ? 'justify-end' : 'justify-start'
          }`}
        >
          {msg.sender_id !== curUserId && (
            <img
              src={chatInfo?.other_user?.profile_image_url}
              className='w-10 h-10 rounded-md '
            />
          )}

          <div
            className={`flex flex-wrap items-end gap-1 ${
              msg.sender_id === curUserId ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender_id === curUserId ? (
              <>
                <p className='text-xs text-gray-400 mb-1'>
                  {formatTime(msg.created_at)}
                </p>
                <ChatBubble isSender msg={msg.content} />
              </>
            ) : (
              <>
                <ChatBubble
                  isSender={false}
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
