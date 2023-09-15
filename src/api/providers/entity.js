import api, { getImageUrl } from '..';
import { convertItemsToTiles } from '../formatters/ItemFormatter';

export function getRecommendations({type, id}) {
  return api.get(`/${type}/${id}/recommendations`).then(
    ({ results }) => convertItemsToTiles(results.slice(0, 9))
  );
}

export function getCredits({type, id}) {
  return api.get(`/${type}/${id}/credits`).then(
    ({ cast }) => convertItemsToTiles(cast.slice(0, 9))
  );
}

export function getInfo({type, id}) {
  return api.get(`/${type}/${id}`).then(
    (data) => ({
      backgroundImage: getImageUrl(data.backdrop_path, 'original'),
      ...data
    }));
}
