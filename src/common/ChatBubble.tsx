function ChatBubble({ isSender }: { isSender: boolean }) {
  return (
    <div
      className={`flex w-fit max-w-[60%] h-auto items-center justify-center 
        ${isSender ? 'bg-[#F9E000]' : 'bg-[#FEFEFE]'} 
        p-1.5 m-2 rounded-sm whitespace-pre-wrap break-all`}
    >
      ChatBubbleChatBubbleChatBubbleChatBubbleChatBubble
    </div>
  );
}

export default ChatBubble;
