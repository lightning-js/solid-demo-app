import { getImageUrl } from '../index';

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + '...';
  }
  return str;
}

export function chunkArray(array, size = 7) {
  let result = [];
  for (let i = 0, j = array.length; i < j; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export function convertItemsToTiles(items = []) {
  return items.map((item) => {
    return {
      src: getImageUrl(item.poster_path || item.profile_path),
      backdrop: getImageUrl(item.backdrop_path, 'original'),
      href: `/entity/${item.media_type || 'people'}/${item.id}`,
      shortTitle: truncateString(item.title || item.name, 30),
      title: item.title || item.name,
      data: item,
    };
  });
}
