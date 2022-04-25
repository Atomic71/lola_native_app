import {useQuery, useQueryClient} from 'react-query';
import apiClient from '../api/apiClient';
import {adaptAuthorForUi} from './utils/adaptAuthorForUI';

const makeGetAuthorById = id => async () => {
  const {data} = await apiClient.get(
    `/users/${id}?_fields=id,name,description,avatar_urls`,
  );
  return adaptAuthorForUi(data);
};

const useAuthor = authorId => {
  const client = useQueryClient();
  const {data, isLoading} = useQuery(
    ['author', authorId],
    makeGetAuthorById(authorId),
    {
      initialData: (...rest) => {
        const {data: cacheAuthorData} = client.getQueryState('authors');

        if (cacheAuthorData.length) {
          const authorInCache = cacheAuthorData.find(
            author => author.id === authorId,
          );
          if (authorInCache) {
            return authorInCache;
          }
        }
      },
    },
  );

  console.log(data);
  return {
    author: data,
    loadingAuthor: isLoading,
  };
};

export default useAuthor;
