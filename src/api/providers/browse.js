import api from '../';
import { convertItemsToTiles, chunkArray } from '../formatters/ItemFormatter';

let leftoverTiles = [];
let cache = new Map();
export default function (pageIndex) {
  if (cache.has(pageIndex)) {
    return cache.get(pageIndex);
  }

  let result = api.get('/trending/all/week?page=' + pageIndex).then((trending) => {
    let results = trending.results.filter((r) => !r.adult);
    let tiles = leftoverTiles.concat(convertItemsToTiles(results));
    let chunks = chunkArray(tiles);
    if (chunks[chunks.length - 1].length < 7) {
      leftoverTiles = chunks.pop();
    } else {
      leftoverTiles = [];
    }
    return chunks
  });

  cache.set(pageIndex, result);
  return result;
}
