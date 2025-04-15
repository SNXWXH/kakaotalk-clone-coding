import ChatBubble from './ChatBubble';

export default function ChatItem() {
  const isSender = [false, true, true, false, false, true, true, false, false];

  return (
    <>
      {isSender.reverse().map((sender, i) => (
        <div
          key={i}
          className={`flex ${
            sender ? 'justify-end' : 'justify-start'
          } items-start gap-2 w-full`}
        >
          {!sender && (
            <img src={'/userImg.png'} className='w-12 h-12 rounded-md' />
          )}

          <div
            className={`flex items-end gap-1 ${sender ? 'justify-end' : ''}`}
          >
            {sender && (
              <>
                <p className='text-xs text-gray-400 mb-1'>19:20</p>
                <ChatBubble isSender={sender} />
              </>
            )}
            {!sender && (
              <>
                <ChatBubble isSender={sender} />
                <p className='text-xs text-gray-400 mb-1'>19:20</p>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
