export const extractLinkedInUsername = (url: string) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([^\/?#&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
export const extractGitHubUsername = (url: string) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/?#&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
export const extractInstagramUsername = (url: string): string | null => {
  const regex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/([^\/?#&]+)/;
  const match = url.match(regex);
  if (match && match[1]) {
    return match[1];
  }
  return null;
};
