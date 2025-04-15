function ChatBubble({ isSender }: { isSender: boolean }) {
  return (
    <div
      className={`flex flex-col max-w-[65%]  ${
        isSender ? 'items-end' : 'items-start'
      }`}
    >
      {!isSender && <p className='m-1'>상대방</p>}
      <div
        className={`flex w-fit h-auto
          ${isSender ? 'bg-[#F9E000] self-end' : 'bg-[#FEFEFE] self-start'} 
          p-1.5 m-1 rounded-sm whitespace-pre-wrap break-all`}
      >
        ChatBubbleChatBubbleChatBubbleChatBubbleChatBubble
      </div>
    </div>
  );
}

export default ChatBubble;
