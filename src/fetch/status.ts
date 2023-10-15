import axios from 'axios';

import { BASE_URL } from '../variables';
import { Status, GetStatusResponse } from '../types';

/**
 * Get application statistics, including the counts of images, tags, and requests.
 * @returns {Status} An object with 'images', 'tags', and 'requests' totals.
 */
async function status(): Promise<Status> {
  const url = BASE_URL + '/status';

  const { data } = await axios.get<GetStatusResponse>(url);

  const { image, request, tag } = data.statistics;

  return {
    image,
    request,
    tag,
  } as Status;
}

export { status };
