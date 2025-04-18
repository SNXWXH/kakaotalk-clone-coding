import api from './axios';

//채팅방 목록 불러오기
export const getChatRoom = () =>
  api.get('/users/me/chatrooms', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
