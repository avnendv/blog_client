import dayjs from 'dayjs';

export function formatTimeAgo(date: string) {
  const now = dayjs();
  const diffInMilliseconds = now.diff(date);

  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) return `${seconds} giây trước`;
  else if (minutes < 60) return `${minutes} phút trước`;
  else if (hours < 24) return `${hours} giờ trước`;
  else if (days < 30) return `${days} ngày trước`;
  else if (months < 12) return `${months} tháng trước`;
  else return `${years} năm trước`;
}
