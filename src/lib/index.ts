export const capFirstLetterInWord = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const getBearerToken = () =>
  localStorage?.tid ? `Bearer ${localStorage.tid}` : "";
