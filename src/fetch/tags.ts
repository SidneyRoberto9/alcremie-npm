import axios from 'axios';

import { BASE_URL } from '../variables';
import { TagResponse, GetTagResponse } from '../types';

interface TagProps {
  q: string;
  limit: number;
}

/**
 * Fetches tags in the application.
 * @param {string} q - Query for tag search.
 * @param {number} limit - Maximum number of tags to retrieve.
 * @returns {TagResponse} An object containing 'tags' and 'total'.
 */
async function tags({ q = '', limit = 10 }: TagProps): Promise<TagResponse> {
  const url = BASE_URL + '/tag';

  q = q.toLowerCase().trim();

  const { data } = await axios.get<GetTagResponse>(url, {
    params: {
      q,
      limit,
    },
  });

  const { tags, total } = data;

  return {
    tags: tags.map((tag) => ({ id: tag.id, name: tag.name })),
    total,
  } as TagResponse;
}

export { tags };
