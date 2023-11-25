/* eslint-disable @typescript-eslint/no-explicit-any */
export const textClamp = (text: string, max: number = 15) => {
  if (text && text.trim()) {
    const textTrim = text.trim();
    if (textTrim.length > max) return textTrim.substring(0, max) + '...';
    return textTrim;
  }

  return '';
};

/** slug generator */
export const slugify = (str: string, prefix = '-') => {
  const slug = String(str)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[đ]/g, 'd') // change đ to d
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, prefix) // replace spaces with hyphens
    .replace(/-+/g, prefix);
  return slug;
};

export const removeEmptyProperties = (obj: Record<string, any>) => {
  const newObj: Record<string, any> = {};

  for (const key in obj) {
    if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};
