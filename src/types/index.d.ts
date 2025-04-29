export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
};

export type UserInfo = {
  bio: string | null;
  created_at: string;
  email: string;
  id: number;
  name: string;
  phone_number: string;
  profile_image_url: string;
  updated_at: string;
};

export type LastMsg = {
  id: number;
  chatroom_id: number;
  sender_id: number;
  content: string;
  created_at: string;
  updated_at: string;
} | null;

export type ChatRoom = {
  id: number;
  first_user_id: number;
  second_user_id: number;
  created_at: string;
  updated_at: string;
  other_user: UserInfo;
  last_message: LastMsg;
};

export type Message = {
  id: number;
  chatroom_id: number;
  sender_id: number;
  content: string;
  created_at: string;
  updated_at: string;
};
