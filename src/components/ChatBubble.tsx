function ChatBubble({
  isSender,
  msg,
  otherUser,
}: {
  isSender: boolean;
  msg: string;
  otherUser?: string;
}) {
  return (
    <div
      className={`flex flex-col ${
        isSender ? 'items-end' : 'items-start'
      } max-w-[80%]`}
    >
      {!isSender && (
        <p className='text-xs text-gray-500 ml-1 mb-0.5'>{otherUser}</p>
      )}
      <div
        className={`
          px-3 py-2 text-sm leading-[1.4] rounded-lg whitespace-pre-wrap break-all
          ${
            isSender
              ? 'bg-[#F9E000] text-black self-end'
              : 'bg-[#FEFEFE] text-black self-start'
          }
        `}
      >
        {msg}
      </div>
    </div>
  );
}

export default ChatBubble;
