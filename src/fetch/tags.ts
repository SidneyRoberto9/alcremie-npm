import axios from 'axios';

import { BASE_URL } from '../variables';
import { TagResponse, GetTagResponse } from '../types';

interface TagProps {
  q?: string;
  limit?: number;
}

/**
 * Fetches tags in the application.
 * @param {string} q - Query for tag search.
 * @param {number} limit - Maximum number of tags to retrieve.
 * @returns {TagResponse} An object containing 'tags' and 'total'.
 */
async function tags(tagsProps?: TagProps): Promise<TagResponse> {
  const q = tagsProps ? tagsProps.q.toLowerCase().trim() : '';
  const limit = tagsProps ? tagsProps.limit : 10;

  const url = BASE_URL + '/tag';

  const { data } = await axios.get<GetTagResponse>(url, {
    params: {
      q,
      limit,
    },
  });

  const { tag, total } = data;

  return {
    tags: tag.map((tag) => ({ id: tag.id, name: tag.name })),
    total,
  } as TagResponse;
}

export { tags };
