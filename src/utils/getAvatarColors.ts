import { AVATAR_COLORS } from 'constants/colors';


export const getAvatarColor = (str: string): string => {
  const hash = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
};