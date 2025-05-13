import api from './axios';

//채팅방 목록 불러오기
export const getChatRoom = () => api.get('/users/me/chatrooms');

//나와의 채팅 대화 불러오기
export const getChatMyMsg = () => api.get('/chatrooms/me/chats');

//채팅방 대화 불러오기
export const getChatMsg = (chatroomId: string) =>
  api.get(`/chatrooms/${chatroomId}/chats`);

//채팅 보내기
export const postChatMsg = ({
  chatroomId,
  sendData,
}: {
  chatroomId: string;
  sendData: { sender_id: number; content: string };
}) => api.post(`/chatrooms/${chatroomId}/chats`, sendData);

//채팅방 정보 불러오기
export const getChatInfo = (chatroomId: string) =>
  api.get(`/chatrooms/${chatroomId}`);
