import api, { getImageUrl } from '..';
import { convertItemsToTiles } from '../formatters/ItemFormatter';

export function minutesToHMM(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return hours + 'h ' + (remainingMinutes < 10 ? '0' : '') + remainingMinutes + 'm';
}

function justYear(dateString) {
  const parts = dateString.split("-");
  return parts[0];
}

export function getRecommendations({type, id}) {
  return api.get(`/${type}/${id}/recommendations`).then(
    ({ results }) => {
      if (results.length) {
        return convertItemsToTiles(results.slice(0, 7));
      }
      return api.get(`/trending/${type}/week?page=1`).then(
        ({ results }) => convertItemsToTiles(results.slice(0, 7)));
    }
  );
}

export function getCredits({type, id}) {
  return api.get(`/${type}/${id}/credits`).then(
    ({ cast }) => convertItemsToTiles(cast.slice(0, 7))
  );
}

export function getInfo({type, id}) {
  let rt = type === 'movie' ? {
    rtCrit: 86,
    rtFan: 92
  } : {};

  return api.get(`/${type}/${id}`).then(
    (data) => ({
      backgroundImage: getImageUrl(data.backdrop_path, 'original'),
      heroContent: {
        title: data.title || data.name,
        description: data.overview,
        badges: ['HD'],
        metaText: type === 'movie' ?
          minutesToHMM(data.runtime) + ' - ' + data.release_date : `${justYear(data.first_air_date)} - ${justYear(data.last_air_date)}`,
        reviews: rt,
      },
      ...data
    }));
}
