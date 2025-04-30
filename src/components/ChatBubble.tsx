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
      className={`flex flex-col max-w-[65%] ${
        isSender ? 'items-end' : 'items-start'
      }`}
    >
      {!isSender && (
        <p className='text-xs text-gray-500 ml-1 mb-0.5'>{otherUser}</p>
      )}
      <div
        className={`w-fit break-all whitespace-pre-wrap px-3 py-2 rounded-sm ${
          isSender ? 'bg-[#F9E000] self-end' : 'bg-[#FEFEFE] self-start'
        }`}
      >
        {msg}
      </div>
    </div>
  );
}

export default ChatBubble;
