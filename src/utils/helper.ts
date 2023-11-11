export const textClamp = (text: string, max: number = 15) => {
  if (text && text.trim()) {
    const textTrim = text.trim();
    if (textTrim.length > max) return textTrim.substring(0, max) + '...';
    return textTrim;
  }

  return '';
};
