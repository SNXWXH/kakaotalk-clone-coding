const formatTime = (time: string): string => {
  const date = new Date(time);

  const now = new Date();

  const isToday =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  if (isToday) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  } else {
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    return `${month}월 ${day}일`;
  }
};

export default formatTime;
